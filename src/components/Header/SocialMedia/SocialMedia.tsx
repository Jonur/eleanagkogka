import { BehanceLogo, DribbleLogo, LinkedInLogo, MediumLogo } from 'src/components/Icons';

const SocialMedia: React.FC = () => (
  <nav role="menubar" className="flex gap-4 mt-[44px] lg:mt-0 lg:h-[32px]">
    <a
      href="https://www.linkedin.com/in/eleanagkogka/"
      target="_blank"
      className="w-8 h-8 flex items-center justify-center"
      rel="noreferrer"
    >
      <LinkedInLogo className="text-white lg:text-dark-blue" />
    </a>
    <a
      href="https://behance.net/EleanaG"
      target="_blank"
      className="w-8 h-8 flex items-center justify-center"
      rel="noreferrer"
    >
      <BehanceLogo className="text-white lg:text-dark-blue" />
    </a>
    <a
      href="https://dribbble.com/EleanaGkogka"
      target="_blank"
      className="w-8 h-8 flex items-center justify-center"
      rel="noreferrer"
    >
      <DribbleLogo className="text-white lg:text-dark-blue" />
    </a>
    <a
      href="https://medium.com/@eleana_gkogka"
      target="_blank"
      className="w-8 h-8 flex items-center justify-center"
      rel="noreferrer"
    >
      <MediumLogo className="text-white lg:text-dark-blue" />
    </a>
  </nav>
);

export default SocialMedia;
