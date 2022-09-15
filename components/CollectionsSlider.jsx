import React from 'react';
import { NFTCircle } from '../containers';

const Dots = () => (
  <div className="flex flex-row mt-3">
    <div className="w-5 h-5 mr-3 rounded-full bg-white" />

    <div className="w-5 h-5 mr-3 rounded-full bg-white" />

    <div className="w-5 h-5 mr-3 rounded-full bg-white" />
  </div>

);

const CollectionsSlider = () => (
  <div className="h-screen py-6 px-20 flex flex-row">
    <div className="h-full flex flex-col justify-evenly">
      <div className="flex flex-col">
        {[1, 2, 3, 4, 5].map((i) => <Dots key={i} />)}
      </div>
      <div>
        <h1 className="text-9xl font-heavy text-yellow-500">23</h1>
        <h1 className="text-7xl font-bold text-white">Upcoming <br /> Collections</h1>
        <p className="text-xl font-medium text-white">Be first to hear about upcoming NFT drops.</p>
      </div>
      <div className="w-full flex justify-center items-center">
        {/*  eslint-disable-next-line react/button-has-type */}
        <button className="border-4 rounded-full py-2 px-6 font-bold text-white text-xl
           transition duration-700 hover:text-nft-red-violet hover:bg-white
        "
        >View More
          <i className="fa-solid fa-arrow-right ml-4" />
        </button>
      </div>
    </div>

    <div className="flex-1 flex flex-row flex-wrap">
      <div className="w-64 h-64">
        <NFTCircle />

      </div>

    </div>
  </div>
);

export default CollectionsSlider;
