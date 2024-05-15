import React from 'react';

import { FatArrow } from 'src/components/Icons';

const Contact: React.FC = () => (
  <section className="p-8 lg:p-10 text-dark-blue bg-light-grey rounded-tr-[40px] rounded-bl-[40px] max-w-[1180px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
    <div>
      <h2 className="text-3xl lg:text-[32px] mb-2 leading-6 font-bebas uppercase flex items-center gap-2">
        <span>Contact</span>
        <FatArrow className="-mt-[3px]" />
      </h2>

      <p className="italic lg:text-lg">I am based in London and looking forward to hear from you!</p>
    </div>

    <div className="hidden lg:flex lg:flex-1 items-center justify-end">
      <div className="h-[1px] bg-black opacity-10 w-full max-w-[400px]" />
    </div>

    <div className="mt-4 lg:mt-0 flex justify-end">
      <a
        href="mailto:eleana.gkogka@gmail.com"
        className="gradient-btn flex items-center justify-center text-base border hover:border-0 border-dark-blue rounded-tr-2xl rounded-bl-2xl w-fit h-[40px] px-6 hover:px-[25px] active:px-[23px] py-0 active:border-teal-dark active:border-2 active:text-teal-dark"
      >
        Email me
      </a>
    </div>
  </section>
);

export default Contact;
