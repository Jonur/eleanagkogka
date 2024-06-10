import c from 'classnames';
import React, { RefObject, useRef, useState } from 'react';

import { Arrow, Chevron } from 'src/components/Icons';
import { useOnMount, useWindowDimensions } from 'src/hooks';
import { EventType } from 'src/types';

import { BLOG_POST_ORDER, BLOG_POSTS, PAGINATION_COUNT, PAGINATION_COUNT_LG } from './constants';

const BlogPosts: React.FC = () => {
  const { onLargeScreen } = useWindowDimensions();

  const blogPostContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blogPostRefs = useRef<Record<number, RefObject<HTMLAnchorElement> | null>>({});

  const [paginationCount] = useState(onLargeScreen() ? PAGINATION_COUNT_LG : PAGINATION_COUNT);
  const [blogPostScreens] = useState(Math.ceil(BLOG_POST_ORDER.length / paginationCount));
  const [postInView, setPostInView] = useState(0);

  const scrollToPost = (index: number) => {
    if (blogPostContainerRef.current) {
      setPostInView(index);

      const left = blogPostRefs.current[index]?.current?.offsetLeft || 0;
      blogPostContainerRef.current.scrollTo({
        behavior: 'smooth',
        left,
      });
    }
  };

  const handlePrevious = () => {
    const index = postInView - paginationCount >= 0 ? postInView - paginationCount : 0;
    scrollToPost(index);
  };

  const handleNext = () => {
    const index =
      postInView + paginationCount <= BLOG_POST_ORDER.length - 1
        ? postInView + paginationCount
        : BLOG_POST_ORDER.length - 1;
    scrollToPost(index);
  };

  const isViewingLastBlogPosts = () => postInView + paginationCount === BLOG_POST_ORDER.length;

  useOnMount(() => {
    const cb = () => {
      const scrollLeft = blogPostContainerRef.current?.scrollLeft || 0;
      const offsets = Object.values(blogPostRefs.current).map((el) => el?.current?.offsetLeft || 0);

      const offset = offsets.find(
        (_o, index) => scrollLeft >= offsets[index] && scrollLeft <= (offsets[index + 1] || offsets[offsets.length - 1])
      );
      const result = Math.floor((offset ? offsets.indexOf(offset) + 1 : 0) / paginationCount);
      setPostInView(result * paginationCount);
    };

    blogPostContainerRef.current?.addEventListener(EventType.SCROLLEND, cb);
    return () => {
      blogPostContainerRef.current?.removeEventListener(EventType.SCROLLEND, cb);
    };
  });

  return (
    <section
      ref={sectionRef}
      className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-3 text-dark-blue max-w-[1180px] w-full relative"
    >
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">My Blog posts</h3>

      <div
        role="none"
        className={c(
          'hidden lg:block from-transparent from-[-10%] lg:from-[0%] to-white to-[100%] absolute w-[50px] lg:w-[70px] h-[calc(100%-44px)] top-0 z-10 pointer-events-none',
          {
            'left-0 bg-gradient-to-l': isViewingLastBlogPosts(),
            'right-0 bg-gradient-to-r': !isViewingLastBlogPosts(),
          }
        )}
      />

      <div ref={blogPostContainerRef} className="overflow-x-scroll scroll-smooth no-scrollbar relative w-full">
        <div className="flex gap-x-6">
          {BLOG_POST_ORDER.map((id, index) => {
            const post = BLOG_POSTS[id];

            return (
              <a
                ref={(blogPostRefs.current[index] ??= { current: null })}
                id={`blog-post-${index}`}
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="w-[304px] lg:w-[353px] flex-shrink-0 flex flex-col justify-between"
              >
                <div className="flex flex-col relative">
                  <div
                    className="w-full h-[140px] bg-cover bg-center mb-4 lg:mb-6 rounded-tl-[32px] rounded-br-[32px]"
                    style={{ backgroundImage: `url(/blog/${id}.jpg)` }}
                  />
                  <div className="absolute top-0 left-0 w-full h-[140px] mb-4 lg:mb-6 rounded-tl-[32px] rounded-br-[32px] bg-dark-blue opacity-30" />
                  <h5 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold">{post.title}</h5>
                  {post.subtitle && (
                    <h6 className="text-base leading-6 lg:text-lg lg:leading-7 mt-1">{post.subtitle}</h6>
                  )}
                </div>
                <div className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4 active:text-dark-blue hover:underline w-fit">
                  <span>Read on Medium</span>
                  <Arrow className="-rotate-45 w-[12px] h-[12px]" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="w-full hidden lg:flex justify-end lg:justify-between mt-12 lg:mt-[80px] items-baseline">
        <nav className="flex gap-x-3 h-3 items-center">
          <button aria-label="Previous" onClick={handlePrevious} disabled={postInView === 0}>
            <Chevron
              className={c({
                'text-teal-dark': postInView !== 0,
                'text-light-grey': postInView === 0,
              })}
            />
          </button>
          {Array.from({ length: blogPostScreens }).map((_, index) => {
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
          <button aria-label="Next" onClick={handleNext} disabled={isViewingLastBlogPosts()}>
            <Chevron
              className={c('rotate-180', {
                'text-teal-dark': !isViewingLastBlogPosts(),
                'text-light-grey': isViewingLastBlogPosts(),
              })}
            />
          </button>
        </nav>
      </footer>
    </section>
  );
};

export default BlogPosts;
