import React from 'react';

import { useWindowDimensions } from 'src/hooks';

const FavouriteTools: React.FC = () => {
  const { onLargeScreen } = useWindowDimensions();

  return (
    <section className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-[114px] lg:pb-[100px] text-dark-blue max-w-[1180px] w-full relative">
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">Favourite tools</h3>

      <div
        className="overflow-hidden flex gap-x-10 absolute lg:static -left-6 h-[34px]"
        style={{
          width: onLargeScreen() ? '100%' : `${window.outerWidth}px`,
        }}
      >
        <div className="flex gap-x-10 lg:gap-x-8 shrink-0 items-center justify-around min-w-full animate-marquee">
          <img src="tools/adobe.svg" />
          <img src="tools/figma.svg" />
          <img src="tools/loom.svg" />
          <img src="tools/sprig.svg" />
          <img src="tools/amplitude.svg" />
          <img src="tools/fullstory.svg" />
          <img src="tools/notion.svg" />
          <img src="tools/userinterviews.svg" />
          <img src="tools/dovetail.svg" />
          <img src="tools/jira.svg" />
          <img src="tools/slack.svg" />
        </div>
        <div className="flex gap-x-10 lg:gap-x-8 shrink-0 items-center justify-around min-w-full animate-marquee">
          <img src="tools/adobe.svg" />
          <img src="tools/figma.svg" />
          <img src="tools/loom.svg" />
          <img src="tools/sprig.svg" />
          <img src="tools/amplitude.svg" />
          <img src="tools/fullstory.svg" />
          <img src="tools/notion.svg" />
          <img src="tools/userinterviews.svg" />
          <img src="tools/dovetail.svg" />
          <img src="tools/jira.svg" />
          <img src="tools/slack.svg" />
        </div>
      </div>
    </section>
  );
};

export default FavouriteTools;
