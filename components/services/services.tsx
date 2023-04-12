import Image from "next/image";

import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Data} from "@/lib/utils";

interface Props {
  posts: Data[];
}

const Services: React.FC<Props> = ({posts}) => {
  const filteredArray = posts.filter((obj) => {
    const values = Object.values(obj);

    return values.slice(1, 5).every((value) => value !== "");
  });

  const allowedDomains = [
    "https://scontent.ftuc1-1.fna.fbcdn.net",
    "https://scontent.ftuc1-2.fna.fbcdn.net",
    "https://flic.kr",
    "https://live.staticflickr.com/",
  ];

  const services = filteredArray
    .map((obj) => {
      if (
        obj.imagenServicio &&
        allowedDomains.some((domain) => obj.imagenServicio.startsWith(domain))
      ) {
        return {
          tituloServicio: obj.tituloServicio,
          descripcionServicioCorta: obj.descripcionServicioCorta,
          imagenServicio: obj.imagenServicio,
        };
      }
    })
    .filter(Boolean);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((obj) => (
          <div
            key={obj?.tituloServicio}
            className="w-[375px] relative px-3 sm:px-0 transition-all hover:scale-105"
          >
            <AspectRatio ratio={16 / 9}>
              {obj?.imagenServicio && (
                <Image
                  fill
                  alt="echazu-example"
                  className="rounded-md object-fill"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  src={obj.imagenServicio}
                />
              )}
            </AspectRatio>
            <div className="absolute bottom-0 px-5 pb-4 sm:w-full h-[70px]">
              <h1 className="capitalize font-semibold text-sm mb-1">{obj?.tituloServicio}</h1>
              <p className="capitalize font-semibold text-sm">{obj?.descripcionServicioCorta}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-3">
        <p className="">Para ver más y detallados nuestros servicios:</p>
        <button className="border rounded-md px-4 py-1 border-emerald-700">Tocá aquí</button>
      </div>
    </div>
  );
};

export default Services;
