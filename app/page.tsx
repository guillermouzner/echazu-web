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
    {next: {revalidate: 86400}},
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
    <div className="text-white">
      <div className="h-[115px] sm:h-[450px] max-w-full">
        <Slider />
      </div>
      <div
        className="bg-gray-800 mx-auto flex flex-col max-w-3xl mt-10 sm:-mt-44 lg:mt-40 px-4 lg:px-0"
        id="nosotros"
      >
        <h1 className="text-emerald-600 font-semibold capitalize text-center whitespace-nowrap text-base lg:text-xl">
          quienes somos
        </h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        <p className="text-white text-sm">ECHAZ&Uacute; GROUP, compuesto por:</p>
        <div className="pt-4">
          <h2 className="uppercase">transporte echaz&uacute;</h2>
          <p>
            Servicios de Transporte y Logística integral a través de todo el país. Contando con una
            amplia flota de camiones y diferentes servicios.
          </p>
        </div>
        <div className="pt-4">
          <h2 className="uppercase">GESTYA</h2>
          <p>Servicio de seguimiento satelital y gestión de datos remotos.</p>
        </div>
        <div className="pt-4">
          <h2 className="uppercase">AGSA</h2>
          <p>
            Comercialización de accesorios y repuestos para vehículos pesados y livianos,
            mantenimiento y reparación, brindando seguridad, responsabilidad y compromiso a través
            de nuestro personal altamente capacitado.
          </p>
        </div>
        <div className="pt-4">
          <h2 className="uppercase">corralon echaz&uacute;</h2>
          <p>
            Amplia gama en materiales de construcción, ferretería, iluminación, sección hogar
            decoración, electrodomésticos, muebles de interior y exterior. En un local de más de
            5.000 m2, brindando comodidad, eficacia y bienestar a nuestros clientes.
          </p>
        </div>
        <div className="pt-4">
          <p className="font-semibold">Somos distribuidores oficiales de LOMA NEGRA.</p>
        </div>

        {/* Principales clientes */}
        <div className="border rounded-xl w-full flex flex-col items-center my-8">
          <p className="text-sm lg:text-lg relative -top-2 lg:-top-4 bg-gray-800 px-6">
            Nuestros Principales clientes pertenecen a las siguientes industrias
          </p>
          <div className="grid grid-cols-2  sm:grid-cols-3 mb-6 text-center">
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              construcci&oacute;n
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              alimentos y bebidas
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              petroqu&iacute;mica
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              sider&uacute;rgica
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              papeleras
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              maquinarias agricolas
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              maquinarias viales
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              caucho y pl&aacute;stico
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              miner&iacute;a
            </p>
          </div>
        </div>
        {/* Objetivo */}
        <div className="border rounded-xl w-full flex flex-col items-center my-4">
          <p className="text-lg font-semibold bg-gray-800 pt-6 px-6">
            Nuestro objetivo no es ser solo un proveedor,
          </p>
          <p className="text-lg font-semibold bg-gray-800 pb-6 px-6">
            sino llegar a ser un socio estratégico de nuestro cliente
          </p>
        </div>
        {/*  */}
        <div className="pt-4">
          <p className="">
            Para lograr esto, en ECHAZU GROUP generamos unidades de negocio nuevas creando nuevas
            fuentes de trabajo. Brindando un servicio más integral, adaptándonos a las necesidades
            de nuestros clientes. Asumiendo un compromiso a nivel empresa, con un aporte de valor
            agregado, mediante acciones en lo social, ambiental y económico.{" "}
          </p>
        </div>

        {/* Vision */}
        <h1 className="text-emerald-600 font-semibold capitalize text-center whitespace-nowrap text-base lg:text-xl pt-8">
          Vision
        </h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        <p className="">
          Ser reconocidos como uno de los mejores en nuestras diferentes actividades, desarrollando
          nuestros recursos humanos y técnicos, para alcanzar un alto estándar de calidad y servicio
          hacia nuestros clientes
        </p>
        {/* Valores */}
        <h1 className="text-emerald-600 font-semibold capitalize text-center whitespace-nowrap text-base lg:text-xl pt-8">
          Valores
        </h1>
        <hr className="w-full border-2 border-emerald-600 mt-2 mb-8" />
        <p className="">
          En ECAHZU GROUP los Valores son una parte esencial de nuestra cultura empresarial,
          asumiendo nuestro mayor esfuerzo día a día, tanto en lo individual como en esfuerzo grupal
          y en equipo, buscando transmitir eso hacia nuestros clientes.
        </p>
        <div className="border rounded-xl w-full flex flex-col items-center my-8">
          <p className="text-sm lg:text-lg relative -top-2 lg:-top-4 bg-gray-800 px-6">
            Nuestros Valores
          </p>
          <div className="grid grid-cols-2  sm:grid-cols-3 mb-6 text-center">
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              aprendizaje
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              honestidad
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              confianza
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              eficiencia
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              evolucion
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              experiencia
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              humildad
            </p>
            <p className="h-9 text-sm lg:text-base lg:h-12 flex items-center text-white bg-green-600 rounded-md my-2 mx-5 px-4 sm:my-5 sm:mx-10 sm:px-8 capitalize justify-center">
              respeto
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
    </div>
  );
};

export default Home;
