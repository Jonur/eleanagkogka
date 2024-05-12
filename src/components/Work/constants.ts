import { CaseStudy } from 'src/types';

export const CAST_STUDY_ORDER: CaseStudy['id'][] = ['zLI1'];

export const CASE_STUDIES: Record<CaseStudy['id'], CaseStudy> = {
  zLI1: {
    id: 'zLI1',
    title: 'The Onboarding Project Part 1',
    subtitle: 'Increasing top of funnel growth through customer focused onboarding',
    intro:
      'Delve into my design thinking process, user research strategies and team collaboration. Preview some of my design solutions, A/B tests and artefacts developed throughout this project.',
    img: 'blog/thumb-0.jpg',
    sections: [
      {
        title: 'Introduction',
        entries: [
          {
            title: 'In this first part of the Onboarding Project case study...',
            content:
              'I’ll share the project background, detailing how I set goals and prioritised tasks using various data sources. You’ll gain insights into my design thinking process, strategies for user research and conducting interviews, and how I collaborate effectively with teams. Additionally, you’ll get a preview of some of the design solutions and artefacts developed throughout this project, including a look at different A/B tests from inception to conclusion.',
          },
          {
            label: 'The product',
            content:
              'StreamYard is a professional live streaming and recording browser based studio. With SY you can record, go live on your website or multiple platforms like Youtube and Facebook at once.',
          },
          {
            label: 'My role',
            content: 'Product Design Lead  &bull;  Designer  &bull;  Researcher',
          },
          {
            content:
              '<em>This case study covers the first phase of the onboarding project, starting on August 2023.</em>',
          },
        ],
      },
      {
        title: 'Background',
        entries: [
          {
            title:
              'It all began with an amalgamation of customer observations, compelling data, a colleague’s request for support, and a designer’s (yours truly) ambition to lead a high-impact project. An opportunity was presented to align user-centred design with StreamYard’s strategic business goals.',
          },
          {
            label: 'Observations and data points',
            content: `
              <p><strong>Evolving Use Cases:</strong> Initially designed for streamers, StreamYard now accommodates streaming, recording, and webinars. This expansion isn't fully mirrored in the app’s current design, leading to a disconnect with user expectations and needs.</p>
              <p><strong>Increased Complexity:</strong> Introducing new features has enriched but unintentionally complicated the product, making it harder for new users to navigate and fully utilise its functionalities.</p>
              <p><strong>User Engagement Decline:</strong> Although enhancements like the Google login have boosted sign-ups by nearly 10%, there’s been a drop in new user broadcasts, a critical metric for assessing long-term engagement, indicating the post-sign-up flows aren’t fully optimised.</p>
              <p><strong>User Experience Issues:</strong> Observing new users through Fullstory sessions has revealed usability barriers, hesitation or confusion within the Dashboard and Studio, which harms engagement.</p>
            `,
          },
          {
            label: 'Team struggles',
            content:
              'A colleague from the Studio product team highlighted difficulties in balancing feature delivery with supporting customers through effective onboarding, leading to an overload of messages that lack hierarchy or focus and often distract rather than help users.',
          },
          {
            label: 'Business goals',
            content:
              'The Growth team’s primary objective was to reignite top-of-funnel growth by optimising acquisition, activation, and adoption while focusing on enhancing and optimising user journeys.',
          },
          {
            label: 'The opportunity',
            content:
              'The alignment of StreamYard’s goals with the observed challenges presented an excellent opportunity to overhaul the onboarding experience. A more consistent, supportive, and tailored onboarding system could more effectively guide users through the product, helping them discover the full value of StreamYard.',
          },
        ],
      },
      {
        title: 'Getting started',
        entries: [
          {
            title:
              'Being aware that effective onboarding is crucial to a product’s success, I was eager to initiate this project. The goal was to develop a relevant and cohesive onboarding system to support new users in reaching their AHA moments while fostering long-term engagement and satisfaction.',
          },
          {
            label: 'The hypothesis',
            content: `
              <p>An onboarding system will provide guidance and support to keep our customers engaged and motivated to explore and discover StreamYard features, reaching their content creation goals. It will help us communicate and deliver the best value for our customers’ wants and needs. This, in turn, will boost customer acquisition and reduce churn.</p>
              <p>This hypothesis will help us communicate the project value to stakeholders while serving as our north star. &ndash; <a href="#">More about on how I form a hypothesis</a>.</p>`,
          },
          {
            label: 'Measuring success',
            content: `
              <p>To gauge the impact of our efforts, I set specific metrics to monitor.</p>
              <p><strong>Retention Rate:</strong> More users should understand the value of SY and form the habit of using it.</p>
              <p><strong>Engagement Rate:</strong> A higher percentage of users should actively engage with the platform over time.</p>
              <p><strong>Time to Value:</strong> The duration from sign-up to realising the product's value should decrease.</p>
              <p><strong>Feature Adoption Rate:</strong> There should be an increase in feature usage post-onboarding.</p>
              <p><strong>Upgrade Rate:</strong> More users should find enough value to upgrade to a paid plan.</p>
              <p><strong>Completion Rate:</strong> More users should be about to complete onboarding without any usability issues.</p>
              <p><strong>Support Tickets:</strong> There should be no complaints about any onboarding solutions.</p>
            `,
          },
        ],
      },
      {
        title: 'Diving in',
        entries: [
          {
            title:
              'With the support of my Growth PM, as the project fitted like a glove to our team and business objectives, I had to get leadership buy-in and align with all the relevant teams.',
          },
          {
            label: 'Business support',
            content:
              'We were lucky or rather well prepared and got the leadership’s full support. We already had some insights from previous observations, to form some initial hypotheses and adjust our roadmap. I also had the green light to use our research function to interview potential new customers.',
          },
          {
            label: 'Communication',
            content:
              'Ensuring smooth collaboration with different product teams was critical. Every project had to be communicated in detail, including the scope, timeline, expectations, potential impacts on teams’ roadmaps, and any results or learnings.',
          },
          {
            label: 'Principles',
            content:
              'We committed to not fixing what isn’t broken, viewing onboarding as part of a holistic strategy, and adopting an iterative approach to learn and optimise continuously.',
          },
          {
            label: 'Prioritisation',
            content:
              'We aimed to set solid foundations, get closer to our customers and achieve quick wins to build confidence and maintain momentum.',
          },
          {
            content:
              'This refined approach streamlined our processes and aligned our team efforts towards a common vision, setting the stage for this iterative, high-impact project which, spoiler alert, will enhance our company’s user-focused culture.',
          },
        ],
      },
      {
        title: 'First project<br />The onboarding question',
        entries: [
          {
            title:
              '&ndash; Learn more about our users, and create the foundations for a tailored to their use case experience while educating them on SY capabilities.',
          },
          {
            label: 'Problem',
            content: `
              <p><strong>Un-utilised space:</strong> Initially, new users were greeted with a generic question on how they are planning to use StreamYard, which proved irrelevant and unmonitored after talking with different teams. This step contributed to our top of funnel drop-off rate for no real value to our business.</p>
              <p><strong>New use cases:</strong> StreamYard’s features evolved to serve streamers, podcasters, and webinar hosts, but the product user journey has been unchanged. We had to understand, why people are here to offer them a tailored to their needs experience. Looking at product surveys and user interview insights from our research team, the podcasting and webinar features weren’t apparent to our users. SY was well-known as a streaming platform and nothing more.</p>
            `,
          },
          { image: '2.png' },
        ],
      },
    ],
  },
};
