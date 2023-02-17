import Link from "next/link";
import Image from "next/image";

import logo from "./logo.png";
import logoMob from "./logoMob.png";
import fb from "./fb.png";
import gmail from "./gmail.png";
import ig from "./ig.png";

interface Link {
  label: string;
  route: string;
}

interface Props {
  links: Link[];
}

const Navbar: React.FC<Props> = ({links}) => {
  return (
    <header className="bg-zinc-200">
      <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-3 sm:gap-8 pl-1 pt-2 sm:h-32 w-full mx-auto">
        <Link className="" href="/">
          <Image priority alt="echazu" className="hidden md:block" src={logo} />
          <Image priority alt="echazu" className="ml-2 w-12 inline-block md:hidden" src={logoMob} />
        </Link>

        <nav className="mr-0">
          <ul className="flex flex-row sm:justify-center gap-4">
            {links.map(({label, route}) => (
              <li
                key={route}
                className="text-gray-800 sm:border-2 sm:border-emerald-600 rounded-md text-center capitalize sm:px-6 ml-2 sm:ml-0"
              >
                <a className="font-semibold" href={`/#${label}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden sm:flex flex-row justify-center items-center gap-8 mr-2">
          <li>
            <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
              <Image alt="fb" src={fb} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
              <Image alt="ig" src={ig} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
              <Image alt="gmail" src={gmail} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
