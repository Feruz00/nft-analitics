import Image from 'next/image';
import { useState } from 'react';
import speed from '../asserts/Icons/2_slider/53128.png';
import kubok from '../asserts/Icons/2_slider/123410.png';
// import ot from '../asserts/Icons/2_slider/599502.png';
import marketplace from '../asserts/Icons/2_slider/3309960.png';
// import contract from '../asserts/Icons/2_slider/contract1.png';
import Table from './Table';

const Analytics = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="w-full max-w-[1300px]  flex flex-col min-h-screen relative

    "
    >
      <div className="bg-gradient-to-b from-[#00ffff] to-[#9c31fe] w-full rounded-xl
      px-6 py-2 flex flex-row justify-between
      items-center overflow-x-auto no-scrollbar select-none
      md:rounded-none

    "
      >
        <div className="flex flex-row items-center mr-2">

          <p className="mr-1 font-bold text-white whitespace-nowrap">Market Sentiment</p>
          <div className="w-6 h-6 mr-1 flex items-center">
            <Image src={speed} objectFit="cover" className="w-full h-full text-white filter invert" />
          </div>

          <p className="mr-1 font-bold text-main-cyan  whitespace-nowrap">Cool</p>
          <i className="fa-solid fa-droplet text-main-cyan translate-y-[2px]" />

        </div>

        <div className="flex flex-row items-center mr-2">
          <p className="font-bold text-white mr-1  whitespace-nowrap">Buyers 13.13K</p>
          <div className="w-10 h-1 bg-green mr-2" />
          <div className="w-10 h-1 bg-nft-red-violet mr-2" />
          <p className="font-bold text-white  whitespace-nowrap">16.15K Sellers</p>

        </div>

        <div className="flex flex-row items-center mr-2">
          <p className="font-bold text-white mr-1  whitespace-nowrap">Volume(24H)</p>
          <p className="font-bold text-white mr-1">$37.64M</p>
          <p className="font-bold text-red mr-1  whitespace-nowrap ">-8.06%</p>
        </div>

        <div className="flex flex-row items-center mr-2">
          <p className="font-bold text-white mr-1  whitespace-nowrap">Holders Cap</p>
          <p className="font-bold text-white mr-1  whitespace-nowrap">2.86M</p>
          <p className="font-bold text-main-cyan mr-1  whitespace-nowrap ">+0.23%</p>
        </div>

      </div>

      <div className="flex flex-col mt-5">
        <div className="h-1 w-1/5 bg-gradient-to-b from-main-cyan to-main-voilet shadow rounded" />
        <div className="flex flex-row mt-6   xmd:flex-col">

          <div className="flex flex-col flex-[0.2] mr-1 justify-start items-center xmd:flex-row gap-4 xmd:mb-4
            md:flex-col md:justify-center md:items-center
          "
          >

            <div
              className="mt-3 transition duration-700 hover:shadow bg-gradient-to-b hover:bg-gradient-to-t from-[#00ffff] to-[#9c31fe] flex flex-row justify-center items-center
            rounded-full w-[80%] xmd:mt-0
            p-[2px] cursor-pointer overflow-hidden
            md:w-1/2 xs:w-full
            "
              onClick={() => setSelected(1)}
            >
              <div className={`${selected === 1 ? '' : 'bg-white'} w-full h-full rounded-full flex flex-row justify-center items-center py-1 px-2`}>
                <p className={`font-bold ${selected === 1 ? 'text-white' : 'text-main-cyan'} `}>Top Tending</p>
                <div className="ml-1 w-5 h-5">

                  <Image src={marketplace} className="w-full h-full" />
                </div>
              </div>

            </div>

            <div
              className="mt-3 transition duration-700 hover:shadow bg-gradient-to-b hover:bg-gradient-to-t from-[#00ffff] to-[#9c31fe] flex flex-row justify-center items-center
            rounded-full w-[80%]
            p-[2px] cursor-pointer overflow-hidden
            xmd:mt-0 md:w-1/2 xs:w-full
            "
              onClick={() => setSelected(2)}
            >
              <div className={`${selected === 2 ? '' : 'bg-white'} w-full h-full rounded-full flex flex-row justify-center items-center py-1 px-2`}>
                <p className={`font-bold ${selected === 2 ? 'text-white' : 'text-main-cyan'} `}>Top Mints</p>

                <i className="fa-solid fa-handshake ml-2 text-[#FFDE00]" />
              </div>

            </div>

            <div
              className="mt-3 transition duration-700 hover:shadow bg-gradient-to-b hover:bg-gradient-to-t from-[#00ffff] to-[#9c31fe] flex flex-row justify-center items-center
            rounded-full w-[80%] xmd:mt-0 md:w-1/2 xs:w-full
            p-[2px] cursor-pointer overflow-hidden"
              onClick={() => setSelected(3)}
            >
              <div className={`${selected === 3 ? '' : 'bg-white'} w-full h-full rounded-full flex flex-row justify-center items-center py-1 px-2`}>
                <p className={`font-bold ${selected === 3 ? 'text-white' : 'text-main-cyan'} `}>Leadboard</p>
                <div className="ml-1 w-5 h-5">

                  <Image src={kubok} className="w-full h-full" />
                </div>
              </div>

            </div>

            <div
              className="mt-3 transition duration-700 hover:shadow bg-gradient-to-b hover:bg-gradient-to-t from-[#00ffff] to-[#9c31fe] flex flex-row justify-center items-center
            rounded-full w-[80%] xmd:mt-0 md:w-1/2 xs:w-full
            p-[2px] cursor-pointer overflow-hidden"
              onClick={() => setSelected(4)}
            >
              <div className={`${selected === 4 ? '' : 'bg-white'} w-full h-full rounded-full flex flex-row justify-center items-center py-1 px-2`}>
                <p className={`font-bold ${selected === 4 ? 'text-white' : 'text-main-cyan'} `}>Marketplace</p>
                <div className="ml-1 w-5 h-5">

                  <Image src={marketplace} className="w-full h-full" />
                </div>
              </div>

            </div>

            <div
              className="mt-10 transition duration-700 hover:shadow bg-gradient-to-b hover:bg-gradient-to-t from-[#00ffff] to-[#9c31fe] flex flex-row justify-center items-center
            rounded-full w-[80%] md:w-1/2 xs:w-full
            p-[2px] cursor-pointer overflow-hidden
            xmd:mt-0
            "
              onClick={() => setSelected(1)}
            >
              <div className="bg-white w-full h-full rounded-full flex flex-row justify-center items-center py-1 px-2">
                <p className="font-bold text-main-cyan">View More</p>

              </div>

            </div>

          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
