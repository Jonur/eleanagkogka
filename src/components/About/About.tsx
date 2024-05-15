import React from 'react';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import StarList from 'src/components/StarList';
import { useOnMount } from 'src/hooks';

import BlogPosts from './BlogPosts';
import { JOY } from './constants';

const About: React.FC = () => {
  useOnMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  });

  return (
    <>
      <Header pageHeader="About" />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[100px]">
        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:flex-1">My story</h2>

          <div className="flex flex-col gap-4 max-w-[700px]">
            <h3 className="text-2xl leading-[30px] lg:text-[26px] lg:leading-8 italic">
              I am a bad user! There, I said it.
            </h3>

            <p className="leading-6 lg:leading-7 lg:text-lg">
              I don’t always read, I often hesitate, and I can get lost or give up. But can these weaknesses turn into a
              superpower? Absolutely! They fuel my passion for creating inclusive, user-friendly products for people
              like me. It gives me an edge in problem solving allowing me to empathise and spot opportunities invisible
              to the tech-savvy eye.
            </p>

            <p className="leading-6 lg:leading-7 lg:text-lg mb-2">
              My professional journey started as a Graphic Designer, who couldn’t just push pretty pixels. Subjective
              opinions and superficial solutions made me itch for a more scientific evidence-based approach to design,
              with clear principles and an uncontested, based on research, truth. I very consciously transitioned into
              UI/UX design by learning, applying and teaching design thinking.
            </p>
          </div>
        </article>

        <BlogPosts />

        <article className="text-dark-blue flex flex-col lg:flex-row gap-4 max-w-[1180px] lg:w-full">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:flex-1">About me</h2>

          <div className="flex flex-col gap-4 max-w-[700px]">
            <h3 className="text-2xl leading-[30px] lg:text-[26px] lg:leading-8 italic">
              Things you might want to know about me outside of work.
            </h3>

            <p className="leading-6 lg:leading-7 lg:text-lg">
              I am passionate about health and nutrition, neuroscience and psychology. I enjoy hearing about new
              technologies and business strategies or anything I can apply for my personal and professional growth.
              You’ll often find me listening to a podcast, writing lists and guides, or chilling with a cup of coffee
              and music as I reflect. Inspiration can strike anytime, anywhere!
            </p>

            <p className="leading-6 lg:leading-7 lg:text-lg mb-2">
              I enjoy creative cooking, being in nature and exploring different cultures and cuisines through travel. I
              approach life with openness and people with compassion and embrace challenges that spur growth. I strive
              to be a kinder, wiser, and a positive influence on those around me. Oh, and I love cats!
            </p>
          </div>
        </article>

        <StarList title="What gives me joy" items={JOY} />

        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default About;
