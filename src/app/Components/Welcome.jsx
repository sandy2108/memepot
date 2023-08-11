"use client"

import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative w-full min-h-screen bg-black z-10">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="items-center pt-10 md:pt-20 relative z-20">
          <div className="flex items-center py-5">
            <h1 className="font-bold text-3xl md:text-6xl max-w-[680px] text-white">
              Welcome to the{" "}
              <span className="text-[#Afff03]">MemePot Community</span>
            </h1>
          </div>
          <div className="max-w-6xl my-5">
            {/* ...Your paragraphs of text */}
           
            <p className="text-white font-normal text-md md:text-xl">
              MemePot is the hottest new meme project. MemePot is a community
              driven project, with daily and monthly rewards to keep the
              community engaged and volume pouring in for those green god
              candles that keep the chads pumping and shilling
            </p>
            <p className="my-5 text-white font-normal text-md md:text-xl">
              MemePot is the only MemeFi Community that rewards chads and degens
              for apeing and jeeting! The only catch, no jeeting before the
              daily MemePot drawing.
            </p>
            <p className="my-5 text-white font-normal text-md md:text-xl">
              MemePot gives away free ETH every day to pump your bags, build and
              grow the community, and to promote decentralized innovation.
            </p>
          </div>
        </div>
        <div className="absolute opacity-[0.3] md:opacity-100 md:flex right-[42px] bottom-[35px] z-0">
          <Image
            src="/money.png"
            height={90}
            width={400}
            alt="/"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
