import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
;

const Memepots = () => {
  const cardData = [
    {
      imageSrc: '/star.svg',
      alt: '/',
      content:
        'Prepare for daily excitement! Hold $POT tokens, win free ETH in our Daily MemePots, and aim higher with our Mega MemePots for even bigger rewards.',
      title: 'Daily MemePots',
    },
    {
      imageSrc: '/star.svg',
      alt: '/',
      content:
        'Periodic big rewards for one; VRF selection, onchain distribution. MEV/blacklisted wallets not eligible for rewards.',
      title: 'Mega MemePots:',
    },
  ];

  return (
    <div className='w-full text-white memempotsbg'>
      <div className='max-w-[1340px] mx-auto p-4'>
           <div className="flex items-center py-5">
            <h1 className="font-bold text-3xl md:text-6xl max-w-[630px] text-white">
              What Makes {" "}
              <span className="text-[#Afff03]">MemePot Unique?</span>
            </h1>
          </div>
        <div className='grid lg:grid-cols-2'>
          <div className='grid md:grid-rows-2 gap-4 '>
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`bg-black  rounded-xl border-green-700  solid shadow-2xl px-4 ${
                  index === 0 ? 'pt-8 mt-8' : 'pt-8 lg:mt-6 my-2'
                } text-${index === 0 ? 'white' : 'black'}`}
              >
                <div className='grid md:grid-cols-5 my-2 mt-0'>
                  <div className='col-span-1 flex justify-center items-start  lg:py-2 border-r border-green-300'>
                    <Image
                      src={card.imageSrc}
                      height={20}
                      width={50}
                      alt={card.alt}
                      className='rounded-full shadow-sm shadow-[#deff4c] lg:mb-10'
                    />
                  </div>
                  <div className='col-span-4 mx-2'>
                   
                    <h1 className='font-inter font-normal text-[#deff4c] hover:text-white text-2xl leading-6 my-5'>
                      {card.title}
                    </h1>
                    <p className='font-inter my-2 font-[500px] text-base sm:text-lg leading-normal'>
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='rounded-2xl lg:mt-8 lg:mb-2 mx-5  mt-5 overflow-hidden relative'>
            <Image src="/dopepot.jpg" width={100} height={100} alt="image" className='h-full w-full'/>
            <div className='absolute bottom-0 left-0 p-4'>
              <Link href='https://discord.gg/n4HE6yyu' alt='/'>
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl px-4 hover:text-[#4ca3ff] my-2 text-white font-bold'>
                  Meet the JoocBox Community
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memepots;