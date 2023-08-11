'use client';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { textVariant ,staggerContainer } from '@/utils';
import { RoadmapFeatures } from '@/Constants';
import Image from 'next/image';

import { TitleText, TypingText } from "./CustomText";


const RoadmapCard = ({roadmap}) => (
   <VerticalTimelineElement
    contentStyle={{background: '#40484b' , color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={roadmap.date}
    iconStyle={{background: roadmap.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <Image 
           src={roadmap.icon}
           alt="/"
           width={30}
           height={30}
           className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-[#80e956] text-[24px] font-bold'>{roadmap.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
        {roadmap.tasks.map((tasks,index) => (
          <li key={`roadmap-tasks-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {tasks}
          </li>
        ))}

      </ul>
   </VerticalTimelineElement>
)



const Insights = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 bg-black relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
    >  
      <Image src="/star.svg" width={20} height={20} alt="star" />
      <TypingText title="Roadmap" textStyles="text-center font-normal text-[#80e956] text-2xl" />
      <div className="absolute  right-1/3 bottom-0 mt-5 md:mt-20">
             <Image src="/star.svg" width={20} height={20} alt="star" />

            </div>  
      <TitleText title={<>MemePot Milestones</>} textStyles="text-center text-white" />
      <div className="absolute  right-[100px] center-0 mt-5 md:mt-20">
             <Image src="/star.svg" width={20} height={20} alt="star" />

            </div>  
      <div className="mt-[50px] flex flex-col">
         <VerticalTimeline>
           {RoadmapFeatures.map((roadmap,index) => (
            <RoadmapCard key={index} roadmap={roadmap} />
           ))}
         </VerticalTimeline>
         <div className="absolute  right-1/3 bottom-0 mt-5 md:mt-20">
             <Image src="/star.svg" width={20} height={20} alt="star" />

            </div>  
      </div>
    </motion.div>
  </section>
);

export default Insights;