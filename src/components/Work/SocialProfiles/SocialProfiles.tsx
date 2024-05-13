import React from 'react';

const SocialProfiles: React.FC = () => (
  <section className="w-full border-t border-b border-black border-opacity-15 pt-3 lg:pt-4 pb-12 lg:pb-[80px] text-dark-blue max-w-[1180px] lg:w-full">
    <h3 className="text-lg italic mb-12 lg:mb-[80px]">Explore more of my work on</h3>

    <div className="flex gap-x-10 lg:gap-x-0 lg:justify-between lg:px-[100px]">
      <a href="https://behance.net/EleanaG" target="_blank" rel="noreferrer" title="Behance">
        <img src="/profile-logos/behance.svg" />
      </a>
      <a href="https://dribbble.com/EleanaGkogka" target="_blank" rel="noreferrer" title="Dribble">
        <img src="/profile-logos/dribble.svg" />
      </a>
      <a href="https://medium.com/@eleana_gkogka" target="_blank" rel="noreferrer" title="Medium">
        <img src="/profile-logos/medium.svg" />
      </a>
    </div>
  </section>
);

export default SocialProfiles;
