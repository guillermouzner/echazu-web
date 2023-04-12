import Services from "components/services/services";
import Image from "next/image";
import {Suspense} from "react";
import Papa from "papaparse";

import echazuWeb from "../public/foto.png";

import Slider from "@/components/slider/slider";
import ContactoForm from "@/components/contact/contact";
import {Data} from "@/lib/utils";

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

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <div className="h-[115px] sm:h-[450px] max-w-full">
        <Slider />
      </div>
      <div
        className="bg-gray-800 mx-auto flex flex-col items-center max-w-3xl mt-5 sm:mt-8 px-4 lg:px-0"
        id="nosotros"
      >
        <h1 className="text-emerald-600 font-semibold capitalize whitespace-nowrap">
          nuestra historia
        </h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        <p className="text-white text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum totam cumque repellat ea
          in facere, ipsam quam repellendus accusamus natus provident expedita quia quis eveniet
          explicabo veritatis ratione quisquam adipisci minus quasi eligendi reprehenderit! Quia,
          obcaecati. Deleniti quia nemo, tenetur, earum optio, commodi molestiae quod labore
          corrupti non molestias officia dignissimos exercitationem. Iure officia vitae hic dolorem
          consequuntur fugit? Earum, ipsa error in hic reiciendis reprehenderit voluptatem magnam
          inventore similique quae debitis rem id beatae explicabo voluptate quasi tempore
          blanditiis libero, placeat nulla porro sit! Cumque sit error tempore, fugiat expedita et
          debitis rem ex, ut modi ullam, esse magni?
        </p>
        <div className="border rounded-xl w-full flex flex-col items-center my-8">
          <p className="text-lg capitalize relative -top-4 bg-gray-800 px-6">nuestros valores</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 mb-6">
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
            <p className="text-green-300 bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 text-base capitalize">
              efectividad
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <Image alt="main" src={echazuWeb} />
      </div>
      {/*  */}
      <div className="bg-gray-800 mx-auto flex flex-col items-center max-w-3xl my-6" id="servicios">
        <h1 className="text-emerald-600 font-semibold capitalize">servicios</h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        {/* componente servicios */}
        <Services posts={posts} />
      </div>
      {/*  */}
      <div className="bg-gray-800 mx-auto flex flex-col items-center max-w-3xl my-6" id="contacto">
        <h1 className="text-emerald-600 font-semibold capitalize">contacto</h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        <div className="pb-8 w-full">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <iframe
              className="h-64 w-full sm:w-full"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.244422925651!2d-65.24732668513197!3d-26.832177096312275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c8c638e026f%3A0x9fb9dfb4c58e3442!2sLavalle%202974%2C%20T4000AZH%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1671908043565!5m2!1ses!2sar"
            />
          </Suspense>
        </div>
        {/* componente contacto */}
        <ContactoForm />
      </div>
    </>
  );
};

export default Home;
