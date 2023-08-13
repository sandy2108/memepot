"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn,textVariant, animateSlideIn, staggerContainer } from "@/utils";
import { TitleText, TypingText } from "./CustomText";
import Image from "next/image";

export default function Audits() {
  
    const animateText = textVariant(1.2);
    const animateSlideIn = slideIn("left", "tween", 0.2, 1);

  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 herobg relative `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <Image src="/star.svg" width={20} height={20} alt="star" />
        <TypingText
          title="KYC Verified"
          textStyles="text-center font-normal text-[#80e956] text-2xl"
        />
        <div className="absolute  right-1/3 bottom-0 mt-5 md:mt-20">
          <Image src="/star.svg" width={20} height={20} alt="star" />
        </div>
        <TitleText
          title={<>Your Security, Our Priority </>}
          textStyles="text-center text-white"
        />
        <div className="absolute  right-[100px] center-0 mt-5 md:mt-20">
          <Image src="/star.svg" width={20} height={20} alt="star" />
        </div>

        <motion.div
          variants={animateSlideIn}
          className="text-2xl font-bold text-white cols-span-6 flex items-center my-2 justify-center"
        >
          <div className="rounded-xl border-2 solid overflow-hidden border-white">
            <Image
              src="/kyc.jpg"
              width={300}
              height={280}
              className="w-[320px] h-[350px] md:w-[750px] md:h-[480px] object-cover"
              alt="memepot"
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
