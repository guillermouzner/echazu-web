"use client";
import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
// import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

import slider1 from "@/public/slider1.jpg";
import slider2 from "@/public/slider2.jpg";
import slider3 from "@/public/slider3.jpg";
import slider4 from "@/public/slider4.jpg";
import slider5 from "@/public/slider5.jpg";
import slider6 from "@/public/slider6.jpg";

const Slider: React.FC = () => {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 2000);

    return () => clearInterval(interval);
  });

  const selectNewImage = (index: number, images: StaticImageData[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 1000);
  };

  // const previous = () => {
  //   selectNewImage(selectedIndex, images, false);
  // };

  // const next = () => {
  //   selectNewImage(selectedIndex, images);
  // };

  return (
    <div className="max-w-full w-full m-auto relative group ">
      <div className={`w-full h-full`}>
        <Image
          alt="Slider"
          className={`${loaded ? "opacity-100" : "opacity-0"} transition duration-1000`}
          src={selectedImage}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Slider;
