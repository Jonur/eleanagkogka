import c from 'classnames';
import React from 'react';

import { Arrow, Chevron } from 'src/components/Icons';

import { BLOG_POSTS } from './constants';

const BlogPosts: React.FC = () => {
  const blogPostScreens = Math.ceil(BLOG_POSTS.length / 3);

  return (
    <section className="border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-3 text-dark-blue max-w-[1180px] w-full">
      <h3 className="text-lg italic mb-12 lg:mb-[80px]">Blog posts</h3>

      <div className="overflow-x-scroll">
        <div className="flex gap-x-6 lg:gap-x-8">
          {BLOG_POSTS.map((post, index) => (
            <a
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

      <footer className="w-full flex justify-end lg:justify-between mt-12 items-baseline">
        <nav className="flex gap-x-3 h-3 items-center">
          <button>
            <Chevron className="text-teal-dark" />
          </button>

          {Array.from({ length: blogPostScreens }).map((_, index) => {
            const key = `ctrl-${index}`;
            return <button key={key} className={c('rounded-full w-3 h-3 bg-light-grey')} />;
          })}

          <button>
            <Chevron className="text-teal-dark rotate-180" />
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
