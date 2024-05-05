import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Close, Menu } from 'src/components/Icons';
import { Route } from 'src/types';

import SocialMedia from './SocialMedia';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="bg-light-grey pt-4 px-6 pb-8">
      <div className="w-full flex justify-between">
        <Link to={Route.ROOT}>
          <img src="/logo.svg" className="w-10 h-10" />
        </Link>
        <button
          aria-label="Display menu"
          onClick={() => setMenuVisible(true)}
          className="w-10 h-10 flex items-center justify-center"
        >
          <Menu className="text-dark-blue" />
        </button>

        {menuVisible && (
          <div className="absolute bg-dark-blue w-full h-full left-0 top-0 pt-4 px-6 pb-16 z-10 flex flex-col justify-between items-end">
            <div className="w-full flex justify-between">
              <Link to={Route.ROOT}>
                <img src="/logo.svg" className="w-10 h-10" />
              </Link>
              <button
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center animate-pulse"
                onClick={() => setMenuVisible(false)}
              >
                <Close className="text-white" />
              </button>
            </div>

            <nav
              role="menu"
              className="text-white text-2xl flex flex-col gap-6 border-l border-white border-opacity-10 pl-8 w-[258px]"
            >
              <Link to={Route.ROOT}>Home</Link>
              <Link to={Route.ABOUT}>About</Link>
              <Link to={Route.RESUME}>Resume</Link>
              <Link to={Route.WORK}>Work</Link>

              <button className="text-base border border-white rounded-tr-2xl rounded-bl-2xl w-fit mt-[175px] h-[40px] px-6 py-0">
                Download CV
              </button>

              <SocialMedia />
            </nav>
          </div>
        )}
      </div>

      <div role="none" className="flex w-full h-[200px] items-center mb-2 relative">
        <div className="w-[1px] h-[65%] bg-black opacity-10" />
        <div className="w-[1px] h-[100%] bg-black opacity-10 ml-[35%]" />
        <div className="w-[1px] h-[85%] bg-black opacity-10 absolute right-0" />
      </div>

      <h2 className="italic text-2xl">Eleana Gkogka -</h2>
      <h1 className="text-6xl font-bebas uppercase bg-gradient-to-r from-teal-dark to-pink inline-block text-transparent bg-clip-text">
        Strategic product designer
      </h1>
    </header>
  );
};

export default Header;
