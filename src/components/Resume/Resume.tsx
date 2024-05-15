import c from 'classnames';
import React, { useState } from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { Arrow } from 'src/components/Icons';
import { useOnMount } from 'src/hooks';

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

  useOnMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

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
                  className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4 active:text-dark-blue hover:underline w-fit"
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
                  <button
                    onClick={() => toggleKeySkill(index)}
                    className="text-base leading-normal lg:text-lg lg:leading-7 uppercase font-bold flex justify-between items-center"
                  >
                    <div className="flex items-center gap-x-2">
                      <img src={`/icons/${skill.icon}.svg`} />
                      <span className="leading-normal lg:leading-7">{skill.title}</span>
                    </div>
                    <span
                      className="text-[28px] lg:text-3xl font-normal leading-[22px] lg:leading-7 cursor-pointer"
                      dangerouslySetInnerHTML={{
                        __html: keySkillsToggleStatus[index] ? '&ndash;' : '&plus;',
                      }}
                    />
                  </button>

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

        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:flex-1">Education</h2>

          <div className="flex flex-col max-w-[700px]">
            <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 font-bold">
              BA with Honours in Graphic Design, Communication &amp; Technology
            </h3>
            <h4 className="leading-6 lg:leading-7 lg:text-lg">@University of West Attica, class of 2004</h4>

            <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 font-bold mt-4 lg:mt-6">
              Interaction Design Foundation member since 2018 with several certifications:
            </h3>
            <h4 className="leading-6 lg:leading-7 lg:text-lg">
              User research - Methods &amp; Best Practices &#124; Human-Computer Interaction &#124; Accessibility &#124;
              How to design for all &#124; How to Create Intuitive Products by Imitating Physicality &#124; Become a UX
              Designer from Scratch &#124; Design for the 21st Century &#124; AI for Designers.
            </h4>
          </div>
        </article>

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Resume;
