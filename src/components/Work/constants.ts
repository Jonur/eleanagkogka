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
        prebordered: true,
        entries: [
          {
            title:
              'It all began with an amalgamation of customer observations, compelling data, a colleague’s request for support, and a designer’s (yours truly) ambition to lead a high-impact project. An opportunity was presented to align user-centred design with StreamYard’s strategic business goals.',
          },
          {
            label: 'Observations &amp; data points',
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
        prebordered: true,
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
          {
            label: 'Proposal',
            content: `
              <p>Replace the initial question with a more relevant one: “Welcome! What’s your main reason for using StreamYard?”. Users could choose from live streaming, recording, or hosting webinars. This change will aim to help us:</p>
              <ul>
                <li>Understand what our users are using us for today, and measure the impact of our marketing and growth efforts on attracting different use cases in the future.</li>
                <li>Provide a tailored to our customers's use case experience.</li>
                <li>Inform new users about the platform’s capabilities.</li>
              </ul>
          `,
          },
          {
            label: 'Design goals',
            content: `
              <ul>
                <li>Maximize engagement with the onboarding question.</li>
                <li>Minimize drop-offs to protect the top of the funnel.</li>
                <li>Inject personality into the product to build trust and user affinity.</li>
                <li>Understand the primary use cases of our customers.</li>
              </ul>
            `,
          },
          {
            label: 'Design challenges',
            content: `
              <p>Given our evolving design system and non-established branding, crafting an appealing and effective interface required coordination and collaboration with the design team. I designed a new card format consistent with our existing product style, and worked closely with the brand, providing direction, to create graphics for the page. The copy was crafted to be concise, promoting quick and accurate decisions. To ensure fairness, the response options were randomised.</p>
              <p>A bold decision was to remove the skip button, forcing people to answer the question before diving into the product. I wasn’t a fan of this approach, but I agreed to release this to 20% of new users to gauge drop-off rates.</p>
            `,
            image: '10.png',
          },
          {
            label: 'Results &amp; iterations',
            content: `
              <p>The initial test maintained our original drop-off rate while empowering us with knowledge. To reduce drop-off, we reintroduced the “Skip” button, which worked well but led to fewer answers.</p>
              <p>In the next iteration, I replaced the “Skip” button with an “X” icon and removed the supporting copy. This adjustment resulted in 80% fewer skips, reduced the average time spent on the page and led to more users moving through the funnel.</p>
              <p>The refined onboarding question helped segment users more effectively, revealing the detailed split between live streamers, recorders and webinar hosts. This data will measure use case swifts and trends and help us understand how different users onboard, retain or upgrade. It will also act as the foundation for delivering a tailored use case-based experience in the future.</p>
            `,
          },
        ],
      },
      {
        title: 'Second project<br />The dashboard landing page',
        prebordered: true,
        entries: [
          { title: '&ndash; Optimise the user journey/s & create foundations for a tailored experience.' },
          {
            label: 'Problem outcomes',
            content: `
            <p>Originally tailored for streamers, StreamYard now also supports recording and webinar hosting. However, new users was still landing on the “Destinations” page, necessary for live streaming but irrelevant to the rest. Amplitude analytics show high drop-off rates at this stage, and Fullstory sessions indicated new users interested in recording or hosting webinars often become disoriented at this point.</p>
            <p>Furthermore, the page designed for creating new content was still labelled “Broadcasts,” a term closely associated with streaming. This, combined with a single “Create” button layout for all streaming, recording and webinars, delivers an underwhelming and confusing experience.</p>
          `,
            image: '3.png',
          },
          {
            label: 'Goal',
            content:
              'Improve the initial user experience to facilitate quicker and more intuitive access to the studio, where new users can experience the full product’s value, catering to diverse user intents &ndash; from streaming to recording and hosting webinars.',
          },
          {
            label: 'Hypothesis',
            content:
              'Introducing a “Key Actions” welcome screen will help first-time users easily identify their next steps, and increase the rate of successful first live streams and recordings.',
          },
          {
            label: 'The full vision',
            content:
              'Design a new, universal landing page &ndash; A dynamic Dashboard where users can immediately take relevant actions, access educational content, track their progress and more.',
          },
          {
            label: 'Limitations',
            content:
              'To implement a new landing page tailored for first-time users as a quick A/B test, we had to avoid any modifications to existing pages or menu structures.',
          },
          {
            label: 'Design iterations',
            content:
              'My goal was to create a scalable, future proof design. Hierarchy was critical here, so I experimented with different layouts and content, to land on the key actions relevant to new users. Actions that can help them achieve their goals while providing an overview of the SY capabilities.',
            image: '7.png',
          },
          {
            content:
              'After different iterations, I decided to split the page design into two key action groups to guide users depending on their priorities, “Create” (with options for Live Stream, Recording, or Webinar) and “Prepare” (featuring options to test out the studio, connect destinations, or invite team members). I introduced a new UI card design and kept the copy descriptions concise to guide users effectively.',
            image: '5.png',
          },
          {
            content:
              'I shared and sought feedback from the design team through the different iterations to ensure consistency and scalability. I navigated through conflicting ideas and landed on a design everyone was happy to add to our new design system.',
          },
          {
            label: 'A/B test results',
            content:
              'The new page led to a significant increase in users completing their first broadcasts more quickly. Although fewer users connected to their destinations, there was an uplift in recording studios, indicating better service to non-streamer customers.',
          },
          {
            label: 'Final designs',
            content:
              'We’ve noticed through Fullstory, that people didn’t seem to read as much. Simplifying and reducing the copy on the page to see if less text would affect user interaction, showed no negative effects and slightly reduced the interaction time.',
            image: '6.png',
          },
          {
            label: 'Implementation',
            content:
              'The new design wasn’t implemented according to the vision but evolved the “Broadcasts” page into a new “Home” page, that looked different for new versus active users. First-time users would see the actionable “Create” and “Prepare” sections while returning users will see the “Create” and “Upcoming / Past shows” sections.',
          },
          {
            label: 'Outcomes',
            content:
              'The redesign successfully addressed initial usability issues, significantly enhancing user engagement leading to an almost 5% increase in new user broadcasts created. Further adjustments and testing will continue to refine and optimise the user experience.',
          },
        ],
      },
      {
        title: 'Third project<br />The studio key action',
        prebordered: true,
        entries: [
          { title: '&mdash; A first quick win or just a first step towards better team communication?' },
          {
            label: 'Problem',
            content: `
              <p>In our analysis of Amplitude data, the most critical metric for customer activation and retention is the completion of the first broadcast. Users who experience the studio, create a broadcast, and hit “Go Live” or “Record” are significantly more likely to remain engaged and become dedicated customers.</p>
              <p>Observations from Fullstory sessions reveal that new users often enter the Studio but fail to realise they must add themselves to the stage* &ndash; they are used to platforms like Zoom or Google Meets where they are added automatically. This initial step is crucial for discovering features like brand customisation, understanding the value of SY and effectively completing their Studio journey.</p>
              <p>*A place within the studio where all live participants are visible to the audience.</p>
            `,
          },
          {
            label: 'Hypothesis',
            content:
              'Despite existing onboarding cues, many users overlook the subtle message to add themselves to the stage. We hypothesised that making this message more noticeable would increase the likelihood of users performing this key action, thereby boosting the number of streams and recordings.',
          },
          {
            label: 'The design',
            content:
              'For this first iteration, I implemented two straightforward changes: changed the message bubble’s colour from white to blue and added movement with a message transition for greater emphasis. Alongside these visual cues, we refined the copy to be clearer and more direct. We launched an A/B test the changes, targeting 50% of new users.',
            image: '1.png',
          },
          {
            label: 'Outcome &amp; learnings',
            content: `
              <p>The adjustments did not lead to the anticipated improvements. There was a negligible increase in “Add to Stage” clicks &ndash; less than 1% &ndash; and the overall number of live streams and recordings remained unchanged.</p>
              <p>The “Add to Stage” action remains pivotal for user engagement, yet our initial redesign did not significantly impact user behaviour. This outcome suggests a need for deeper insights into users’ first interactions and needs. Further iterations have to and will follow.</p>
              <p>Although the results weren’t as expected, this A/B test was a positive step in refining our rapid A/B test process and strengthening collaboration with the Studio team, both in design and development.</p>
            `,
          },
        ],
      },
      {
        title: 'Fourth project<br />User interview',
        prebordered: true,
        entries: [
          { title: '&ndash; Learn more about new users, their goals, needs and struggles.' },
          {
            label: 'Hypothesis',
            content:
              'Learning more about our new customers would empower us with new test ideas, help us prioritise work and build a successful design system.',
          },
          {
            label: 'Goals',
            content:
              'Leading my first user research interviews was a learning experience. My goal was to deepen our understanding of how new users—Streamers, Podcasters, and Webinar Hosts—interact with and perceive our platform, specifically our landing pages, pricing page, dashboard, and studio. I wanted to get the most value out of participants and produce high-quality insights and A/B test ideas for improving our onboarding. With guidance from our seasoned user researcher, I got to work, starting with setting our research objectives and success criteria.',
          },
          {
            label: 'Research objectives',
            content: `
              <p>To refine our user onboarding and interface design, I aimed to answer the following questions through the interviews:</p>
              <p><strong>Initial Impressions:</strong> Do users understand the value of StreamYard from our landing page?</p>
              <p><strong>Dashboard Interaction:</strong> How do users navigate the dashboard and how they access the studio?</p>
              <p><strong>Expectation Alignment:</strong> Does the product align with new users' expectations from similar platforms?</p>
              <p><strong>Initial Actions:</strong> What initial steps do users take in the studio?</p>
              <p><strong>Experience Barriers:</strong> Where do first-time users encounter difficulties within the studio?</p>
              <p><strong>Value Realisation:</strong> When do users perceive value from the product?</p>
            `,
          },
          {
            label: 'Success criteria',
            content: `
              <p>The success of this research will be measured by our ability to:</p>
              <p><strong>Insight Acquisition:</strong> Gather insights on our users’ product discovery patterns.</p>
              <p><strong>Onboarding Innovations:</strong> Identify onboarding opportunities and produce testing ideas.</p>
              <p><strong>Design Optimisation:</strong> Identify and uncover UI/UX gaps and areas for improvement.</p>
            `,
          },
          {
            label: 'Recruiting participants',
            content: `
              <p>My goal was to engage diverse users, people familiar with competing platforms, and brand-new creators, to capture a wide spectrum of expectations and levels of understanding.</p>
              <p>Participants were meticulously chosen through a detailed questionnaire I’ve created in the User Interviews Recruiting Platform with our researcher’s support, designed to identify individuals who could offer in-depth insights through their unique use case lens.</p>
              <p>We selected a group of seven participants with additional backups to step in for any no-shows or if we see a need to enrich findings with more perspectives.</p>
            `,
            image: '11.png',
          },
          {
            label: 'Interview format',
            content: `
              <p>I then crafted a semi-structured script with clear steps and questions, to ensure I covered all key topics. The script included well-defined steps and prompts, serving as a guide but was flexible enough to permit improvisation, allowing me to explore unexpected but relevant themes.</p>
              <p>I organised the interview into two distinct segments. The first part involved an introduction and a deep dive into the participant’s use case; goals, needs, pain points, and aspirations. The second part focused on the StreamYard user journey, observing how the participant interacts with the product for the first time.</p>
            `,
            image: '12.png',
          },
          {
            label: 'Interviews',
            content:
              'As a novice in user interviewing, I started by shadowing our user researcher during the first session to learn the ropes. By the second interview, I took the lead in the second, more straightforward part, gradually building my skills. Regular debriefs with my mentor boosted my confidence, and by the fourth interview, I was fully leading both segments. On later interviews, I invited colleagues to observe, fostering awareness and contributing to our team’s culture.',
            image: '13.png',
          },
          {
            content:
              '<p>&ndash;&nbsp;&nbsp;<a href="#">More about my approach to user interviews in my article User Interviews Made Simple</a>.</p>',
          },
          {
            label: 'Insight synthesis',
            content: `
              <p>Following the interviews, I utilised FigJam to categorise and visualise the collected data by themes, such as usability concerns, key challenges and expectations. This visual mapping allowed me to efficiently overview patterns, it streamlined the analysis and test ideation process while enhancing our team discussions for prioritising design and development.</p>
              <p>I’ve also created a detailed Onboarding insights Document in Notion which I presented in All-hands and shared with the wider company and leadership.</p>
            `,
            image: '4.png',
          },
          {
            label: 'Insights &amp; impact',
            content:
              'The interviews provided valuable insights into how different user groups navigate and perceive StreamYard’s interface and onboarding process. Before adding new onboarding features, we recognised the need to address core usability issues. We identified several opportunities to refine interactions, better communicate the product’s value, and more effectively guide users to their “aha” moments. We also learned that a mix of onboarding methods may be necessary to deliver the full potential, and gathered ideas for new features that I then shared with the relevant teams.',
            image: '9.png',
          },
          {
            content: `
              <p>Sharing these insights with the leadership and the PMs greatly influenced the product’s vision, adding two new areas of focus, and our road map for 2024.</p>
              <p>I will delve deeper into specific insights and test ideas in <a href="#">Part 2 of the Onboarding Project</a>.</p>
            `,
          },
          {
            label: 'Communication &amp; education',
            content:
              'Throughout this research, I prioritised keeping the team informed with regular updates on new findings. I compiled a comprehensive onboarding guide and shared it with the design team to deepen their understanding and set the stage for what’s coming. Empowered by this knowledge, I actively advocated for new users in our design and development discussions or on Slack, promoting a more user-centred approach to building our product.',
            image: '8.png',
          },
          {
            content:
              '<p>&ndash; The onboarding guide turned into a Medium article which you can read <a href="#">here</a>.</p>',
          },
        ],
      },
    ],
  },
};
