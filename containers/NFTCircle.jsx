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

    <div className="text-white absolute left-6 -translate-y-14 ">
      <Image width={25} height={25} objectFit="cover" src={twitter} className="invert filter" />
    </div>
    <div className="text-white absolute left-2 -translate-y-7 ">
      <Image width={25} height={25} objectFit="cover" src={world} className="invert filter" />
    </div>
    <div className="text-white absolute left-1 translate-y-2 ">
      <Image width={25} height={25} objectFit="cover" src={insta} className="invert filter" loading="lazy" />
    </div>

    <div className="text-white absolute left-3 translate-y-10  ">
      <Image width={25} height={25} objectFit="cover" src={discord} className="invert filter" loading="lazy" />
    </div>

    <div className="flex flex-col items-center justify-center ml-2 mr-2">
      <div className="flex-1 ">
        <div className="circle-image">
          <Image src={icon} height="100%" width="100%" objectFit="cover" />
        </div>
      </div>
      <div className="w-[70%] ">
        <p className="text-center text-white font-bold">{name}</p>
      </div>
      <div className="w-full ">
        <p className="text-center font-bold text-yellow-500 ">{time}</p>
      </div>

      <button className="py-1 px-4 transition duration-500 border-4 mt-4
       border-orange rounded-xl text-white font-bold text-lg hover:border-white hover:tracking-wide"
      >
        Mint
      </button>

    </div>

    <div className="flex flex-col  absolute right-7 -translate-y-14">
      <p className="text-white circle__head font-medium">Total:</p>
      <p className="text-white font-bold circle__text ">{total}</p>
    </div>
    <div className="flex flex-col text-center absolute right-3 -translate-y-4">
      <p className="font-medium circle__head text-white text-center ">Price:</p>
      <p className="text-white font-bold circle__text">{price}</p>
    </div>

  </div>
);

export default NFTCircle;
