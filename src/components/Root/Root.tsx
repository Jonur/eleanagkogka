import React from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import GoTo from 'src/components/GoTo';
import Header from 'src/components/Header';
import StarList from 'src/components/StarList';
import { Route } from 'src/types';

const Home: React.FC = () => {
  return (
    <>
      <Header pageHeader="Strategic product designer" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center">
        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 mb-[60px] max-w-[1180px] lg:w-full">
          <h2 className="text-3xl font-bebas uppercase mb-4 lg:flex-1">In a nutshell</h2>

          <div className="flex flex-col gap-4 max-w-[700px]">
            <h3 className="text-2xl italic">
              I am Eleana a strategic designer, creative thinker, experience enhancer, accessibility guardian and user
              protector.
            </h3>

            <p>
              Modules on the History of Art and Graphic Design, Semiotics, Typography, Colour theory, Branding,
              Composition & Layout, Gestalt Principles, Illustration, Industrial Design, Market Research, Human-Computer
              Interaction, Human Psychology, Multimedia, and more.
            </p>

            <p>
              I currently work as a Staff Product Designer and have over 14 years of professional design experience. I
              specialise in strategic, growth, data-based design and product optimisation, with a rich background in
              various design disciplines such as branding, marketing and graphic design.
            </p>

            <GoTo to={Route.RESUME} label="Check my resume" />
          </div>
        </article>

        <StarList
          items={[
            { title: 'Grow', description: 'Keep learning and improving your craft', starColor: 'text-mustard' },
            {
              title: 'Question',
              description: 'Challenge the old, be curious about the future',
              starColor: 'text-teal-light',
            },
            {
              title: 'Empathise',
              description: 'Seek to understand, support and empower people',
              starColor: 'text-purple',
            },
            {
              title: 'Optimise',
              description: 'Leave everything better than you found it',
              starColor: 'text-coral',
            },
          ]}
        />

        <div className="flex justify-end mt-3 mb-[60px] max-w-[1180px] w-full">
          <GoTo to={Route.ABOUT} label="More about me" />
        </div>

        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default Home;
