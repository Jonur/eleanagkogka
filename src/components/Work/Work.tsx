import React from 'react';
import { Link } from 'react-router-dom';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { Arrow } from 'src/components/Icons';
import { useOnMount } from 'src/hooks';
import { Route } from 'src/types';

import BehanceCarousel from './BehanceCarousel';
import { CASE_STUDIES, CAST_STUDY_ORDER } from './constants';
import SocialProfiles from './SocialProfiles';

const Work: React.FC = () => {
  useOnMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <>
      <Header pageHeader="Work" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[100px]">
        <section className="text-dark-blue max-w-[1180px] w-full lg:flex lg:justify-between">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-8">Case studies</h2>

          <div
            role="list"
            className="p-0 m-0 flex flex-col lg:flex-row lg:flex-1 lg:max-w-[904px] gap-y-6 lg:gap-y-8 lg:gap-x-8 lg:flex-wrap"
          >
            {CAST_STUDY_ORDER.map((id) => {
              const study = CASE_STUDIES[id];

              return study.disabled ? (
                <div key={study.title} role="listitem" className="flex flex-col lg:w-[436px] lg:flex-grow-0">
                  <img
                    src={`/case-studies/${id}/${study.img}`}
                    className="rounded-tl-[32px] rounded-br-[32px] lg:h-[209px] lg:w-auto mb-4"
                  />
                  <h3 className="text-2xl leading-[30px] lg:text-[26px] lg:leading-8 italic mb-2">{study.title}</h3>
                  <span className="flex gap-2 items-center text-teal-dark leading-6 lg:leading-7 lg:text-lg w-fit">
                    Coming soon
                  </span>
                </div>
              ) : (
                <Link
                  to={`${Route.WORK}/${study.id}`}
                  key={study.title}
                  role="listitem"
                  className="flex flex-col lg:w-[436px] lg:flex-grow-0"
                >
                  <img
                    src={`/case-studies/${id}/${study.img}`}
                    className="rounded-tl-[32px] rounded-br-[32px] lg:h-[209px] lg:w-auto mb-4"
                  />
                  <h3 className="text-2xl leading-[30px] lg:text-[26px] lg:leading-8 italic mb-2">{study.title}</h3>
                  <span className="flex gap-2 items-center text-teal-dark leading-6 lg:leading-7 lg:text-lg active:text-dark-blue hover:underline w-fit">
                    Go to project
                    <Arrow />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <BehanceCarousel />

        <section className="text-dark-blue max-w-[1180px] w-full lg:flex lg:justify-between">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-8">Dribbble</h2>

          <div role="list" className="p-0 m-0 flex lg:flex-1 lg:max-w-[904px] flex-col">
            <div role="list" className="grid grid-cols-2 gap-4 lg:flex lg:flex-1 lg:gap-y-8 lg:gap-x-8 lg:flex-wrap">
              {Array.from({ length: 18 }).map((_, idx) => {
                const key = crypto.randomUUID();

                return (
                  <img
                    key={key}
                    src={`/dribble/${idx + 1}.png`}
                    className="rounded-tl-[32px] rounded-br-[32px] lg:w-[280px] lg:h-[210px]"
                  />
                );
              })}
            </div>

            <div className="flex justify-end mt-4">
              <a
                href="https://dribbble.com/EleanaGkogka"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4 active:text-dark-blue hover:underline w-fit"
              >
                <span>More on Dribbble</span>
                <Arrow className="-rotate-45 w-[12px] h-[12px]" />
              </a>
            </div>
          </div>
        </section>

        <SocialProfiles />

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Work;
