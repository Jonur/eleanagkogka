import React from 'react';

import Footer from 'src/components/Footer';
import GoTo from 'src/components/GoTo';
import Header from 'src/components/Header';
import { FatArrow } from 'src/components/Icons';
import StarList from 'src/components/StarList';
import { Route } from 'src/types';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <div className="pt-[60px] px-6 pb-4">
        <article className="text-dark-blue flex flex-col gap-4 mb-[60px]">
          <h2 className="text-3xl font-bebas uppercase mb-4">In a nutshell</h2>

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

        <div className="flex justify-end mt-3 mb-[60px]">
          <GoTo to={Route.ABOUT} label="More about me" />
        </div>

        <section className="p-8 text-dark-blue bg-light-grey rounded-tr-[40px] rounded-bl-[40px]">
          <h2 className="text-3xl font-bebas uppercase mb-4 flex items-center gap-2">
            <span>In a nutshell</span>
            <FatArrow className="-mt-[3px]" />
          </h2>

          <p className="italic">I am based in London and looking forward to hear from you!</p>

          <div className="mt-4 flex justify-end">
            <a
              href="mailto:eleana.gkogka@gmail.com"
              className="flex items-center justify-center text-base border border-dark-blue rounded-tr-2xl rounded-bl-2xl w-fit h-[40px] px-6 py-0"
            >
              Email me
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
