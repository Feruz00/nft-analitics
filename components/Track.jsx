import React from 'react';
import Image from 'next/image';
import artBlock from '../asserts/Icons/4_slider/23124fd.jpg';
import bought from '../asserts/Icons/4_slider/44825.png';
import loot from '../asserts/Icons/4_slider/57745.png';
import sold from '../asserts/Icons/4_slider/179421.png';
import at from '../asserts/Icons/4_slider/897098-.png';
import next from '../asserts/Icons/4_slider/2879479.png';
import sud from '../asserts/Icons/4_slider/4342500.png';
// import superWorld from '../asserts/Icons/4_slider/54968454.png';

const Item = ({ url, headText, mainText, number, name, icon, iconStyle, iconTextStyle, iconText }) => (
  <div className="flex-1 flex flex-row justify-center items-center px-4 border-4 border-white rounded-3xl h-full
  xmd:mr-3
  xsm:mb-3
  "
  >

    <div className="w-24 h-24 rounded-full overflow-hidden">
      <Image src={url} width="100%" height="100%" objectFit="cover" />
    </div>

    <div className="flex flex-col flex-1 ml-5 h-full justify-evenly">
      <h1 className="text-2xl sm:text-lg text-white font-bold">{headText}</h1>
      <p className="text-base sm:text-sm text-white font-bold">{mainText}</p>
      <div className="w-full flex flex-row justify-around items-end xsm:justify-start">
        <p className="text-white text-2xl sm:text-lg font-bold xsm:pr-3"> <span className="text-4xl sm:text-xl font-extraBold">{number}</span> {name} </p>

        <div className={`w-10 h-10 sm:w-6 sm:h-6 ${iconStyle} xsm:pr-3 `}>
          <Image src={icon} height="100%" width="100%" className="filter invert" />
        </div>
        <p className={`${iconTextStyle} font-bold text-xl`}>{iconText}</p>
      </div>

    </div>
  </div>
);

const Main = ({ number, first, second, three }) => (
  <div className="flex-1 flex flex-col justify-center items-center h-full">
    <h1 className="font-extraBold text-7xl xsm:text-3xl sm:text-lg text-white">Track <span className="text-yellow-500">{number}</span></h1>
    <h1 className="font-Libre text-5xl xsm:text-2xl sm:text-base text-white">Whale Wallets</h1>
    <p className="font-bold text-xl xsm:text-base sm:text-sm text-white text-center">Whales hold NFTs worth
      <span className="text-yellow-500">${first}B</span>{' '}, occupying {' '}
      <span className="text-yellow-500">${second}%</span> {' '}
      of the global market cap of {' '}
      <span className="text-yellow-500">${three}B</span>
    </p>
  </div>
);

const NextPage = () => (
  <div className="flex-1 flex flex-row-reverse justify-between items-center h-full sm:hidden relative xmd:flex-[.1] xsm:h-auto xsm:justify-center   ">
    <div className="absolute w-10 h-10 rounded-full bg-white left-7 bottom-10 xmd:hidden" />
    <div className="w-16 h-16 xsm:w-7 xsm:h-7 filter invert">
      <Image src={next} width="100%" height="100%" />
    </div>
  </div>
);

const Dots = ({ dot1, dot2, dot3 }) => (
  <div className="flex-1 flex flex-row justify-center items-center h-full relative xmd:hidden">
    <div className={dot1} />
    <div className={dot2} />
    <div className={dot3} />

  </div>
);

const Track = () => (
  <div className="h-screen p-11 flex flex-col">
    <div className="w-full flex flex-row h-1/3 xsm:flex-col">
      <Item
        url={at}
        headText="Uniswap V3 Positions"
        mainText="In the past 24 hour"
        number={2}
        name="Whales"
        icon={sud}
        iconTextStyle="text-orange"
        iconStyle="text-orange"
        iconText="Minted"
      />
      <Dots
        dot1="w-10 h-10 rounded-full bg-white absolute bottom-4 right-[60px]"

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        dot2="w-16 h-16 rounded-full bg-white absolute top-4 left-1/3"
      />

      <Item
        url={artBlock}
        headText="Art Blocks"
        mainText="In the past 24 hour"
        number={7}
        name="Whales"
        icon={bought}

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        iconTextStyle="text-main-cyan"
        iconStyle="text-main-cyan"
        iconText="Bought"
      />

    </div>
    <div className="w-full flex flex-row h-1/3 xsm:flex-col">
      <Dots
        dot1="w-24 h-24 rounded-full bg-white absolute top-1/3 -left-5"

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        dot2="w-16 h-16 rounded-full bg-white absolute top-1/4"
        dot3="w-10 h-10 rounded-full bg-white absolute bottom-1/4 right-1/4"

      />
      <Main
        number={1481}
        first={5.67}
        second={3.56}
        three={24.5}
      />

      <NextPage />

    </div>
    <div className="w-full flex flex-row h-1/3 xsm:flex-col">
      <Item
        url={at}
        headText="Nina's Super Cool Wordl"
        mainText="In the past 24 hour"
        number={5}
        name="Whales"
        icon={sold}
        iconTextStyle="text-[#ccc]"
        iconStyle="text-main-cyan"
        iconText="Sold"
      />
      <Dots
        dot1="w-10 h-10 rounded-full bg-white absolute bottom-4 right-[60px]"

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        dot2="w-16 h-16 rounded-full bg-white absolute top-4 left-1/3"
      />

      <Item
        url={loot}
        headText="More Loot"
        mainText="In the past 24 hour"
        number={7}
        name="Whales"
        icon={bought}

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        iconTextStyle="text-main-cyan"
        iconStyle="text-main-cyan"
        iconText="Bought"
      />

    </div>
  </div>
);

export default Track;
