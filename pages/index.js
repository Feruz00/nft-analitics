import React from 'react';
import { HomeSlider1, Navbar, Analytics, Pictures, CollectionsSlider, Track, DataAPI, Join, Footer, Slide } from '../components';
import Title from '../components/Title';

const Home = () => (

  <div className="dark:bg-nft-gray-3">
    <Title title="Home" />
    <div className="bg-first w-full
    flex flex-col items-center bg-cover bg-no-repeat
    "
    >
      {/* eslint-disable-next-line no-tabs */}
      <div className="w-full max-w-[1200px] flex flex-col h-screen	xs:h-auto">
        <Navbar />
        <HomeSlider1 />
      </div>

    </div>
    <div className="w-full flex justify-center mt-7 ">

      <Analytics />
    </div>

    <div className=" w-full flex justify-center mt-10">

      <Pictures />
    </div>
    <div className="bg-second bg-no-repeat w-full bg-cover flex flex-col">
      <CollectionsSlider />
      <Track />
      <DataAPI />
    </div>

    <Slide />
    <div className="slider_last w-full p-12 bg-no-repeat flex items-center  sm:p-3">
      <Join />
    </div>
    <Footer />
  </div>
);
// rich text admin panel
export default Home;
