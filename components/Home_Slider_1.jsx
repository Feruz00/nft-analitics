import Image from 'next/image';
import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

import portfolio from '../asserts/Icons/1_slider/Portfolio.png';

const data = [
  ['Language', 'Speakers (in millions)'],
  ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
  ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
  ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
  ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
  ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
  ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
  ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52],
];
const options = {
  title: 'Indian Language Use',
  legend: 'none',
  pieSliceText: 'label',
  slices: { 4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

const HomeSlider1 = () => (
  <div className="flex-1 flex flex-row p-10 md:flex-col">
    <div className="flex-1 w-full h-[80%] flex flex-col justify-between md:justify-center xs:p-1 ">

      <div className="pt-7 md:text-center">
        <h1 className="uppercase text-5xl text-transparent bg-clip-text
      text-gradient leading-normal font-bold xs:text-3xl"
        >all-in-one
        </h1>
        <h1 className="capitalize text-4xl text-transparent font-bold bg-clip-text
        text-gradient leading-normal"
        >platform for real-time
        </h1>
        <h1 className="capitalize leading-normal	">
          <span className="uppercase text-transparent text-6xl xs:text-4xl font-bold bg-clip-text bg-gradient-to-tl from-[#de57a6] to-[#9757d1]">nft </span>
          <span className="capitaliza text-4xl xs:text-3xl font-bold text-transparent text-top-bottom">Data Analytics.</span>

        </h1>
        <p className="text-white w-[90%] md:text-center xs:text-xl  mt-4 leading-normal font-medium text-xl">Discovery and analysis of data on the hottest
          NFTs out on the marketplace and make better
          NFT decisions with HATISRARE NFT Analytics and
          Data services!
        </p>

      </div>

      <div className="w-[90%] minmd:mt-10 flex justify-between md:my-8 xs:flex-col ">
        <button className="rounded-3xl bg-primary-blue font-semibold text-2xl
        text-white px-4 py-2 xs:mb-6 flex items-center justify-center transition hover:bg-hover-blue
        hover:shadow-lg
        "
        >
          Get Started
        </button>

        <button className="text-white flex flex-row items-center justify-center px-4 py-2 rounded-3xl
        border border-transparent hover:border-white"
        >
          <Image src={portfolio} objectFit="cover" className="xs:hidden" />
          <span className="ml-2 text-2xl text-white
        flex items-center justify-center hover:drop-shadow whitespace-nowrap"
          >My Portfolio
          </span>
        </button>
      </div>

    </div>
    <div className="flex-1 h-full w-full flex items-center justify-center relative " />
  </div>
);

export default HomeSlider1;
