import c from 'classnames';
import React, { useState } from 'react';

import { useOnMount, useWindowDimensions } from 'src/hooks';
import { Experience } from 'src/types';

type ExperienceProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  experience: { title, where, when, description, pointColor, expandable },
}) => {
  const { onLargeScreen } = useWindowDimensions();
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

  const isExpandable = (onLargeScreen() && expandable.large) || (!onLargeScreen() && expandable.small);

  return (
    <div className="relative border-l border-black border-opacity-15 lg:border-0 pl-6 [&:not(:last-child)]:pb-8 lg:[&:not(:last-child)]:pb-0 lg:pb-0 lg:flex lg:justify-end">
      <div className="hidden lg:flex flex-col w-[230px] pb-8 h-full pr-10">
        <h4 className="leading-6 lg:leading-7 lg:text-lg">{when}</h4>
        <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase mb-1">
          @ <span className="font-bold">{where}</span>
        </h3>
      </div>

      <div className={c('absolute w-4 h-4 rounded-full -left-2 lg:hidden', pointColor)} />

      <div className="lg:flex-1 lg:max-w-[700px] lg:pb-8 border-0 lg:border-l border-black border-opacity-15 lg:pl-10 lg:relative">
        <div className={c('absolute w-4 h-4 rounded-full -left-2 hidden lg:block', pointColor)} />
        <h4 className="leading-6 lg:leading-7 lg:text-lg lg:hidden">{when}</h4>
        <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold mt-1">{title}</h3>
        <h3 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase mb-1 lg:hidden">
          @ <span className="font-bold">{where}</span>
        </h3>

        {collapsed && isExpandable ? (
          <div className="text-clipped-preview text-base leading-6 lg:text-lg lg:leading-7 h-[68px] lg:h-[78px]">
            <span className="bg-white">{preview}</span>
            <button
              onClick={toggleExperience}
              className="-bottom-[3px] lg:-bottom-[5px] right-[2px] text-clipped-preview-link text-teal-dark leading-6 lg:leading-7 lg:text-lg text-base underline"
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
            {isExpandable && (
              <div className="flex justify-end">
                <button
                  onClick={toggleExperience}
                  className="-bottom-[5px] right-[2px] mt-2 text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base underline"
                >
                  View less
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
