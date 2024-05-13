import React from 'react';

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="px-6 lg:px-0 pb-4 mx-auto mt-[60px] flex flex-col items-center lg:items-end max-w-[1180px] w-full text-sm">
      <span>&copy;{`${thisYear} Designed by Eleana Gkogka`}</span>
    </footer>
  );
};

export default Footer;
