import Papa from "papaparse";
import Image from "next/image";

import {Data} from "@/lib/utils";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const fetchPosts = async () => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSc2HcWNLctcQqcBgKiP6UKnZ7UJqxscwJjuFxk4oDFOzIOQ68q9DVjyFv3KcyhAB8bynpnmO_Zam7Y/pub?output=csv",
    {next: {revalidate: 10}},
  );

  const csvData = await response.text();
  const results = await new Promise<Papa.ParseResult<Data>>((resolve, reject) => {
    Papa.parse<Data>(csvData, {
      header: true,
      complete: (results) => resolve(results),
      error: (error: Error) => reject(error.message),
    });
  });

  return results.data;
};

const Servicios = async () => {
  const posts = await fetchPosts();
  const allowedDomains = [
    "https://scontent.ftuc1-1.fna.fbcdn.net",
    "https://scontent.ftuc1-2.fna.fbcdn.net",
    "https://flic.kr",
    "https://live.staticflickr.com/",
  ];

  const services = posts
    .map((obj) => {
      if (
        obj.imagenServicio &&
        allowedDomains.some((domain) => obj.imagenServicio.startsWith(domain))
      ) {
        return {
          tituloServicio: obj.tituloServicio,
          descripcionServicioLarga: obj.descripcionServicioLarga,
          imagenServicio: obj.imagenServicio,
        };
      }
    })
    .filter(Boolean);

  return (
    <div className="max-w-md sm:max-w-xl flex flex-col mx-auto gap-4 mb-8">
      {services.map((obj, i) => (
        <div key={i}>
          <h1 className="text-xl items-center text-center m-3 capitalize">{obj?.tituloServicio}</h1>
          <AspectRatio ratio={4 / 3}>
            {obj?.imagenServicio && (
              <Image
                fill
                alt="echazu-example"
                className="rounded-md w-10 h-10"
                loading="lazy"
                src={obj.imagenServicio}
              />
            )}
          </AspectRatio>
          <p className="text-lg my-2 mx-2 items-center text-start">
            {obj?.descripcionServicioLarga}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Servicios;
