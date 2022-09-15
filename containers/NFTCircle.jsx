/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
import mainPhoto from '../asserts/Icons/3_slider/Rerw.png';
import world from '../asserts/Icons/3_slider/117479.png';
import twitter from '../asserts/Icons/3_slider/1532475.png';
import discord from '../asserts/Icons/3_slider/5968898.png';
import insta from '../asserts/Icons/3_slider/87390.png';

const NFTCircle = () => (
  <div className=" w-full h-full rounded-full border-4 border-white flex flex-row items-center justify-center circle">

    <div className="flex flex-col">
      {[world, twitter, insta, discord].map((i, index) => (
        <div key={index} className="text-white">
          <Image width="20px" height="20px" objectFit="cover" src={i} className="invert filter" />
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center justify-center ml-2 mr-2">
      <div className="flex-1 ">
        <div className="circle-image">
          <Image src={mainPhoto} height="100%" width="100%" objectFit="cover" />
        </div>
      </div>
      <div className="w-full ">
        <p className="text-center text-white font-bold">The JRney</p>
      </div>
      <div className="w-full ">
        <p className="text-center font-bold text-yellow-500 ">01d 04h 43m 12s</p>
      </div>

      <button className="py-1 px-4 transition duration-500 border-4 border-orange rounded-xl text-white font-bold text-lg hover:border-white hover:tracking-wide">
        Mint
      </button>

    </div>
    <div className="flex flex-col">
      <div className="flex flex-col  justify-end items-end">
        <p className="text-white circle__head font-medium">Total:</p>
        <p className="text-white font-bold circle__text ">5000</p>
      </div>
      <div className="flex flex-col  justify-end items-end">
        <p className="font-medium circle__head text-white ">Price:</p>
        <p className="text-white font-bold circle__text">0.06 ETH</p>
      </div>

    </div>
  </div>
);

export default NFTCircle;
