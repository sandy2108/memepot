"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { footerVariants } from "@/utils";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`sm:px-16 px-6 bg-black py-8 relative`}
  >
    <div className="" />
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-centergap-2">
          <Link href="/" className="my-1 mr-2">
            <Image
              src="/logos.png"
              width={30}
              height={30}
              className="max-w-[50px]"
              alt="/"
            />
          </Link>
          <Link href="/" className="flex-1">
            <h4 className="font-extrabold my-2 text-[18px] md:text-[24px] text-white">
              MEMEPOT
            </h4>
          </Link>
          </div>
         
          <div className="flex ml-10 items-center justify-between gap-5">
          <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xb4635f438f8bbf2028f5ab83061f0cae2c2221e5"  target='_blank'>
            <Image
              src="/dextools.svg"
              height={15}
              width={25}
              alt="twitter"
              className="cursor-pointer text-white"
            />
            </Link>
            <Link href="https://twitter.com/memepoterc"  target='_blank'>
            <Image
              src="/tw.svg"
              height={15}
              width={25}
              alt="twitter"
              className="cursor-pointer"
            />
            </Link>
            <Link href="https://t.me/memepoteth"  target='_blank'>
            <Image
              src="/tg.svg"
              height={18}
              width={25}
              alt="telegram"
              className="cursor-pointer "
            />
            </Link>
          </div>
        </div>
        <p className="font-normal text-[14px] text-white mt-4">
        Copyright MemePot | mp@memepot.io
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
