"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideIn, staggerContainer, textVariant } from "@/utils";
import { TitleText } from "./CustomText";

const Hero = () => {
  const animateText = textVariant(1.2);
  const animateSlideIn = slideIn("left", "tween", 0.2, 1);

  return (
    <section className="herobg w-full">
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bgimage"
      > 
      
        <div className="max-w-[1340px] mx-auto p-4">
          <div className="grid grid-cols-1 items-center justify-center">
            <motion.div variants={animateText} className="my-2 px-2">
              <TitleText
                title={
                  <>
                    NEW KING OF MEME
                    <br className="md:block hidden font-SharpGrotesk" />
                  </>
                }
                textStyles="text-center"
              />
              <TitleText
                title={
                  <>
                    MEMEPOT
                    <br className="md:block hidden" />
                  </>
                }
                textStyles="text-center my-2 text-green-400"
              />

              <h2 className="text-lg md:text-2xl font-normal text-gray-200 flex items-center justify-center my-5 md:py-4 md:px-4">
                Grab Daily and Mega Memepots
              </h2>
            </motion.div>


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
              {/* ... (rest of your code) */}
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
