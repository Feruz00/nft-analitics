/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { logo } from '../utils/pictures';

const Menu = ({ items, className, rootClassName, mainClassName }) => (
  <ul className={mainClassName}>
    {
      items.map((i, index) => (

        <li
          key={index}
          className={`${className} nav-dropdown`}
        >

          <Link href={`/${i.url}`} className={rootClassName}>
            <a className="text-black font-extraBold ">{i.name}</a>
          </Link>
          {
            i?.sub && (
            <i className="fa-solid fa-caret-down
            text-primary-blue ml-2

            "
            />
            )
          }

        </li>
      ))
  }
  </ul>
);

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [lang, setLang] = useState(false);
  return (

    <nav className="w-full h-20 flex
    items-center justify-center mt-2"
    >

      <div className="flex-1 items-center justify-start flex">

        <div className="flex items-center justify-center mr-5">
          <Link href="/">
            <a className="flex flex-row items-center">
              <div className="h-14 w-14 mr-1">
                <Image src={logo} className="h-full w-full" />
              </div>
              <h1 className="uppercase text-black font-heavy font-medium text-xl
              xs:hidden
              "
              >
                ThatisRare
              </h1>

            </a>

          </Link>

        </div>

        <div>
          <Menu
            items={[{ name: 'All Collection', url: 'collections' },
              { name: 'Analytics', url: 'analytics' },
              { name: 'Whales', url: 'whales' },
              { name: 'Research', url: 'research' },
            ]}
            mainClassName="flex flex-row ml-4 minlg:text-3xl md:hidden"
            className="m-4 font-bold inline-block
            flex flex-row justify-between whitespace-nowrap
            items-center relative
            "
          />
        </div>

      </div>

      <div className="flex-1 flex justify-end items-center mr-16 md:mr-0">

        <div className="mx-2 relative flex flex-row items-center justify-end
          py-2 rounded px-3

          w-1/12 ml-6 duration-1000
          md:ml-0
          bg-tranparent
          hover:bg-nft-gray-1
          transition-all hover:w-full dark:hover:bg-nft-black-1
            nav__search
        "
        >
          <input
            placeholder="Type here"
            className="mr-2 h-full w-full bg-transparent outline-none leading-5
             text-nft-black-3 dark:text-white"
          />
          <i className="fa-solid fa-magnifying-glass text-xl text-nft-black-3 dark:text-white cursor-pointer" />
        </div>

        <div className="mx-2 sm:hidden">
          {theme === 'dark'
            ? <i className="fas fa-moon text-xl text-white cursor-pointer rotate-[240deg]" onClick={changeTheme} />
            : <i className="fas fa-sun text-xl text-white cursor-pointer " onClick={changeTheme} />}
        </div>

        <div className="mx-2
          sm:hidden
          relative
        "
        >
          <div
            onClick={() => setLang(!lang)}
            className=" text-md text-white border-white flex flex-row items-center justify-center cursor-pointer border-2 px-4 rounded-2xl"
          >
            <p>EN</p>
            <i className={`fa-solid fa-caret-down
              text-white ml-1 transition
              ${lang && 'rotate-180'}`}
            />

          </div>
          <div className={`${!lang && 'hidden'} overflow-hidden rounded-xl absolute fullp z-10 bg-white w-[200%] -right-0 dark:bg-nft-black-1 `}>
            {
              [{ name: 'EN', full: 'English' }, { name: 'ES', full: 'Espanol' }].map(
                (i, index) => (
                  <div
                    className="px-1 py-3 flex flex-row cursor-pointer
                  hover:bg-nft-gray-1 hover:text-nft-black
                  dark:hover:bg-nft-gray-3
                  "
                    key={index}
                  >
                    <p className="flex-[0.2] text-center font-bold pl-2">{i.name}</p>
                    <p className="flex-[0.8] text-center">{i.full}</p>
                  </div>
                ),
              )
            }
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
