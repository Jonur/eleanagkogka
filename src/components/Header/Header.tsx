import c from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Chevron, Close, Menu } from 'src/components/Icons';
import { useOnMount, useWindowDimensions } from 'src/hooks';
import { Route } from 'src/types';

import { PAGE_HEADERS } from './constants';
import SocialMedia from './SocialMedia';

type HeaderProps = {
  breadcrumb?: { to: Route; label: string };
  pageHeader: string;
};

const Header: React.FC<HeaderProps> = ({ breadcrumb, pageHeader }) => {
  const { onLargeScreen } = useWindowDimensions();
  const location = useLocation();

  const [menuVisible, setMenuVisible] = useState(false);
  const animateRef = useRef<HTMLHeadingElement>(null);

  const locationMatch = (route: Route): boolean => (location.pathname as Route) === route;

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuVisible);
  }, [menuVisible]);

  useOnMount(() => {
    let i = 0;
    let animateTimeout: NodeJS.Timeout;

    const change = () => {
      if (animateRef.current) {
        animateRef.current.classList.add('fade');

        animateRef.current.addEventListener(
          'transitionend',
          () => {
            if (animateRef.current) {
              animateRef.current.textContent = PAGE_HEADERS[(i = (i + 1) % PAGE_HEADERS.length)];
              animateRef.current.classList.remove('fade');
              animateTimeout = setTimeout(change, 3000);
            }
          },
          { once: true }
        );
      }
    };
    const initTimeout = setTimeout(change, 3000);

    return () => {
      clearTimeout(animateTimeout);
      clearTimeout(initTimeout);
    };
  });

  return (
    <header className="bg-light-grey pt-4 lg:pt-8 px-6 lg:px-[80px] pb-8 lg:pb-[60px] lg:relative lg:z-20 lg:flex lg:flex-col lg:items-center">
      <div className="w-full flex justify-between lg:max-w-[1600px]">
        <Link to={Route.ROOT}>
          <img src="/logo.svg" className="w-10 h-10 lg:w-[54px] lg:h-[54px]" />
        </Link>

        {!onLargeScreen() && (
          <button
            aria-label="Display menu"
            onClick={() => setMenuVisible(true)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <Menu className="text-dark-blue" />
          </button>
        )}

        {(menuVisible || onLargeScreen()) && (
          <div className="absolute lg:static bg-dark-blue lg:bg-transparent w-full h-full lg:h-auto left-0 top-0 pt-4 px-6 pb-16 lg:pt-0 lg:px-0 lg:pb-0 z-10 flex flex-col justify-between items-end">
            {!onLargeScreen() && (
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
            )}

            <nav
              role="menu"
              className="text-white lg:text-dark-blue text-2xl lg:text-lg flex flex-col lg:flex-row lg:items-center lg:justify-end gap-6 lg:gap-x-12 border-l border-white border-opacity-10 lg:border-l-0 pl-8 lg:pl-0 w-[258px] lg:w-auto"
            >
              <Link
                className={c(
                  'lg:hover:font-medium hover:border-b hover:border-dark-blue hover:leading-[26px] hover:pt-[1px]',
                  {
                    'lg:font-medium': locationMatch(Route.ROOT),
                  }
                )}
                to={Route.ROOT}
              >
                Home
              </Link>
              <Link
                className={c(
                  'lg:hover:font-medium hover:border-b hover:border-dark-blue hover:leading-[26px] hover:pt-[1px]',
                  {
                    'lg:font-medium': locationMatch(Route.ABOUT),
                  }
                )}
                to={Route.ABOUT}
              >
                About
              </Link>
              <Link
                className={c(
                  'lg:hover:font-medium hover:border-b hover:border-dark-blue hover:leading-[26px] hover:pt-[1px]',
                  {
                    'lg:font-medium': locationMatch(Route.RESUME),
                  }
                )}
                to={Route.RESUME}
              >
                Resume
              </Link>
              <Link
                className={c(
                  'lg:hover:font-medium hover:border-b hover:border-dark-blue hover:leading-[26px] hover:pt-[1px]',
                  {
                    'lg:font-medium': locationMatch(Route.WORK),
                  }
                )}
                to={Route.WORK}
              >
                Work
              </Link>

              <a
                href="https://drive.google.com/file/d/1MTQQlVUEtiiCFBFwBrwt-dA04jzvwkFP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base gradient-btn border hover:border-0 active:border-2 border-white active:border-teal-dark active:text-teal-dark lg:border-dark-blue rounded-tr-2xl rounded-bl-2xl w-fit mt-[175px] lg:mt-0 lg:ml-[36px] hover:ml-[36px] h-[40px] px-6 hover:px-[25px] active:px-[23px] py-0 flex items-center justify-center"
              >
                Download CV
              </a>

              {!onLargeScreen() && <SocialMedia />}
            </nav>
          </div>
        )}
      </div>

      <div role="none" className="flex w-full h-[136px] lg:h-[138px] items-center mb-2 relative lg:max-w-[1600px]">
        <div className="w-[1px] h-[65%] bg-black opacity-10 lg:absolute lg:left-[60px]" />
        <div
          className={c('w-[1px] h-[100%] bg-black opacity-10 ml-[35%] lg:ml-[45%] lg:absolute lg:top-0', {
            'lg:h-[320px]': locationMatch(Route.ROOT),
            'lg:h-[250px]': !locationMatch(Route.ROOT),
          })}
        />
        {onLargeScreen() && (
          <div
            className={c('w-[1px] bg-black opacity-10 absolute right-[23%] top-[40px]', {
              'lg:h-[320px]': locationMatch(Route.ROOT),
              'lg:h-[250px]': !locationMatch(Route.ROOT),
            })}
          />
        )}
        <div className="w-[1px] h-[85%] lg:h-[200px] bg-black opacity-10 absolute right-0 lg:-right-[50px] lg:top-[30px]" />
      </div>

      <h2 className="italic text-2xl lg:text-3xl text-dark-blue mb-2 lg:mb-3 lg:w-full lg:max-w-[1600px]">
        Eleana Gkogka &ndash;
      </h2>

      <div className="flex justify-between lg:items-end lg:w-full lg:max-w-[1600px]">
        {locationMatch(Route.ROOT) ? (
          <div className="relative flex flex-col">
            <h1
              ref={animateRef}
              className="text-6xl lg:text-[100px] max-w-[650px] leading-[50px] lg:leading-[90px] font-bebas uppercase bg-gradient-to-r from-teal-dark to-pink inline-block text-transparent bg-clip-text fadeable"
            >
              Strategic
            </h1>
            <h1 className="text-6xl lg:text-[100px] max-w-[650px] leading-[50px] lg:leading-[90px] font-bebas uppercase bg-gradient-to-r from-teal-dark to-pink inline-block text-transparent bg-clip-text">
              Product designer
            </h1>
          </div>
        ) : (
          <h1 className="text-6xl lg:text-[100px] max-w-[650px] leading-[50px] lg:leading-[90px] font-bebas uppercase bg-gradient-to-r from-teal-dark to-pink inline-block text-transparent bg-clip-text">
            {pageHeader}
          </h1>
        )}

        {onLargeScreen() && <SocialMedia />}
      </div>

      {breadcrumb && (
        <Link
          to={breadcrumb.to}
          className="flex gap-x-1 items-center leading-6 lg:leading-7 lg:text-lg mt-2 text-dark-blue lg:w-full lg:max-w-[1600px]"
        >
          <Chevron className="w-3 h-3" />
          <span>{breadcrumb.label}</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
