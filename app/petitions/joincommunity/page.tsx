'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function JoinCommunity() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Default Title";

  return (
    <div className="flex flex-col px-6 sm:px-12 gap-4 sm:gap-6">
      <div className="mx-auto">
        <Image
          src="/petitions/image 31.png"
          alt="Sign"
          className="mx-auto"
          width={300}
          height={300} 
        />
      </div>
      <div>
        <h1 className="text-center text-[#0a0a0b] text-xl sm:text-2xl font-medium font-montserrat mb-2">
          What to do to ensure your petition counts:)
        </h1>
        <p className="text-[#0a0a0b]  text-sm sm:text-base font-normal font-montserrat">
          Your voice matters, and every signature takes us closer to driving
          meaningful change. By joining our community, you not only sign this
          petition but become part of a movement that ensures real impact. As a
          member of RefreeG’s community, you’ll stay informed, connect with
          like-minded changemakers, and amplify your influence by sharing
          updates and progress on the causes you care about. Together, we can
          ensure this petition is not just a signature but a step toward a
          better tomorrow. Join us today and be part of the solution!
        </p>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 sm:gap-6">
        <Link href={`/petitions/petition?title=${encodeURIComponent(title)}`}>
          <button className="w-full sm:w-[300px] px-4 py-2 bg-[#b5b3b3] rounded-md text-neutral-50 text-base font-semibold font-montserrat hover:bg-[#737272] transition-colors">
            Skip
          </button>
        </Link>

        <Link href="http://t.me/+d67UCIer8c01ODhk">
          <button className="w-full sm:w-[300px] flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 rounded-md text-neutral-50 text-base font-semibold font-montserrat hover:bg-[#214b7b] transition-colors">
            Join Community
            <Image
              src="/petitions/chevron-right 2.svg"
              alt="join"
              className=""
              width={16}
              height={16}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
