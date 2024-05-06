import React, { useState } from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { Arrow } from 'src/components/Icons';

import { EXPERIENCE } from './constants';
import ExperienceCard from './ExperienceCard';

const Resume: React.FC = () => {
  const [viewingExperienceCount, setViewingExperienceCount] = useState(EXPERIENCE.slice(0, 4));

  const toggleExperienceCount = () => {
    setViewingExperienceCount((prev) => (prev.length === EXPERIENCE.length ? EXPERIENCE.slice(0, 4) : EXPERIENCE));
  };

  return (
    <>
      <Header pageHeader="Resume" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[100px]">
        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:flex-1">Experience</h2>

          <div className="flex flex-col max-w-[700px]">
            {viewingExperienceCount.map((experience) => (
              <ExperienceCard key={`${experience.where}-${experience.when}`} experience={experience} />
            ))}

            <div className="border-l border-black border-opacity-15 pl-6">
              <button
                onClick={toggleExperienceCount}
                className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4"
              >
                {viewingExperienceCount.length === EXPERIENCE.length ? (
                  <>
                    <span>Show less</span>
                    <Arrow className="-rotate-90 w-[12px] h-[12px]" />
                  </>
                ) : (
                  <>
                    <span>Show more</span>
                    <Arrow className="rotate-90 w-[12px] h-[12px]" />
                  </>
                )}
              </button>
            </div>
          </div>
        </article>

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Resume;
