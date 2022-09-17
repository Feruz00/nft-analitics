import React from 'react';
import Image from 'next/image';
import { data } from '../utils/staticData';
import icon from '../asserts/Icons/2_slider/23124fd.jpg';
import nftIcon from '../asserts/Icons/2_slider/6298900.png';

const Head = ({ text }) => (
  <div className="h-16 w-full flex flex-col p-2">
    <div className="flex h-full w-full justify-center items-center">
      <h1 className="font-extraBold text-center text-lg text-text-blue">{text}</h1>
    </div>
  </div>
);

const Collection = ({ name, nft }) => (
  <div className="h-16 w-full flex flex-row items-center  py-3 px-4 ">

    <div className={`w-10 h-10 p-[2px] relative rounded-full sm:w-8 sm:h-8  
    mr-7 ${nft ? 'bg-gradient-to-b from-[#00ffff] to-[#9c31fe]' : 'bg-white'}`}
    >
      {
          nft && (
          <div className="w-8 h-8 rounded-full absolute -top-1/3 -right-1/2 z-10 text-text-blue ">

            <Image src={nftIcon} objectFit="cover" className="w-full h-full rounded-full" />
          </div>
          )
        }
      <Image src={icon} objectFit="cover" className="w-full h-full rounded-full" />
    </div>

    <div className="flex-1 flex justify-start">
      <h1 className="font-medium text-center text-lg text-text-blue sm:text-base xs:text-sm">{name}</h1>
    </div>

  </div>
);

const Item = ({ name, className }) => (
  <div className="h-16 w-full flex flex-row items-center justify-center  ">

    <p className={`${className} px-2`}>{name}</p>

  </div>
);

const Table = () => (

  <div className="flex-[.8] p-[2px] border-2 rounded-3xl

  bg-gradient-to-b from-[#00ffff] to-[#9c31fe] w-full h-full flex justify-center items-center"

  >
    <div className="w-full h-full rounded-3xl bg-white
    flex justify-start items-start flex-row
    py-2
    dark:bg-nft-black-2
    "
    >
      <div className="h-full w-fit flex flex-col border-right-image">
        <Head text="Collection" />
        {
            data.map((i, index) => <Collection name={i.collection} key={index} nft={i.nft} />)
        }

      </div>

      <div className="h-full flex-1  overflow-x-auto no-scrollbar
      flex flex-row
      "
      >
        <div className="w-[200px] border-right-image">
          <Head text="Volume(24H)" />
          {data.map((i, index) => (
            <Item
              name={`$${i.volume}`}
              key={index}
              className="text-center font-medium text-regal-blue dark:text-white bg-clip-text bg-gradient-to-r from-regal-blue to-[#9c31fe]"

            />
          ))}
        </div>

        <div className="w-[200px] border-right-image">
          <Head text="Volume(24H)" />
          {data.map((i, index) => (
            <Item
              key={index}
              name={`${i.delta ? `${i.delta}%` : '--'}`}
              className={`text-center font-bold ${i.delta ? i.delta > 0 ? 'text-green' : 'text-red' : 'text-black dark:text-white'} `}

            />
          ))}
        </div>
        <div className="w-[200px]  border-right-image">
          <Head text="Floor Price" />
          {data.map((i, index) => (
            <Item
              key={index}
              name={`${i.price}`}
              className="text-center font-medium text-regal-blue dark:text-white "

            />
          ))}
        </div>
        <div className="w-[200px] border-right-image">
          <Head text="Market Cap" />
          {data.map((i, index) => (
            <Item
              key={index}
              name={`$${i.market_cap}`}
              className="text-center font-bold "

            />
          ))}
        </div>

      </div>
    </div>
  </div>

);

export default Table;
