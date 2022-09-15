/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../asserts/Icons/6_slider/footer/1384065.png';
import img2 from '../asserts/Icons/6_slider/footer/152810.png';
import img3 from '../asserts/Icons/6_slider/footer/1946542.png';
import img4 from '../asserts/Icons/6_slider/footer/2111644.png';
import img5 from '../asserts/Icons/6_slider/footer/5968756.png';
import img6 from '../asserts/Icons/6_slider/footer/Instagram.png';

const Icon = ({ url }) => (
  <div className="m-2">
    <Image
      src={url}
      width={20}
      height={20}
    />
  </div>

);
const Section = ({ title, data }) => (
  <div className="flex flex-col w-full">
    <h1 className="font-extraBold text-center text-lg mb-4">{title}</h1>
    {
      data.map((i, index) => (
        <Link href={i.href} key={index}>
          <a className="text-center mb-1 text-base">{i.name}</a>
        </Link>
      ))
    }
  </div>
);
const Footer = () => (
  <div className="w-full max-w-[1200px] flex items-center justify-center py-12 px-16">
    <div className="w-full flex flex-row hsm:flex-col">
      <div className="flex flex-col hsm:mb-6">
        <div className="flex flex-row items-center">

          <div className="flex flex-col">

            <div className="flex flex-row">
              <div className="w-3 h-3 rounded-full bg-green m-1" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 m-1" />
            </div>

            <div className="flex flex-row">
              <div className="w-3 h-3 rounded-full bg-purple-700 m-1" />
              <div className="w-3 h-3 rounded-full bg-red m-1" />
            </div>

          </div>

          <h1 className="font-extraBold text-2xl ml-3">
            THATISNFT
          </h1>
        </div>
        <p className="font-medium mt-2">Join Our Community </p>
        <div className="flex flex-row mb-8">
          {
            [img1, img2, img3, img4, img5, img6].map((i, index) => <Icon key={index} url={i} />)
          }

        </div>
        <p className="font-medium text-sm">&copy; 2022 THATISRARE - All rights reserved</p>
      </div>
      <div className="flex-1 autofit">
        <Section
          title="Sitemap"
          data={[{ name: 'Analitycs', href: '/analitcs' },
            { name: 'Whales', href: '/whales' },
            { name: 'Discord Bot', href: '/bot' },
            { name: 'Research', href: '/research' },
            { name: 'Drops', href: '/drops' }]}
        />
        <Section
          title="Links"
          data={[{ name: 'OpenSea', href: '/opensea' },
            { name: 'Rarible', href: '/rarible' },
            { name: 'Super Rare', href: '/rere' }]}
        />
        <Section
          title="Support"
          data={[{ name: 'FAQ', href: '/faq' },
            { name: 'Docs', href: '/docs' },
            { name: 'Metrics', href: '/metrics' },
            { name: 'Listing Request', href: '/request' },
            { name: 'Media Kit', href: '/media-kit' }]}
        />
        <Section
          title="Company"
          data={[{ name: 'About us', href: '/about' },
            { name: 'Term of Use', href: '/terms' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Hire Us 🔥', href: '/hire' }]}
        />
      </div>

    </div>
  </div>
);

export default Footer;
