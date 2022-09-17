/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
// import mainPhoto from '../asserts/Icons/3_slider/Rerw.png';
import world from '../asserts/Icons/3_slider/117479.png';
import twitter from '../asserts/Icons/3_slider/1532475.png';
import discord from '../asserts/Icons/3_slider/5968898.png';
import insta from '../asserts/Icons/3_slider/87390.png';

const NFTCircle = ({ icon, name, time, total, price }) => (
  <div className=" w-full h-full rounded-full border-4 border-white flex flex-row items-center justify-center circle
    relative
  "
  >

    <div className="text-white absolute left-6 -translate-y-14 w-[25px] h-[25px] xs:w-[15px] xs:h-[15px]">
      <Image width="100%" height="100%" objectFit="cover" src={twitter} className="invert filter" />
    </div>
    <div className="text-white absolute left-2 -translate-y-7  w-[25px] h-[25px] xs:w-[15px] xs:h-[15px]">
      <Image width="100%" height="100%" objectFit="cover" src={world} className="invert filter" />
    </div>
    <div className="text-white absolute left-1 translate-y-2  w-[25px] h-[25px] xs:w-[15px] xs:h-[15px]">
      <Image width="100%" height="100%" objectFit="cover" src={insta} className="invert filter" loading="lazy" />
    </div>

    <div className="text-white absolute left-3 translate-y-10  w-[25px] h-[25px] xs:w-[15px] xs:h-[15px] xs:left-4">
      <Image width="100%" height="100%" objectFit="cover" src={discord} className="invert filter" loading="lazy" />
    </div>

    <div className="flex flex-col items-center justify-center ml-2 mr-2">
      <div className="flex-1 ">
        <div className="circle-image xs:w-14 xs:h-14">
          <Image src={icon} height="100%" width="100%" objectFit="cover" />
        </div>
      </div>
      <div className="w-[70%] ">
        <p className="text-center text-white font-bold xs:text-sm">{name}</p>
      </div>
      <div className="w-full ">
        <p className="text-center font-bold text-yellow-500 xs:text-sm ">{time}</p>
      </div>

      <button className="py-1 px-4 transition duration-500 border-4 mt-4
       border-orange rounded-xl text-white font-bold text-lg hover:border-white hover:tracking-wide
       xs:border-2 xs:mt-2 xs:text-sm
       "
      >
        Mint
      </button>

    </div>

    <div className="flex flex-col  absolute right-7 -translate-y-14 xs:-translate-y-12 xs:right-6">
      <p className="text-white circle__head font-medium">Total:</p>
      <p className="text-white font-bold circle__text xs:text-xs ">{total}</p>
    </div>
    <div className="flex flex-col text-center absolute right-1 -translate-y-4 xs:-translate-y-3">
      <p className="font-medium circle__head text-white text-center ">Price:</p>
      <p className="text-white font-bold circle__text xs:text-xs">{price}</p>
    </div>

  </div>
);

export default NFTCircle;
