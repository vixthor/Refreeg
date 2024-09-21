import React from "react";
import Slider from "react-slick";
import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Relief = () => {
  // Images for the carousel
  const images = ["", "", ""];

  // Slider settings for responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // you can enable arrows if desired
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className="w-full md:px-[50px] px-[10px] py-[15px] md:py-[25px]"
      id="relief-section"
    >
      <p className="text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold" id="relief-section">
      </p>
      <div className="w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-[20px]">
        {/* Image slider section */}
        <div className="relative w-full h-64 md:h-[400px]">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="h-full w-full relative">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text content section */}
        <div className="flex flex-col justify-center">
          {/* <h2 className="text-2xl md:text-4xl font-bold text-neutral-700">
            Support Maiduguri Flood Relief
          </h2> */}
          <p className="mt-4 text-sm md:text-base text-neutral-600">
            Floods have devastated the community in Maiduguri, leaving families
            in urgent need of help. At RefreeG, we believe in the power of
            community-driven action. That’s why we’re mobilizing our network to
            provide donations and relief to those who need it most.
          </p>

          <p className="mt-4 text-sm md:text-base text-neutral-600">
            Here's how you can help:
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm md:text-base text-neutral-600">
            <li>
              <strong>Donate:</strong> Help us provide essential items such as
              food, water, medical supplies, and temporary shelter.
            </li>
            <li>
              <strong>Join our community:</strong> Be part of the solution by
              joining our Telegram group, where you can stay updated on relief
              efforts and see the direct impact of your support.
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {/* Donate Button */}
            <Link
              href="/"
              className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition"
            >
              Donate
            </Link>

            {/* Join our Community Button */}
            <Link
              href={socialLinks.community}
              passHref
              className="bg-light text-accent py-2 px-4 rounded-md border border-accent hover:bg-accent hover:text-white transition"
            >
              Join our community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relief;
