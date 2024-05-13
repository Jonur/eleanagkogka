import React, { useRef, useState } from 'react';

import { useOnMount, useWindowDimensions } from 'src/hooks';

const FavouriteTools: React.FC = () => {
  const { onLargeScreen } = useWindowDimensions();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [offsetLeft, setOffsetLeft] = useState(0);
  useOnMount(() => {
    let resizeObserverEntries: ResizeObserverEntry[] = [];
    const observer = new ResizeObserver((entries) => {
      resizeObserverEntries = entries;
      for (const entry of entries) {
        if ('offsetLeft' in entry.target) {
          setOffsetLeft(Number(entry.target.offsetLeft));
        }
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      resizeObserverEntries.forEach((entry) => entry.target.remove());
      observer.disconnect();
    };
  });

  return (
    <section
      ref={sectionRef}
      className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-[114px] lg:pb-[100px] text-dark-blue max-w-[1180px] w-full relative"
    >
      <h3 className="text-lg italic mb-12 lg:mb-[80px] relative z-20 lg:z-auto">Favourite tools</h3>

      <div
        className="bg-gradient-to-r from-transparent from-[-10%] lg:from-[5%] to-white opacity-70 absolute -right-1 h-full top-0 z-10"
        style={{
          width: `${(offsetLeft || 0) + 40}px`,
          right: onLargeScreen() ? `-${offsetLeft || 0}px` : '-24px',
        }}
      />

      <div
        className="bg-gradient-to-r from-transparent from-[-10%] lg:from-[5%] to-white opacity-70 absolute -left-1 h-full top-0 z-10 rotate-180"
        style={{
          width: `${(offsetLeft || 0) + 40}px`,
          left: onLargeScreen() ? `-${offsetLeft || 0}px` : '-24px',
        }}
      />

      <div
        className="overflow-hidden flex gap-x-10 absolute -left-6 h-[34px]"
        style={{
          width: `${window.outerWidth}px`,
          left: `-${offsetLeft || 0}px`,
        }}
      >
        <div className="flex gap-x-10 lg:gap-[100px] shrink-0 items-center justify-around min-w-full animate-marquee">
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
        <div className="flex gap-x-10 lg:gap-[100px] shrink-0 items-center justify-around min-w-full animate-marquee">
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
