import c from 'classnames';
import React, { useState } from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { Arrow } from 'src/components/Icons';

import { EXPERIENCE, KEY_SKILLS } from './constants';
import ExperienceCard from './ExperienceCard';
import FavouriteTools from './FavouriteTools';
import Testimonials from './Testimonials';

const Resume: React.FC = () => {
  const [viewingExperienceCount, setViewingExperienceCount] = useState(EXPERIENCE.slice(0, 4));
  const [keySkillsToggleStatus, setKeySkillsToggleStatus] = useState<Record<number, number>>(
    KEY_SKILLS.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const toggleExperienceCount = () => {
    setViewingExperienceCount((prev) => (prev.length === EXPERIENCE.length ? EXPERIENCE.slice(0, 4) : EXPERIENCE));
  };

  const toggleKeySkill = (index: number) =>
    setKeySkillsToggleStatus((p) => ({
      ...p,
      [index]: +!p[index],
    }));

  return (
    <>
      <Header pageHeader="Resume" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[100px]">
        <article className="text-dark-blue flex flex-col gap-4 max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4: lg:mb-2 lg:flex-1">Experience</h2>

          <div className="flex flex-col max-w-[700px] lg:max-w-none">
            {viewingExperienceCount.map((experience) => (
              <ExperienceCard key={`${experience.where}-${experience.when}`} experience={experience} />
            ))}

            <div className="border-l border-black border-opacity-15 lg:border-0 pl-6 lg:flex lg:justify-end">
              <div className="hidden lg:block" />
              <div className="lg:flex-1 lg:max-w-[700px] border-0 lg:border-l border-black border-opacity-15 lg:pl-10">
                <button
                  onClick={toggleExperienceCount}
                  className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4 "
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
          </div>
        </article>

        <FavouriteTools />

        <section className="text-dark-blue max-w-[1180px] w-full lg:flex lg:justify-between">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-8">Key skills</h2>

          <ul className="p-0 m-0 lg:flex-1 lg:max-w-[700px]">
            {KEY_SKILLS.map((skill, index) => (
              <React.Fragment key={skill.title}>
                <li className="py-6 border-black border-opacity-15 flex flex-col gap-y-2 [&:not(:last-child)]:border-b lg:first:pt-0">
                  <div className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold flex justify-between items-center">
                    <span>{skill.title}</span>
                    <button
                      className="text-2xl leading-[22px] lg:leading-7 font-bold cursor-pointer"
                      onClick={() => toggleKeySkill(index)}
                      dangerouslySetInnerHTML={{
                        __html: keySkillsToggleStatus[index] ? '&ndash;' : '&plus;',
                      }}
                    />
                  </div>

                  <div
                    className={c('leading-6 lg:leading-7 lg:text-lg', {
                      hidden: !keySkillsToggleStatus[index],
                      block: Boolean(keySkillsToggleStatus[index]),
                    })}
                  >
                    {skill.content}
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </section>

        <Testimonials />

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Resume;
