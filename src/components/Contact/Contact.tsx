import { FatArrow } from 'src/components/Icons';

const Contact: React.FC = () => (
  <section className="p-8 text-dark-blue bg-light-grey rounded-tr-[40px] rounded-bl-[40px] max-w-[1180px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
    <div>
      <h2 className="text-3xl font-bebas uppercase mb-4 flex items-center gap-2">
        <span>Contact</span>
        <FatArrow className="-mt-[3px]" />
      </h2>

      <p className="italic">I am based in London and looking forward to hear from you!</p>
    </div>

    <div className="hidden lg:flex lg:flex-1 items-center justify-end">
      <div className="h-[1px] bg-black opacity-10 w-full max-w-[400px]" />
    </div>

    <div className="mt-4 lg:mt-0 flex justify-end">
      <a
        href="mailto:eleana.gkogka@gmail.com"
        className="flex items-center justify-center text-base border border-dark-blue rounded-tr-2xl rounded-bl-2xl w-fit h-[40px] px-6 py-0"
      >
        Email me
      </a>
    </div>
  </section>
);

export default Contact;
