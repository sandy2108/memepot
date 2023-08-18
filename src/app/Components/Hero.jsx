"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideIn, staggerContainer, textVariant } from "@/utils";
import { TitleText } from "./CustomText";
import Link from "next/link";

const Hero = () => {
  const animateText = textVariant(1.2);
  const animateSlideIn = slideIn("left", "tween", 0.2, 1);

  return (
    <section className="herobg w-full relative">
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bgimage"
      > 
      
        <div className="max-w-[1340px] mx-auto p-4">
          <div className="grid grid-cols-1 items-center justify-center">
          <div className="absolute top-1/3 right-[70px] z-2">
              <Image src="star.svg" height={20} width={20} alt="star" />
            </div>
            <motion.div variants={animateText} className="my-2 px-2">
              <TitleText
                title={
                  <>
                    THE NEW KING OF MEMES
                    <br className="md:block hidden font-SharpGrotesk" />
                  </>
                }
                textStyles="text-center text-white"
              />
              <TitleText
                title={
                  <>
                    MEMEPOT | $POT
                    <br className="md:block hidden" />
                  </>
                }
                textStyles="text-center my-2 text-[#Afff03]"
              /> 
              <div className="flex items-start justify-around">
              <Image src="star.svg" height={20} width={20} className="opacity-20 " alt="star" />
              <Link href="https://gempad.app/presale/0x91cCF0F9e0FACa039b28aBa03f1C5d4Ebcd0E1C6" target="_blank"><button class="Btn">Presale Ends! </button></Link>
              <Image src="star.svg" height={20} width={20} alt="star"  />
              
              </div>
            
            </motion.div>
            <div className="absolute md:top-1/3 top-0 opacity-20 left-5 z-2">
              <Image src="star.svg" height={20} width={20} alt="star" />
            </div>

            <motion.div
              variants={animateSlideIn}
              className="text-2xl font-bold text-white cols-span-6 flex items-center justify-center"
            >
              <div className="rounded-xl border-2 solid overflow-hidden border-white">
                <Image
                  src="/memepot.jpg"
                  width={300}
                  height={280}
                  className="w-[320px] h-[350px] md:w-[480px] md:h-[480px]"
                  alt="memepot"
                />
              </div>
             

            </motion.div>
            <motion.div variants={animateText} className="my-2 px-2 flex items-center justify-center">
            <Image src="star.svg" height={20} width={20} alt="star" />
              <h2 className="text-lg md:text-2xl font-bold text-gray-200 flex text-center  max-w-[550px] my-5 md:py-4">
                     The greatest memecoin community in the world deserves the greatest rewards programs ever seen in Degenland
              </h2>
              <Image src="star.svg" height={20} width={20} className="opacity-20 " alt="star" />
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ImageBlock = ({ src, alt, width, height, className, top, right, left }) => (
  <div
    className={`absolute ${top} ${right} ${left} center-0`}
  >
    <Image src={src} width={width} height={height} alt={alt} className={className} />
  </div>
);

export default Hero;
