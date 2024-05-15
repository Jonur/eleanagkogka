import React from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import GoTo from 'src/components/GoTo';
import Header from 'src/components/Header';
import StarList from 'src/components/StarList';
import { useOnMount } from 'src/hooks';
import { Route } from 'src/types';

import { DESIGN_VALUES } from './constants';

const Root: React.FC = () => {
  useOnMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <>
      <Header pageHeader="Strategic product designer" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center">
        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 mb-[60px] lg:mb-[100px] max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:flex-1">In a nutshell</h2>

          <div className="flex flex-col gap-4 max-w-[700px]">
            <h3 className="text-2xl leading-[30px] lg:text-[26px] lg:leading-8 italic">
              I am Eleana a strategic designer, creative thinker, experience enhancer, accessibility guardian and user
              protector.
            </h3>

            <p className="leading-6 lg:leading-7 lg:text-lg">
              Modules on the History of Art and Graphic Design, Semiotics, Typography, Colour theory, Branding,
              Composition & Layout, Gestalt Principles, Illustration, Industrial Design, Market Research, Human-Computer
              Interaction, Human Psychology, Multimedia, and more.
            </p>

            <p className="leading-6 lg:leading-7 lg:text-lg mb-2">
              I currently work as a Staff Product Designer and have over 14 years of professional design experience. I
              specialise in strategic, growth, data-based design and product optimisation, with a rich background in
              various design disciplines such as branding, marketing and graphic design.
            </p>

            <GoTo to={Route.RESUME} label="Check my resume" />
          </div>
        </article>

        <StarList title="My design values" items={DESIGN_VALUES} />

        <div className="flex justify-end mt-3 lg:mt-4 mb-[60px] lg:mb-[100px] max-w-[1180px] w-full">
          <GoTo to={Route.ABOUT} label="More about me" />
        </div>

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Root;
