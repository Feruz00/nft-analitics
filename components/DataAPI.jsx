import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line no-unused-vars
// import arrow from '../asserts/Icons/5_slider/545682.png';
import api from '../asserts/Icons/5_slider/API.png';
import dogry from '../asserts/Icons/5_slider/6785304.png';

const Item = ({ item }) => (
  <div className="w-full flex flex-row items-center justify-start sm:mb-2">
    <Image src={dogry} width={30} height={30} className="w-[30px] h-[30px] sm:w-5 sm:h-5" />
    <p className="font-bold text-lg text-white ml-5 sm:text-sm ">{item}</p>
  </div>
);

const DataAPI = () => (
  <div className="h-screen p-10 flex flex-row xsm:flex-col-reverse">
    <div className="flex-1 flex h-full items-center justify-center xsm:mt-4">
      {/* <div className="w-full "> */}

      <Image src={api} className="w-full sm:w-5 sm:h-5" />
      {/* </div> */}
    </div>
    <div className="flex-[1.3] flex flex-col h-[80%] items-center justify-around">
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-white text-4xl md:text-2xl sm:text-lg">Data API</h1>
      </div>
      <p className="text-white text-lg font-bold sm:text-lg">Harness the power of {'NFTGO\'s'} data API to enhance your applications.</p>
      {['Track real-time market data and transactions with a few short lines of code.',
        'Get historical  transactions and charts to improve your research.',
        'Fast, stable, and easy to use.',
        'REST and GraphQL',
      ].map((i, index) => <Item item={i} key={index} />)}

      <div className="border-4 border-white rounded-3xl px-4 py-2 w-fit flex justify-around items-center cursor-pointer
      transition duration-700
      hover:shadow-xl hover:shadow-purple-600 hover:tracking-wide
      "
      >
        <p className="text-white font-bold text-xl md:text-base sm:text-sm">Get early Access
          {' '}
          <i className="fa-solid fa-arrow-right text-xl font-bold text-white" />
        </p>
      </div>
    </div>
  </div>
);

export default DataAPI;
