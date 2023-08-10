"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/Constants";
import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full bg-[#0a1c04]">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo with a Link */}
          <Link href="/" passHref>
            <div className="">
              <Image src="/logos.png" width={60} height={40} alt="Logo" />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center mb-3 justify-between">
            <div className="flex items-center gap-4">
              {navItems.map((item, index) => (
                <Link href={item.link} key={index} className="mr-4">
                  <h1
                    className={`${
                      index === 0 ? "text-[#80e956]" : "text-[#FFFFFF]"
                    } text-[16px] font-normal hover:text-[#80e956]`}
                  >
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>

            <div className="flex ml-10 items-center justify-between gap-5">
              <Link href="https://twitter.com/memepoteth" target="_blank">
                {" "}
                <Image
                  src="/tw.svg"
                  height={15}
                  width={25}
                  alt="twitter"
                  className="cursor-pointer"
                />{" "}
              </Link>

              <Link href="https://t.me/memepoteth" target="_blank">
                {" "}
                <Image
                  src="/tg.svg"
                  height={18}
                  width={25}
                  alt="telegram"
                  className="cursor-pointer "
                />{" "}
              </Link>
            </div>
            <div className="ml-10">
              <button className="border px-10 py-1 font-normal rounded-full border-0.30 border-green-400 text-[#FFFFFF] ">
                BUY $POT
              </button>
            </div>
          </div>
           

        <div className='md:hidden flex  justify-end items-center'>
           {toggle ? <AiOutlineClose className='text-2xl text-white cursor-pointer '  onClick={() => setToggle(!toggle)}/> : <RiMenu5Line size={30} className='text-2xl cursor-pointer text-white' onClick={() => setToggle(!toggle)} />}
            
           <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navItems.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-400"
                } ${index === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
