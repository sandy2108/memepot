"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { slideIn, staggerContainer, textVariant } from "@/utils";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomText";

const Hero = () => {
  return (
    <section className="herobg w-full relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="herobgs"
      >
        <div className="max-w-[1340px] mx-auto p-4">
          <div className="grid grid-cols-1 items-center justify-center">
            <motion.div variants={textVariant(1.2)} className="my-2 px-2">

            
    
              <TitleText
                title={
                  <>
                    NEW KING OF MEME <br className="md:block hidden font-SharpGrotesk" />
                  </>
                }
                textStyles="text-center"
              />
              <TitleText
                title={
                  <>
                    MEMEPOT <br className="md:block hidden" />
                  </>
                }
                textStyles="text-center my-2 text-green-400"
              />

              <h2 className="text-lg md:text-2xl font-normal text-gray-200 flex items-center justify-center my-5 md:py-4 md:px-4">
                Grab Daily and Mega Memepots
              </h2>
            </motion.div>

            <div className="absolute  right-[15px] top-0 mt-5 md:mt-20">
              <Image
                src="/dope.png"
                height={100}
                width={100}
                alt="/"
                className="opacity-[0.4] rotate-45"
              />
            </div>
            <div className="absolute  left-[10px] top-0 mt-5 md:mt-20">
              <Image
                src="/dope.png"
                height={100}
                width={100}
                alt="/"
                className="opacity-[0.4] -rotate-12"
              />
            </div>    
            <div className="absolute  right-[100px] top-0 mt-5 md:mt-20">
             <Image src="/star.svg" width={20} height={20} alt="star" />

            </div>    
            <Image src="/star.svg" width={20} height={20} alt="star" />

            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="text-2xl font-bold text-white cols-span-6 flex items-center justify-center"
            >
              <div className="rounded-xl border-2 solid overflow-hidden border-white">
                <Image
                  src="/memepot.jpg"
                  width={300}
                  height={280}
                  className="w-[320px] h-[350px] md:w-[480px] md:h-[480px]"
                />
              </div>

               
           
            <div className="absolute  right-[60px] center-0 mt-5 md:mt-20">
              <Image
                src="/dope.png"
                height={100}
                width={100}
                alt="/"
                className="opacity-[1] rotate-45"
              />
            </div>
            
            <div className="absolute  left-[30px] center-0 mt-5 md:mt-20">
              <Image
                src="/dope.png"
                height={100}
                width={100}
                alt="/"
                className="opacity-1 -rotate-12"
              />
            </div>

            <div className="absolute  left-[30px] center-0 mt-5 md:mt-20">
             <Image src="/star.svg" width={20} height={20} alt="star" />

            </div>


            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
