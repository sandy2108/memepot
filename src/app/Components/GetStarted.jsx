'use client';

import { motion } from 'framer-motion';


import { startingFeatures } from '@/Constants';
import { TypingText,TitleText } from './CustomText';
import StartSteps from './StartSteps';
import { staggerContainer ,fadeIn,slideIn } from '@/utils';

const GetStarted = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 min-h-screen herobg relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-1 flex justify-center items-center`}
      >
        <img
          src="/pang.png"
          alt="get-started"
          className="w-[70%] h-[70%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="Memepot =Jackpot" textStyles="text-2xl md:text-4xl font-extrabold text-[#Afff03]"/>
        <TitleText title={<>Earn rewards with simple steps! </>} textStyles="text-5xl mt-7" />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;