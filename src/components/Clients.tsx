"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <section className="px-16 py-12">
      <h1 className="text-[#00594C] text-3xl font-semibold">
        Partners & Clients
      </h1>
      <hr className="w-16 h-1 mt-1 bg-secondary" />
      <Slider {...settings}>
        {clients.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full h-full mt-2"
          >
            <Image
              src={`/clients/${i + 1}.png`}
              alt=""
              className="object-contain w-28 h-28 grayscale hover:grayscale-0 "
              width={200}
              height={200}
              loader={({ src }) => src}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Clients;
