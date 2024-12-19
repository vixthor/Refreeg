import Header from "@/components/shared/Header";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Back Link Section  */}
      <div className="px-6 py-8 md:px-14 md:py-16">
        <a href="/bookdrive" className="underline hover:text-blue-600">
          Go Back
        </a>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col gap-14">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[56px] text-[#424242] font-bold font-montserrat leading-[67.20px]">
            What Are You Donating?
          </h1>
        </div>

        {/* Flex Container for Donation Items */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Donation Item - Books */}
          <Link href="https://forms.gle/Gri7ycHPXEfRBEPy9">
            <span className="flex flex-col items-center gap-2">
              {/* Button for Books Item */}
              <button className="border-2 border-gray-300 rounded-full p-4 md:p-2 hover:bg-[#cedef1] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.30)] transition-all duration-300">
                <Image
                  src="/whatareyoudonating/Books.svg"
                  width={80}
                  height={80}
                  alt="Books"
                />
              </button>
              {/* Label for Books */}
              <h3 className="text-black text-lg md:text-[20px] font-normal font-montserrat">
                Books
              </h3>
            </span>
          </Link>

          {/* Donation Item - Clothes */}
          <Link href="https://forms.gle/Gri7ycHPXEfRBEPy9">
            <span className="flex flex-col items-center gap-2">
              {/* Button for Clothes Item */}
              <button className="border-2 border-gray-300 rounded-full p-4 md:p-2 hover:bg-[#a4f4e7] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.30)] transition-all duration-300">
                <Image
                  src="/whatareyoudonating/Raincoat_1.svg"
                  width={80}
                  height={80}
                  alt="Clothes"
                />
              </button>
              {/* Label for Clothes */}
              <h3 className="text-black text-lg md:text-[20px] font-normal font-montserrat">
                Clothes
              </h3>
            </span>
          </Link>

          {/* Donation Item - Gadgets */}
          <Link href="https://forms.gle/Gri7ycHPXEfRBEPy9">
            <span className="flex flex-col items-center gap-2">
              {/* Button for Gadgets Item */}
              <button className="border-2 border-gray-300 rounded-full p-4 md:p-2 hover:bg-[#e3d3e9] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.30)] transition-all duration-300">
                <Image
                  src="/whatareyoudonating/Multiple-Devices_1.svg"
                  width={80}
                  height={80}
                  alt="Gadgets"
                />
              </button>
              {/* Label for Gadgets */}
              <h3 className="text-black text-lg md:text-[20px] font-normal font-montserrat">
                Gadgets
              </h3>
            </span>
          </Link>

          {/* Donation Item - Food */}
          <Link href="https://forms.gle/Gri7ycHPXEfRBEPy9">
            <span className="flex flex-col items-center gap-2">
              {/* Button for Food Item */}
              <button className="border-2 border-gray-300 rounded-full p-4 md:p-2 hover:bg-[#ffe5c6] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.30)] transition-all duration-300">
                <Image
                  src="/whatareyoudonating/Food-Bar.svg"
                  width={80}
                  height={80}
                  alt="Food"
                />
              </button>
              {/* Label for Food */}
              <h3 className="text-black text-lg md:text-[20px] font-normal font-montserrat">
                Food
              </h3>
            </span>
          </Link>

          {/* Donation Item - Money  */}
          <Link href="#">
            <span className="flex flex-col items-center gap-2">
              {/* Button for Money Item */}
              <button className="border-2 border-gray-300 rounded-full p-4 md:p-2 hover:bg-[#ea9c9c] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.30)] transition-all duration-300">
                <Image
                  src="/whatareyoudonating/Money-Bag.svg"
                  width={80}
                  height={80}
                  alt="Money"
                />
              </button>
              {/* Label for Money  */}
              <h3 className="text-black text-lg md:text-[20px] font-normal font-montserrat">
                Money
              </h3>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
