import c from 'classnames';
import React, { useRef, useState } from 'react';

import { Arrow, Chevron } from 'src/components/Icons';
import { useOnMount } from 'src/hooks';

import { BLOG_POST_GAP_PX, BLOG_POST_SIZE_PX, BLOG_POSTS, PAGINATION_COUNT } from './constants';

const BlogPosts: React.FC = () => {
  const blogPostContainerRef = useRef<HTMLDivElement>(null);
  const [blogPostScreens] = useState(Math.ceil(BLOG_POSTS.length / PAGINATION_COUNT));
  const [pageIndex, setPageIndex] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);

  const scrollToPost = (index: number) => {
    if (blogPostContainerRef.current) {
      setPageIndex(index);

      blogPostContainerRef.current.scrollTo({
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
    const index = pageIndex + 1 <= blogPostScreens ? pageIndex + 1 : blogPostScreens - 1;
    scrollToPost(index);
  };

  const setOffsetList = () => {
    setOffsets(
      Array.from({ length: blogPostScreens }).reduce((acc: number[], _, index) => {
        const page = index === 0 ? 0 : index * PAGINATION_COUNT;
        const size = BLOG_POST_SIZE_PX + BLOG_POST_GAP_PX;
        return [...acc, index === 0 ? 0 : page * size + BLOG_POST_GAP_PX * index];
      }, [])
    );
  };

  useOnMount(() => {
    setOffsetList();

    // const handleOnScroll = (event: Event) => {
    //   const { scrollLeft, scrollWidth, offsetWidth } = (event as unknown as ScrollEvent).target;
    //   console.info('Firing...', {
    //     scrollLeft,
    //     scrollWidth,
    //     offsetWidth,
    //   });
    //   const index =
    //     scrollWidth - scrollLeft === offsetWidth
    //       ? offsets.length - 1
    //       : offsets.findIndex((offset, index) => {
    //           return (
    //             scrollLeft >= offset &&
    //             (offsets[index + 1] ? scrollLeft <= offsets[index + 1] : offsets[offsets.length - 1])
    //           );
    //         }) || 0;
    //   setPageIndex(index);
    // };

    // blogPostContainerRef.current?.addEventListener('wheel', handleOnScroll);
    // return () => {
    //   blogPostContainerRef.current?.removeEventListener('wheel', handleOnScroll);
    // };
  });

  return (
    <section className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-3 text-dark-blue max-w-[1180px] w-full">
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">Blog posts</h3>

      <div ref={blogPostContainerRef} className="overflow-x-scroll scroll-smooth no-scrollbar">
        <div className="flex gap-x-6 lg:gap-x-8">
          {BLOG_POSTS.map((post, index) => (
            <a
              id={`blog-post-${index}`}
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="w-[304px] flex-shrink-0 flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <div
                  className="w-full h-[140px] bg-cover bg-center mb-4 lg:mb-6 rounded-tl-[32px] rounded-br-[32px]"
                  style={{ backgroundImage: `url(/blog/thumb-${index}.jpg)` }}
                />
                <h5 className="text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold">{post.title}</h5>
                {post.subtitle && <h6 className="text-base leading-6 lg:text-lg lg:leading-7 mt-1">{post.subtitle}</h6>}
              </div>
              <div className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4">
                <span>Read on Medium</span>
                <Arrow className="-rotate-45 w-[12px] h-[12px]" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="w-full hidden lg:flex justify-end lg:justify-between mt-12 items-baseline">
        <nav className="flex gap-x-3 h-3 items-center">
          <button aria-label="Previous" onClick={handlePrevious} disabled={pageIndex === 0}>
            <Chevron
              className={c({
                'text-teal-dark': pageIndex !== 0,
                'text-light-grey': pageIndex === 0,
              })}
            />
          </button>
          {Array.from({ length: blogPostScreens }).map((_, index) => {
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
          <button aria-label="Next" onClick={handleNext} disabled={pageIndex === blogPostScreens - 1}>
            <Chevron
              className={c('rotate-180', {
                'text-teal-dark': pageIndex !== blogPostScreens - 1,
                'text-light-grey': pageIndex === blogPostScreens - 1,
              })}
            />
          </button>
        </nav>

        <a
          href="https://medium.com/@eleana_gkogka"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center text-teal-dark leading-5 lg:leading-7 lg:text-lg text-base mt-4"
        >
          <span>More on Medium</span>
          <Arrow className="-rotate-45 w-[12px] h-[12px]" />
        </a>
      </footer>
    </section>
  );
};

export default BlogPosts;
