import React from 'react';
import { NFTCircle } from '../containers';
import satoshiGirl from '../asserts/Icons/3_slider/87798.jpg';
import womenape from '../asserts/Icons/3_slider/7474.jpg';
import goat from '../asserts/Icons/3_slider/d932584ownload.png';
import rewr from '../asserts/Icons/3_slider/Rerw.png';
import garagoz from '../asserts/Icons/3_slider/unnamed.jpg';

const Dots = () => (
  <div className="flex flex-row mt-3">
    <div className="w-5 h-5 mr-3 rounded-full bg-white" />

    <div className="w-5 h-5 mr-3 rounded-full bg-white" />

    <div className="w-5 h-5 mr-3 rounded-full bg-white" />
  </div>

);

const CollectionsSlider = () => {
  const data = [
    { icon: rewr, name: 'The JRney', time: '01d 04h 43m 12s', total: '6,553', price: '100ADA' },
    { icon: satoshiGirl, name: "Satoshi's Girls", time: '02d 05h 43m 12s', total: '5,000', price: '0.06ETH' },
    { icon: garagoz, name: 'Otherdeed', time: '01d 04h 43m 12s', total: '6,553', price: '100ADA' },
    { icon: womenape, name: 'Woman Ape Yaht Club', time: '01d 04h 43m 12s', total: '10,000', price: '0.0ETH' },
    { icon: goat, name: 'GOATs of the Metaverse', time: '01d 04h 43m 12s', total: '10,000', price: '0.0ETH' },

  ];
  return (
    <div className="min-h-screen py-6 px-20 flex flex-row hsm:flex-col">
      <div className="h-full flex flex-col justify-evenly hsm:h-auto hsm:mb-4">
        <div className="flex flex-col">
          {[1, 2, 3, 4, 5].map((i) => <Dots key={i} />)}
        </div>
        <div>
          <h1 className="text-9xl font-heavy text-yellow-500 sm:text-5xl">23</h1>
          <h1 className="text-7xl font-bold text-white sm:text-2xl">Upcoming <br /> Collections</h1>
          <p className="text-xl font-medium text-white sm:text-base">Be first to hear about upcoming NFT drops.</p>
        </div>
        <div className="w-full flex justify-center items-center hsm:my-10">
          {/*  eslint-disable-next-line react/button-has-type */}
          <button className="border-4 rounded-full py-2 px-6 font-bold text-white text-xl
           transition duration-700 hover:text-nft-red-violet hover:bg-white
           sm:text-base
        "
          >View More
            <i className="fa-solid fa-arrow-right ml-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-row flex-wrap justify-end hsm:justify-start">
        {
          data.map((i, item) => (
            <div className={`w-64 h-64 min-w-64 min-h-64 mr-1 mb-2  ${item >= 3 && 'sm:hidden'} `} key={item}>
              <NFTCircle icon={i.icon} name={i.name} time={i.time} total={i.total} price={i.price} />

            </div>
          ))
        }

      </div>
    </div>
  );
};

export default CollectionsSlider;
