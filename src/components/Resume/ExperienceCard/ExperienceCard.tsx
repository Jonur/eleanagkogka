import c from 'classnames';
import React, { useState } from 'react';

import { useOnMount } from 'src/hooks';
import { Experience } from 'src/types';

type ExperienceProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceProps> = ({ experience: { title, where, when, description, pointColor } }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [preview, setPreview] = useState('');

  useOnMount(() => {
    const firstParagraph =
      description.indexOf('<p>') === 0 ? description.substring(3, description.indexOf('</p>')) : description;
    setPreview(firstParagraph);
  });

  const toggleExperience = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="relative border-l border-black border-opacity-15 pl-6 [&:not(:last-child)]:pb-8">
      <div className={c('absolute w-4 h-4 rounded-full -left-2', pointColor)} />
      <h4 className="leading-6 lg:leading-7 lg:text-lg">{when}</h4>
      <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold mt-1">{title}</h3>
      <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase mb-1">
        @ <span className="font-bold">{where}</span>
      </h3>

      {collapsed ? (
        <div className="text-clipped-preview text-base leading-6 lg:text-lg lg:leading-7 h-[66px]">
          <span>{preview}</span>
          <button
            onClick={toggleExperience}
            className="-bottom-[5px] right-[2px] text-clipped-preview-link text-teal-dark leading-6 lg:leading-7 lg:text-lg text-base underline"
          >
            View more
          </button>
        </div>
      ) : (
        <>
          <div
            className="leading-6 lg:leading-7 lg:text-lg flex flex-col gap-y-2"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div className="flex justify-end">
            <button
              onClick={toggleExperience}
              className="-bottom-[5px] right-[2px] mt-2 text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base underline"
            >
              View less
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
