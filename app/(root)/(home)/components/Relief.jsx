import React from "react";
import Slider from "react-slick";
import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Relief = () => {
  const images = [
    "/flood1.svg",
    "/flood2.svg",
    "/flood3.svg",
    "/flood4.svg",
    "/flood5.svg",
    "/flood6.svg",
    "/flood7.svg",
    "/flood8.svg",
    "/flood9.svg",
    "/flood10.svg",
    "/flood11.svg",
    "/flood12.svg",
    "/flood13.svg",
    "/flood14.svg",
  ];

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      className="hidden md:flex absolute right-2 md:right-0 z-10 top-1/2 transform -translate-y-1/2 text-white bg-accent rounded-full p-[6px] hover:bg-accent-dark"
      onClick={onClick}
    >
      <ChevronRight size={16} className="md:h-4 md:w-4" />
    </button>
  );

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      className="hidden md:flex absolute left-2 md:left-0 z-10 top-1/2 transform -translate-y-1/2 text-white bg-accent rounded-full p-[6px] hover:bg-accent-dark"
      onClick={onClick}
    >
      <ChevronLeft size={16} className="md:h-4 md:w-4" />
    </button>
  );

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      className="w-full md:px-[50px] px-[10px] py-[15px] md:py-[25px]"
      id="relief-section"
    >
      <p className="text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold">
        Support Maiduguri Flood Relief
      </p>
      <div className="w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-[20px]">
        <div className="relative w-full h-64 md:h-[400px]">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative">
                <Image
                  src={src}
                  alt={`Image of flood relief scenario ${index + 1}`}
                  className="ml-[70px] md:ml-[100px] w-[68%] h-[65%] object-cover rounded-lg items-center"
                  width={867}
                  height={732}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-neutral-700">
            Help Us Support the Maiduguri Flood Victims
          </h2>
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

          <p className="mt-4 text-sm md:text-base text-neutral-600 font-bold">
            Join our community to see the NGO's we're collaborating with and how
            we plan on making a difference.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href={socialLinks.community}
              passHref
              className="flex gap-[6px] bg-[#036] py-[10px] px-[15px] rounded-[8px] text-white text-[15px] items-center justify-center font-semibold hover:bg-blue-700 mb-2"
            >
              Join our community
              <ArrowRight size={"18"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relief;
