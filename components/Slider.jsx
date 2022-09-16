import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import mainPhoto from '../asserts/Icons/6_slider/header banner/1639682396_maxresdefault.png';
import prevPhoto from '../asserts/Icons/6_slider/header banner/draw-an-eye-catching-cartoon-tshirt-design.png';
import nextPhoto from '../asserts/Icons/6_slider/header banner/design-nft-banner-for-twitter-youtube-or-any-platforms.png';
// import { useState } from 'react/cjs/react.production.min';

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    lazyLoad: true,
    centerMode: true,
    // centerPadding: '100px',
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        //   centerPadding: '0',
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
        //   centerPadding: '0',
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };
  const slide = useRef();

  return (
    <div className="w-full  flex justify-center items-center p-10">
      <div className="w-full flex justify-center items-center ">
        <div className="w-full relative  max-w-[1400px]">
          <Slider {...settings} ref={slide}>
            {
                [prevPhoto, mainPhoto, nextPhoto, prevPhoto].map((i, item) => (
                  <div key={item} className="w-60 h-40 m-6 ">
                    <Image src={i} objectFit="contain" alt="image" fill />
                  </div>
                ))
            }

          </Slider>
          <div
            className="absolute z-10 w-12 h-12 bg-white rounded-full flex justify-center items-center
  bg-gradient-to-b from-nft-red-violet to-purple-700 text-white text-3xl cursor-pointer
  left-button
  xsm:w-9 xsm:h-9 xsm:text-lg
"
            onClick={() => slide.current.slickPrev()}
          >
            <i className="fa-solid fa-chevron-left" />
          </div>

          <div
            className="absolute z-10 w-12 h-12   bg-white rounded-full flex justify-center items-center
  bg-gradient-to-b from-nft-red-violet to-purple-700 text-white text-3xl cursor-pointer
  xsm:w-9 xsm:h-9 xsm:text-lg
  left-right
"
            onClick={() => slide.current.slickNext()}
          >
            <i className="fa-solid fa-chevron-right" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Slide;
