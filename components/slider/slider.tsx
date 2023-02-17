"use client";
import Image from "next/image";
import {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

export interface Data {
  imagenSlider: string;
  tituloServicio: string;
  descripcionServicioCorta: string;
  descripcionServicioLarga: string;
  imagenServicio: string;
}

interface Props {
  posts: Data[];
}

const Slider: React.FC<Props> = ({posts}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = posts.map(({imagenSlider}) => imagenSlider);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // console.log(arrayImagenesSlider);
  // style={{backgroundImage: `url(${slides[currentIndex]})`}}
  return (
    <div className="max-w-full h-[300px] w-full m-auto relative group ">
      <div
        className="w-full h-full transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
          backgroundSize: "cover",
        }}
      />

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer"
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
