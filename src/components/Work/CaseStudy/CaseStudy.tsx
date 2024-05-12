import React from 'react';
import { useParams } from 'react-router-dom';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import { CASE_STUDIES } from '../constants';

const CaseStudy: React.FC = () => {
  const { caseStudyId = '' } = useParams();
  const caseStudy = CASE_STUDIES[caseStudyId];

  return caseStudy ? (
    <>
      <Header pageHeader={caseStudy.title} />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[100px]">
        <section className="text-dark-blue max-w-[1180px] w-full lg:flex lg:justify-between">
          <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-8">{caseStudy.title}</h2>
        </section>

        <Contact />
      </div>

      <Footer />
    </>
  ) : null;
};

export default CaseStudy;
