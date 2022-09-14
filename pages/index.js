import React from 'react';
import { HomeSlider1, Navbar, Analytics, Pictures } from '../components';
import Title from '../components/Title';

const Home = () => (

  <div>
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
    <div className="w-full flex justify-center mt-7">

      <Analytics />
    </div>

    <div className="h-screen w-full flex justify-center mt-10">

      <Pictures />
    </div>

  </div>
);
// rich text admin panel
export default Home;
