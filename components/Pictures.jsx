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
  <div className="flex flex-col justify-start items-center md:justify-center dark:bg-nft-gray-3">
    <div className="h-1/3  w-2/3 mb-6 ">
      <h1 className="font-heavy text-center text-[#B7C4CF] text-4xl sm:text-xl xs:text-lg">ThisRare supports many chains and we are already powering many prominent web3 projects</h1>
    </div>
    <div className="w-[90%] flex flex-row gap-10">
      <div className="flex flex-row">
        <div className="bg-transparent">
          <Image
            src={tofu}
            width="150px"
            height="200px"
            objectFit="cover"
          />
        </div>
        <div className="translate-y-1/2">
          <Image src={cyzyk} width="150px" height="150px" objectFit="cover" />

        </div>
        <div className="-translate-y-1/2">
          <Image src={gold} width="150px" height="300px" objectFit="cover" />
        </div>

      </div>
      <div className="">
        <Image src={nft} />
      </div>

      <div className="flex flex-row">
        <div className="-translate-y-1/2">
          <Image src={arrow} width="150px" height="200px" objectFit="cover" />

        </div>
        <div className="translate-y-1/2">
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
