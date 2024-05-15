import c from 'classnames';
import React, { RefObject, useRef, useState } from 'react';

import { Arrow, Chevron, Quotes } from 'src/components/Icons';
import { useWindowDimensions } from 'src/hooks';

import { PAGINATION_COUNT, PAGINATION_COUNT_LG, TESTIMONIAL_SIZE_LG_PX, TESTIMONIALS } from './constants';

const Testimonials: React.FC = () => {
  const { onLargeScreen } = useWindowDimensions();

  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<Record<number, RefObject<HTMLDivElement> | null>>({});

  const [paginationCount] = useState(onLargeScreen() ? PAGINATION_COUNT_LG : PAGINATION_COUNT);
  const [testimonialScreens] = useState(Math.ceil(TESTIMONIALS.length / paginationCount));
  const [postInView, setPostInView] = useState(0);

  const scrollToPost = (index: number) => {
    if (testimonialContainerRef.current) {
      setPostInView(index);

      testimonialContainerRef.current.scrollTo({
        behavior: 'smooth',
        left: testimonialRefs.current[index]?.current?.offsetLeft || 0,
      });
    }
  };

  const handlePrevious = () => {
    const index = postInView - paginationCount >= 0 ? postInView - paginationCount : 0;
    scrollToPost(index);
  };

  const handleNext = () => {
    const index =
      postInView + paginationCount <= TESTIMONIALS.length - 1 ? postInView + paginationCount : TESTIMONIALS.length - 1;
    scrollToPost(index);
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

  const isViewingLastTestimonial =
    postInView === TESTIMONIALS.length - 1 || postInView + paginationCount > TESTIMONIALS.length;

  return (
    <section
      ref={sectionRef}
      className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-3 text-dark-blue max-w-[1180px] w-full relative"
    >
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">Testimonials</h3>

      {!isViewingLastTestimonial && (
        <div
          role="none"
          className="hidden lg:block bg-gradient-to-r from-transparent from-[5%] to-white opacity-70 absolute right-0 h-[calc(100%-44px)] top-0 w-[130px] z-10"
        />
      )}

      <div ref={testimonialContainerRef} className="overflow-x-scroll scroll-smooth no-scrollbar relative w-full">
        <div className="flex gap-x-6 lg:gap-x-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              ref={(testimonialRefs.current[index] ??= { current: null })}
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
          <button aria-label="Previous" onClick={handlePrevious} disabled={postInView === 0}>
            <Chevron
              className={c({
                'text-teal-dark': postInView !== 0,
                'text-light-grey': postInView === 0,
              })}
            />
          </button>

          {onLargeScreen() &&
            Array.from({ length: testimonialScreens }).map((_, index) => {
              const key = `ctrl-${index}`;
              const postToScroll = index * paginationCount;
              return (
                <button
                  disabled={postInView === postToScroll}
                  onClick={() => scrollToPost(postToScroll)}
                  key={key}
                  className={c('rounded-full w-3 h-3 bg-light-grey', {
                    'bg-light-grey': postInView !== postToScroll,
                    'bg-teal-dark': postInView === postToScroll,
                  })}
                />
              );
            })}

          <button aria-label="Next" onClick={handleNext} disabled={isViewingLastTestimonial}>
            <Chevron
              className={c('rotate-180', {
                'text-teal-dark': !isViewingLastTestimonial,
                'text-light-grey': isViewingLastTestimonial,
              })}
            />
          </button>
        </nav>

        <a
          href="https://www.linkedin.com/in/eleanagkogka/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4 active:text-dark-blue hover:underline w-fit"
        >
          <span>More on LinkedIn</span>
          <Arrow className="-rotate-45 w-[12px] h-[12px]" />
        </a>
      </footer>
    </section>
  );
};

export default Testimonials;
