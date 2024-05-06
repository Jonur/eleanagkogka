import c from 'classnames';
import React from 'react';

import { Experience } from 'src/types';

type ExpericeProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExpericeProps> = ({ experience: { title, where, when, description, pointColor } }) => {
  return (
    <div className="relative border-l border-black border-opacity-15 pl-6 [&:not(:last-child)]:pb-8">
      <div className={c('absolute w-4 h-4 rounded-full -left-2', pointColor)} />
      <h4 className="leading-6 lg:leading-7 lg:text-lg">{when}</h4>
      <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold mt-1">{title}</h3>
      <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase mb-1">
        @ <span className="font-bold">{where}</span>
      </h3>
      <div
        className="leading-6 lg:leading-7 lg:text-lg flex flex-col gap-y-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ExperienceCard;
