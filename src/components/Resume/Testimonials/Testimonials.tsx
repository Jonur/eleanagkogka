import c from 'classnames';
import React, { useRef, useState } from 'react';

import { Arrow, Chevron, Quotes } from 'src/components/Icons';
import { useOnMount, useWindowDimensions } from 'src/hooks';

import {
  PAGINATION_COUNT,
  PAGINATION_COUNT_LG,
  TESTIMONIAL_GAP_PX,
  TESTIMONIAL_SIZE_LG_PX,
  TESTIMONIAL_SIZE_PX,
  TESTIMONIALS,
} from './constants';

const Testimonials: React.FC = () => {
  const { onLargeScreen } = useWindowDimensions();
  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [testimonialScreens] = useState(
    Math.ceil(TESTIMONIALS.length / (onLargeScreen() ? PAGINATION_COUNT_LG : PAGINATION_COUNT))
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);

  const scrollToPost = (index: number) => {
    if (testimonialContainerRef.current) {
      setPageIndex(index);

      testimonialContainerRef.current.scrollTo({
        behavior: 'smooth',
        left: offsets[index],
      });
    }
  };

  const handlePrevious = () => {
    const index = pageIndex - 1 >= 0 ? pageIndex - 1 : 0;
    scrollToPost(index);
  };

  const handleNext = () => {
    const index = pageIndex + 1 <= testimonialScreens ? pageIndex + 1 : testimonialScreens - 1;
    scrollToPost(index);
  };

  const setOffsetList = () => {
    setOffsets(
      Array.from({ length: testimonialScreens }).reduce((acc: number[], _, index) => {
        const page = index === 0 ? 0 : index * (onLargeScreen() ? PAGINATION_COUNT_LG : PAGINATION_COUNT);
        const size = onLargeScreen() ? TESTIMONIAL_SIZE_LG_PX : TESTIMONIAL_SIZE_PX;
        return [...acc, index === 0 ? 0 : page * size + TESTIMONIAL_GAP_PX * index];
      }, [])
    );
  };

  const inlineStyles = (index: number): Record<string, string | number> => {
    if (onLargeScreen()) {
      const isLast = TESTIMONIALS.length - 1 === index;

      return {
        minWidth: isLast
          ? `${(sectionRef.current?.offsetLeft || 0) + TESTIMONIAL_SIZE_LG_PX}px`
          : `${TESTIMONIAL_SIZE_LG_PX}px`,
        paddingRight: isLast ? `${sectionRef.current?.offsetLeft || 0}px` : 'none',
      };
    }

    return {};
  };

  useOnMount(() => {
    setOffsetList();
  });

  return (
    <section
      ref={sectionRef}
      className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-3 text-dark-blue max-w-[1180px] w-full relative"
    >
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">Testimonials</h3>

      <div
        className="hidden lg:block bg-gradient-to-r from-transparent from-[5%] to-white opacity-70 absolute -right-1 h-full top-0 z-10"
        style={{
          width: `${(sectionRef.current?.offsetLeft || 0) + 40}px`,
          right: `-${sectionRef.current?.offsetLeft || 0}px`,
        }}
      />

      <div
        ref={testimonialContainerRef}
        className="overflow-x-scroll scroll-smooth no-scrollbar relative"
        style={{
          width: onLargeScreen() ? `${window.outerWidth - (sectionRef.current?.offsetLeft || 0)}px` : 'initial',
        }}
      >
        <div className="flex gap-x-6 lg:gap-x-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${testimonial.jobTitle}`}
              className="flex flex-col min-w-[304px] lg:min-w-[500px]"
              style={inlineStyles(index)}
            >
              <Quotes className="mb-5" />
              <p className="leading-6 lg:leading-7 lg:text-lg mb-6">{testimonial.passage}</p>
              <p className="leading-6 lg:leading-7 lg:text-lg">
                <span className="font-medium">{testimonial.author}</span> - {testimonial.jobTitle}
                <br />
                <span className="italic font-light">@{testimonial.company}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full flex justify-between mt-12 items-baseline">
        <nav className="flex gap-x-3 h-3 items-center">
          <button aria-label="Previous" onClick={handlePrevious} disabled={pageIndex === 0}>
            <Chevron
              className={c({
                'text-teal-dark': pageIndex !== 0,
                'text-light-grey': pageIndex === 0,
              })}
            />
          </button>

          {onLargeScreen() &&
            Array.from({ length: testimonialScreens }).map((_, index) => {
              const key = `ctrl-${index}`;
              return (
                <button
                  disabled={pageIndex === index}
                  onClick={() => scrollToPost(index)}
                  key={key}
                  className={c('rounded-full w-3 h-3 bg-light-grey', {
                    'bg-light-grey': pageIndex !== index,
                    'bg-teal-dark': pageIndex === index,
                  })}
                />
              );
            })}

          <button aria-label="Next" onClick={handleNext} disabled={pageIndex === testimonialScreens - 1}>
            <Chevron
              className={c('rotate-180', {
                'text-teal-dark': pageIndex !== testimonialScreens - 1,
                'text-light-grey': pageIndex === testimonialScreens - 1,
              })}
            />
          </button>
        </nav>

        <a
          href="https://www.linkedin.com/in/eleanagkogka/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4"
        >
          <span>More on LinkedIn</span>
          <Arrow className="-rotate-45 w-[12px] h-[12px]" />
        </a>
      </footer>
    </section>
  );
};

export default Testimonials;
