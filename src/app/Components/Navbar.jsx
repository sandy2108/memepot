import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/Constants';

const Navbar = () => {
  return (
    <div className='w-full bg-[#0a1c04]'>
      <div className='max-w-[1340px] mx-auto p-4'>
        <div className='flex items-center justify-between h-full'>
          {/* Logo with a Link */}
          <Link href='/' passHref>
            <div className=''>
              <Image src='/logos.png' width={60} height={40} alt='Logo' />
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center mb-3 justify-between">
            <div className='flex items-center gap-4'>
            {navItems.map((item, index) => (
              <Link href={item.link} key={index} className="mr-4">
                <h1 className={`${index === 0 ? 'text-[#80e956]' : 'text-[#FFFFFF]'} text-[16px] font-normal hover:text-[#80e956]`}>
                  {item.title}
                </h1>
              </Link>
            ))}
            </div>
            
            <div className='flex ml-10 items-center justify-between gap-5'>
              <Link href="https://twitter.com/memepoteth" target='_blank'>   <Image src="/tw.svg" height={15} width={25} alt='twitter' className='cursor-pointer' /> </Link>
           
             <Link href="https://t.me/memepoteth" target='_blank'> <Image src="/tg.svg" height={18} width={25} alt='telegram' className='cursor-pointer ' /> </Link>
           </div>
           <div className='ml-10'>
            <button className='border px-10 py-1 font-normal rounded-full border-0.30 border-green-400 text-[#FFFFFF] '>BUY $POT</button>
           </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
