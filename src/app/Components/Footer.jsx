"use client";

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
    <div className="footer-gradient" />
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/">
            <Image
              src="/logos.png"
              width={50}
              height={30}
              className=""
              alt="/"
            />
          </Link>
          <Link href="/" className="flex-1">
            <h4 className="font-extrabold flex-1 text-[24px] text-white">
              MEMEPOT
            </h4>
          </Link>
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
            <Link href="https://twitter.com/memepoteth"  target='_blank'>
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
          Copyright © Memepots | memepots@outlook.com
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
