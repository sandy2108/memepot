"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "@/Constants";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full bg-[#0a1c04]">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="flex items-center justify-between h-full">
          <Link href="/" passHref>
            <div className="">
              <Image src="/logos.png" width={60} height={40} alt="Logo" />
            </div>
          </Link>

          <div className="hidden md:flex items-center mb-3 justify-between">
            <div className="flex items-center gap-4">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <Link href={item.link} key={index} className="mr-4">
                  <h1
                    className={`${
                      index === 0 ? "text-[#80e956]" : "text-[#FFFFFF]"
                    } text-[16px] font-normal hover:text-[#Afff03]`}
                  >
                    {item.title}
                  </h1>
                </Link>
              ))}

            </div>

            <div className="flex ml-10 items-center justify-between gap-5">
            <Link href="https://twitter.com/memepoterc" target="_blank">
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
              <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xb4635f438f8bbf2028f5ab83061f0cae2c2221e5">
              <button className="border px-10 py-1 font-normal rounded-full border-0.30 border-green-400 text-[#FFFFFF] ">
                BUY $POT
              </button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex  justify-end items-center">
            {toggle ? (
              <AiOutlineClose
                className="text-2xl text-white cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <RiMenu5Line
                size={30}
                className="text-2xl cursor-pointer text-white"
                onClick={() => setToggle(!toggle)}
              />
            )}
            
            {/* Mobile Menu */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {/* Mobile Navigation Links */}
                {navItems.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-green-500" : "text-white"
                } ${index === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                
              >
                <a href={`${nav.link}`}>{nav.title}</a>
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
