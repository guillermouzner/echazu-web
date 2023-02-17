import "./globals.css";

import {Inter} from "@next/font/google";
import Navbar from "components/navbar/navbar";
const inter = Inter({subsets: ["latin"]});

const links = [
  {
    label: "nosotros",
    route: "/",
  },
  {
    label: "servicios",
    route: "/servicios",
  },
  {
    label: "contacto",
    route: "/contacto",
  },
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={inter.className} lang="es">
      <head />
      <body>
        <Navbar links={links} />
        {children}
      </body>
    </html>
  );
}
