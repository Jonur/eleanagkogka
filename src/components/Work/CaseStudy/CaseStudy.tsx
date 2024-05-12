import React from 'react';
import { useParams } from 'react-router-dom';

import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { useWindowDimensions } from 'src/hooks';
import { Route } from 'src/types';

import { CASE_STUDIES } from '../constants';
import SocialProfiles from '../SocialProfiles';

const CaseStudy: React.FC = () => {
  const { caseStudyId = '' } = useParams();
  const caseStudy = CASE_STUDIES[caseStudyId];

  const { onLargeScreen } = useWindowDimensions();

  return caseStudy ? (
    <>
      <Header pageHeader={caseStudy.title} breadcrumb={{ to: Route.WORK, label: 'Work' }} />

      <div className="pt-[60px] lg:pt-[100px] px-6 pb-4 flex flex-col items-center gap-y-[60px] lg:gap-y-[80px] lg:last:mb-[20px]">
        {(caseStudy.sections || []).map((section, index) => {
          const key = `${section.title}-${index}`;
          return (
            <section key={key} className="text-dark-blue max-w-[1180px] w-full lg:flex lg:justify-between">
              <h2 className="text-3xl lg:text-[32px] font-bebas uppercase mb-4 lg:mb-8">{section.title}</h2>

              <div className="flex flex-col lg:flex-1 lg:max-w-[880px] gap-y-6">
                {section.entries.map((entry) => {
                  const shouldAddLabel = onLargeScreen() || (!onLargeScreen() && 'label' in entry);

                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="flex-1 flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-10"
                    >
                      {shouldAddLabel && (
                        <div className="lg:w-[140px] lg:text-right shrink-0 text-base leading-[22px] lg:text-lg lg:leading-7 uppercase font-bold">
                          {'label' in entry ? entry.label : ''}
                        </div>
                      )}
                      <div className="flex flex-col gap-y-4 lg:gap-y-6 lg:max-w-[700px]">
                        {'title' in entry && (
                          <h3 className="text-2xl lg:text-[26px] italic font-light">{entry.title}</h3>
                        )}
                        {'content' in entry && (
                          <span
                            className="flex flex-col gap-y-2 leading-6 lg:leading-7 lg:text-lg [&_a]:text-teal-dark [&_a]:border-b [&_a]:border-teal-dark [&_a]:inline-block [&_a]:leading-[13px]"
                            dangerouslySetInnerHTML={{
                              __html: entry.content,
                            }}
                          />
                        )}
                        {'image' in entry && <img src={entry.image} className="w-full h-auto" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <SocialProfiles />

        <Contact />
      </div>

      <Footer />
    </>
  ) : null;
};

export default CaseStudy;
