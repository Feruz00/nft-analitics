import React from 'react';
import Image from 'next/image';
// import { useTheme } from 'next-themes';
import moralis from '../asserts/Icons/2_slider/29500b387c4629afb7762e6afcfcd0fc.png';
import towsan from '../asserts/Icons/2_slider/download (1)_1.png';
import nft from '../asserts/Icons/2_slider/download (4).png';
import cyzyk from '../asserts/Icons/2_slider/download (13).png';
import arrow from '../asserts/Icons/2_slider/images (1).png';
import gold from '../asserts/Icons/2_slider/images.png';
import tofu from '../asserts/Icons/2_slider/tofu.png';

const Pictures = () => (
  <div className="flex flex-col justify-start gap-16 sm:gap-0 items-center md:justify-center dark:bg-nft-gray-3 mb-10">
    <div className="h-1/3  w-2/3 mb-16 sm:w-full sm:px-2 xs:mb-0">
      <h1 className="font-heavy text-center text-[#B7C4CF] text-4xl sm:text-xl xs:text-lg">ThisRare supports many chains and we are already powering many prominent web3 projects</h1>
    </div>
    <div className="w-[90%] flex flex-row gap-10 xs:flex-col xs:gap-5 xs:justify-center xs:items-center">
      <div className="flex flex-row xs:items-center xs:gap-2 ">

        <div className="bg-transparent">
          <Image
            src={tofu}
            width={150}
            height={200}
            objectFit="cover"
          />
        </div>

        <div className="translate-y-1/2 xs:translate-y-0">
          <Image src={cyzyk} width="150px" height="150px" objectFit="cover" />

        </div>
        <div className="-translate-y-1/2 xs:translate-y-0">
          <Image src={gold} width="150px" height="300px" objectFit="cover" />
        </div>

      </div>

      <div className="">
        <Image
          src={nft}
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-row  xs:items-center xs:gap-2 ">
        <div className="-translate-y-1/2 xs:translate-y-0">
          <Image src={arrow} width="150px" height="200px" objectFit="cover" />

        </div>
        <div className="translate-y-1/2 xs:translate-y-0">
          <Image src={towsan} width="100px" height="100px" objectFit="cover" />

        </div>
        <div>
          <Image src={moralis} width="150px" height="200px" objectFit="cover" />

        </div>
      </div>

    </div>
  </div>
);

export default Pictures;
