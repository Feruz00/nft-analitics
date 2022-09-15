import Image from 'next/image';
import React from 'react';
import hand from '../asserts/Icons/6_slider/content/126473.png';
import evlope from '../asserts/Icons/6_slider/content/646135.png';
import twitter from '../asserts/Icons/6_slider/content/1384065.png';
import discord from '../asserts/Icons/6_slider/content/5968756.png';

const Social = ({ icon, name, text, type }) => (
  <div className="w-[45%]  relative border-4 border-white p-5 rounded-xl sm:mb-10  sm:w-[90%]">
    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2 z-10">
      <Image src={icon} objectFit="cover" width="50%" height="50%" />
    </div>
    <h1 className="mt-10 text-center text-white font-bold text-2xl">{name}</h1>
    <p className="text-center text-sm font-medium text-white">{text}</p>
    <div className="w-full flex items-center justify-center my-2 sm:m-0">
      <div className="flex text-white justify-center w-1/2 bg-blue-500 font-bold px-10 text-lg rounded-xl cursor-pointer transation duration-500 hover:bg-blue-600">
        Follow
      </div>
    </div>
    <div className={`flex  font-medium underline text-white ${type ? 'justify-between' : 'justify-center'}`}>
      {
            type ? (
              <>
                <p>Whale-Alert</p>
                <p>Drop-Alert</p>
              </>
            )
              : (
                <p>Invite Out Bot to Your Discord</p>
              )
        }
    </div>
  </div>
);

const Join = () => (
  <div className="w-full min-h-[50vh] xmd:h-screen flex flex-row items-center xmd:flex-col xmd:justify-around">

    <div className=" flex flex-col w-[45%] xmd:w-[80%] xmd:mb-14 sm:items-center sm:mt-6  ">

      <div className="flex flex-col justify-start mb-10">
        <div className="flex flex-row mb-5 items-center">
          <h1 className="font-bold text-4xl text-white mr-1 sm:text-2xl">Join Our Community!</h1>
          <Image src={hand} className="filter invert sm:w-4 sm:h-4" width={36} height={36} />

        </div>

        <p className="font-regular text-white font-medium text-lg sm:text-base">Get NFT drops, whale activies and updates right to your inbox! Be first to hear about breaking news!</p>

      </div>

      <div className="w-full bg-white rounded-xl flex flex-row py-1 px-2 pb-1 justify-around items-center">
        <div className="w-6 h-6 bg-[#7F8487] ml-1 border border-[#7F8487] sm:hidden ">
          <Image src={evlope} width="100%" height="100%" className="filter invert" />
        </div>
        <input
          placeholder="Enter your email address"
          className="flex-1
        font-medium ml-1 h-full text-lg outline-none bg-transparent text-nft-black-2
            sm:text-sm
        "
        />
        <div className="bg-blue-500 text-white font-bold
        px-10 text-lg py-2 rounded-xl cursor-pointer transation duration-500 sm:px-3 sm:py-[2px] sm:text-base
        hover:bg-blue-600"
        >Subscribe
        </div>
      </div>

    </div>

    <div className="flex flex-1 flex-row justify-evenly items-center sm:flex-col ">
      <Social
        icon={twitter}
        name="Twitter"
        text="Follow us for the latest updates on industry news, and NFTGo updates, giveaways, and more."
        type
      />
      <Social
        icon={discord}
        name="Discord"
        text="Follow us for the latest updates on industry news, and NFTGo updates, giveaways, and more."
        type={false}
      />
      {/* <div className="w-[45%] h-full" /> */}
    </div>
  </div>
);

export default Join;
