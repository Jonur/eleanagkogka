import { CaseStudy } from 'src/types';

export const CAST_STUDY_ORDER: CaseStudy['id'][] = ['WHR4', 'zLI1', 'Dv5M', 'Uzer', 'Vm6M', 'vpnm'];

export const CASE_STUDIES: Record<CaseStudy['id'], CaseStudy> = {
  zLI1: {
    id: 'zLI1',
    title: 'StreamYard - The Onboarding Project Part 1',
    pageTitle: 'Onboarding Part 1',
    img: 'cover.png',
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
              <p><strong>Time to Value:</strong> The duration from sign-up to realising the product’s value should decrease.</p>
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
                <li>Provide a tailored to our customers’s use case experience.</li>
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
  Dv5M: {
    id: 'Dv5M',
    title: 'StreamYard - The Onboarding Project Part 2',
    pageTitle: 'Onboarding Part 2',
    img: 'cover.png',
    sections: [
      {
        title: 'Introduction',
        entries: [
          {
            title: 'In Part 2 of the Onboarding Project case study...',
            content:
              'I’ll reveal insights from our user interviews and explore thoughts and ideas that emerged around onboarding, A/B tests, and optimisations, alongside potential new features for various teams. I will also share how this research influenced our Growth roadmap and StreamYard’s Strategy and Product Vision for 2024.',
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
              '<em>This case study covers the second phase of the Growth Team Onboarding Project, starting on December 2023.</em>',
          },
        ],
      },
      {
        title: 'New user interviews<br />Insights',
        prebordered: true,
        entries: [
          {
            title:
              'From Part 1; we interviewed 7 first-time users, streamers, podcasters and webinar hosts, to delve into their onboarding experience. The goal was to understand more about their use cases, challenges and needs, and how they perceive or use SreamYard for the first time.',
          },
          {
            label: 'Context',
            content: `
              <p>We asked people to explore our landing pages and prompted them to create a free account to try the studio. We let them explore freely and interact with the product while sharing their first impressions. We were specifically looking for positive and negative feelings, signs of struggle and AHA moments. Following the interviews, I utilised Figjam to organise the insights by themes, and identified patterns.</p>
              <p>You can learn more about this research in <a href="/work/zLI1">Part 1</a>.</p>
            `,
            image: '7.png',
          },
          {
            content:
              'The user interviews uncovered significant opportunities to enhance touch points throughout the product, helping users quickly grasp the value of StreamYard and have a successful long-lasting experience. We also found that some participants could benefit from a more personalised experience and additional guidance.',
          },
          {
            label: 'Key insights',
            content: `
              <p>Before looking into the research impact on our roadmaps and the potential business growth value, here are some key findings:</p>
              <p><strong>Common Goals:</strong> Streamers, podcasters, and webinar hosts often share similar goals and metrics for success, and the line between streaming, podcasting and webinars can be a little blurry. People might create any combination of those while leaning in one of them more heavily.</p>
              <p><strong>Content Gaps:</strong> We identified informational gaps on our landing and pricing pages, particularly regarding the benefits and features tailored to podcasters and webinar hosts.</p>
              <p><strong>Studio Challenges:</strong> Challenges in the studio were mostly related to the initial setup actions, like “add to the stage” and layout adjustments to properly apply branding features.</p>
              <p><strong>User Proficiency Differences:</strong> The more tech-savvy people successfully discover SY features while the not-as-tech-savvy users required additional guidance and support.</p>
              <p><strong>Targeted Communication:</strong> While our communication effectively resonated with streamers, podcasters and webinar hosts need more tailored information. For instance, podcasters were surprised by the extensive customization options available during recording sessions, suggesting a need for more targeted educational content about these features.</p>
              <p><strong>Enhanced Features for Podcasters:</strong> Podcasters are particularly interested in advanced editing tools such as audio enhancement and video quality improvements, like colour correction and adding graphics, images or clips over their recordings. They could also benefit from more audio-related features like sound effects.</p>
              <p><strong>Webinar Hosts’ Navigation Struggles:</strong> Webinar hosts frequently needed help finding relevant to their use case features on our landing and pricing pages, often resorting to extensive FAQ searches.</p>
            `,
          },
          {
            label: 'Communication',
            content:
              'I organised the insights in a Notion document and shared them with the wider company. I also created individual Slack posts, presenting findings and linking them to the relevant product teams. I presented key insights at our All-Hands meeting and our company’s annual Strategy and Product Vision Day.',
            image: '18.png',
          },
          {
            label: 'Impact',
            content: `
              <p>This research boosted our understanding of new users, guiding business decisions around feature optimisation and onboarding prioritisation to improve their overall experience. The immediate outcomes included:</p>
              <p><strong>Over seven feature ideas</strong> were generated for the Editor, On-Air, and Studio teams.</p>
              <p><strong>Over twelve growth experiments</strong> and several product optimisations were initiated.</p>
              <p><strong>Two new focus areas were added to our 2024 Product Strategy</strong></p>
              <ul>
                <li>Expand and optimise features specifically for podcasters and webinar hosts.</li>
                <li>Prioritise experiments around onboarding, pricing, and retention.</li>
              </ul>
              <p>It also sparked team discussions and was used as inspirational material, along with other types of research, on our off-site Growth team retreat, where we workshopped and brainstormed even more growth experiment ideas.</p>
            `,
            image: '16.png',
          },
          {
            content:
              'In the document below you can read more about the StreamYard Onboarding System Project and some of the A/B test and optimisation ideas inspired by this research.',
            image: '11.png',
          },
        ],
      },
      {
        title: 'Studio<br />Onboarding audit',
        prebordered: true,
        entries: [
          {
            title:
              'Before implementing new onboarding features, it was crucial to assess our current onboarding messages &ndash; analyse what messages were triggered when and identify any edge cases.',
          },
          {
            label: 'Understanding',
            content: `
              <p>An early UX audit conducted during the new user interviews had already flagged issues such as ineffective messaging, poor placement, lack of hierarchy, design inconsistencies or unnecessary tips.</p>
              <p>To delve deeper, I consulted with the Studio product team PM to obtain existing documentation on onboarding messaging. The goal was to refine these messages using insights from User Interviews and Fullstory observations while optimising the UI and applying design principles and best practices for more effective onboarding.</p>
            `,
          },
          {
            label: 'Audit',
            content:
              'Discovering that no comprehensive documentation existed and recognising the Studio team’s constraints due to their heavy workload, I discussed the matter with my PM. We decided to initiate a Studio messaging audit utilising our team’s resources. I led the effort, crafting a ticket based on my previous UX audit. Our engineers began to surface all Studio messages, documenting triggers and rules in a Notion document.',
          },
          {
            label: 'Tips guide',
            content:
              'Following the audit, I compiled a Studio Onboarding Recommendations document with targeted advice inspired by my research. This included proposals for copy and design improvements, eliminating redundant messaging, and optimising message hierarchy through new trigger rules. Additionally, I suggested several A/B tests to evaluate message positioning and try different UX & UI design treatments.',
            image: '14.png',
          },
          {
            label: 'Component',
            content:
              'Further enhancing the user experience, I designed a new messaging component scalable to different message needs. This component was consistent, refined, and integrated smoothly into the UI, supporting a more unified and readable interface that assists rather than distracts users. This component became a priority in the development of our Design System.',
            image: '15.png',
          },
          {
            label: 'Impact',
            content: `
              <p>With comprehensive documentation and actionable recommendations set up, we were equipped to prioritise our A/B testing and optimisation work. This groundwork of augmenting existing onboarding would lay the foundation for experimenting with various new onboarding methods.</p>
              <p>It would also serve as collaboration and communication document between the Growth and Studio product teams, to enhance transparency and alignment towards a common goal.</p>
            `,
          },
        ],
      },
      {
        title: 'Add to stage iteration',
        prebordered: true,
        entries: [
          {
            title:
              'New observations from the New User Interviews, equipped us with knowledge to re-iterate more effectively.',
          },
          {
            label: 'Context',
            content:
              'Our Amplitude data analysis identified the completion of the first broadcast as the most critical metric for customer activation and retention. Users who successfully navigate the studio to "Go Live" or "Record" are far more likely to stay engaged and become dedicated customers.',
          },
          {
            label: 'Problem',
            content: `
              <p>Fullstory sessions and new user interviews indicate a common hurdle: new users often don’t realise they must actively add themselves to the stage*, unlike platforms like Zoom or Google Meets, where users are added automatically. This step is pivotal for users to make the most out of features like brand customisation and layouts and to receive value from StreamYard.</p>
              <p>*A place within the studio where all live participants are visible to the audience.</p>
              <p>Although we previously introduced a design tweak to make the “Add to stage” tip more noticeable through enhanced colour and animation, the change did not significantly increase user interaction as hoped, with many still overlooking this crucial step.</p>
            `,
            image: '2.png',
          },
          {
            label: 'Hypothesis',
            content:
              'Our hypothesis was the onboarding message still needed to be more prominent to prompt the necessary action. A more forceful intervention might increase the likelihood of users adding themselves to the stage, educating them and boosting engagement metrics.',
          },
          {
            label: 'New design',
            content:
              'Inspired by the guided tour onboarding method, we tested a more assertive approach: dimming the rest of the Studio UI to spotlight the “Add to stage” action and message. Users would need to either complete the action or dismiss the message. Additionally, we made the "Add to Stage" call-to-action permanently visible, rather than only appearing on hover.',
            image: '1.png',
          },
          {
            label: 'Results',
            content:
              'This new approach led to an 11% increase in users adding themselves to the stage and a 9% rise in broadcasts started. Although these improvements did not yet translate into more paid plan upgrades, they marked a positive shift in new user behaviour. Observations from Fullstory and Amplitude data following the feature implementation show that the new design better educates users enhancing their experience. Further optimisations might be necessary to encourage upgrades.',
            image: '3.png',
          },
        ],
      },
      {
        title: 'Contextual onboarding',
        prebordered: true,
        entries: [
          {
            title:
              '&ndash; Create a  tailored first-user experience with targeted use case-based onboarding messaging.',
          },
          {
            label: 'Problem',
            content: `
              <p>Initially designed for streamers, StreamYard has evolved to support recording and webinars in addition to streaming. This change isn’t reflected in the product’s current design leading to a disconnect with user expectations, needs and the product's capabilities.</p>
              <p>Introducing new features has enriched but unintentionally complicated the product, making it harder for new users to discover and fully utilise all its functionalities.</p>
            `,
          },
          {
            label: 'Opportunity',
            content: `
              <p>We’ve recently rolled out a revamped Dashboard landing page, designed to suit various use cases, as discussed in <a href="/work/zLI1">Part 1</a> of this case study. This updated landing page is all about presenting users with key actions, offering flexibility to engage in activities that are relevant to them.</p>
              <p>Additionally, by implementing the onboarding question, we’ve started segmenting users based on their use case. This approach allows us to provide a more personalised onboarding experience, offering users tailored support and guidance every step of the way.</p>
            `,
            image: '13.png',
          },
          {
            label: 'Design pattern',
            content:
              'Contextual messages are a well-established onboarding method which could be applied in the StreamYard Dashboard to guide users. The messages would prompt action, deliver tips, provide feedback and encourage people to explore and create.',
          },
          {
            label: 'Design goals',
            content: `
              <p>Before designing, I set some goals/guidelines to guide me through the upcoming design decisions.</p>
              <p><strong>Useful:</strong> Provide relevant information at the right time to enhance user understanding and efficiency.</p>
              <p><strong>Approachable:</strong> Ensure readability, friendliness, and accessibility to encourage user engagement.</p>
              <p><strong>Delightful:</strong> Create a positive, enjoyable user experience through interesting and cheerful messaging.</p>
              <p><strong>Consistent:</strong> Maintain alignment with StreamYard’s design & tone of voice to reinforce brand identity.</p>
              <p><strong>Future-proof:</strong> Set the foundations for an easy to maintain and expand system.</p>
            `,
          },
          {
            label: 'Copywriting',
            content:
              'To reach my design goals I liaised with my PM. Together we identified key paths for each user journey &ndash; live stream, record, host webinars &ndash; to develop conditional messages tailored to educate and guide users depending on their goals. I created an Onboarding Messaging Flow Chart in FigJam, including all the relevant key user actions and we collaborated to create a consistent tone of voice to deliver clear, positive and concise guidance or feedback at different stages of the onboarding journey.',
            image: '12.png',
          },
          {
            label: 'Design',
            content:
              'To deliver a delightful positive experience, I initially explored incorporating Puddles, our duck mascot, as a guiding companion figure within the onboarding messages. However, after discussions with the design team and considering the evolving brand direction, we opted for the newly introduced illustration style that better aligned with the product’s new visual identity.',
            image: '4.png',
          },
          {
            content:
              'Drawing inspiration from the existing new product illustrations, I crafted a suite of lively icons to accompany the messages, maintaining consistency with the brand identity. I iterated, tried different banner styles and shared them with the design team to get the final design approval.',
            image: '5.png',
          },
          {
            label: 'Impact',
            content:
              'While implementing the contextual onboarding messages is pending, our design direction has set the stage for future projects across the platform, like the referrals program. Establishing a cohesive and visually engaging approach to user onboarding, we anticipate enhanced user satisfaction, engagement and success.',
          },
        ],
      },
      {
        title: 'Home landing page<br />A/B/C tests',
        prebordered: true,
        entries: [
          { title: '&ndash; Optimise the user journey/s & create foundations for a tailored experience.' },
          {
            label: 'Problem',
            content: `
              <p>Like the StreamYard dashboard, our landing pages lacked optimisation for recording and webinar use cases, presenting a significant opportunity to position StreamYard as the go-to platform for diverse video content creation needs.</p>
              <p>Despite recent enhancements to the below-the-fold content on the SY homepage, which aimed to showcase recordings and webinars better, these changes only benefited a small fraction of visitors due to low scroll engagement.</p>
            `,
            image: 'animation-1.gif',
          },
          {
            content:
              'New user interviews revealed that while visitors grasp the concept of multi-streaming from the homepage video, they tend not to scroll far, failing to recognise recordings and webinars as viable use cases for StreamYard.',
          },
          {
            label: 'Collaboration',
            content: `
              <p>So, I took the lead in partnering with the Marketing team to revamp our over-the-fold homepage content. They had some initial ideas and content ready to roll, but I urged them to take a step back, facilitating discussions and guiding them through the design thinking process. To help the team gain a deeper user understanding, I created a FigJam board curating a wealth of research insights and homepage examples. We also invited an expert, to share tips and tricks for effective landing pages. This session wasn’t as helpful as hoped, but it helped us organise our thoughts.</p>
              <p>I ensured that the FigJam discovery board included as many relevant insights as possible:</p>
              <ul>
                <li>Findings from our latest customer satisfaction surveys around the SY benefits & perceived value.</li>
                <li>Insights from new user interviews and their understanding of the SY benefits & value.</li>
                <li>Landing page best practices and expert advice.</li>
                <li>Competitor and other multi use case SaaS landing page examples.</li>
              </ul>
            `,
            image: '6.png',
          },
          {
            content:
              'Armed with these insights, I was eager to explore two distinct approaches, and the Marketing team was fully on board with the approach of A/B/C testing.',
          },
          {
            label: 'Hypothesis',
            content:
              'The current over-the-fold video although effective in communicating streaming and multi-streaming, can be hard to accommodate two more new use cases while staying concise and attention-grabbing. A new design approach, focusing on individual use cases with concise and engaging content, may better capture visitor attention and drive sign-ups.',
            image: '8.png',
          },
          {
            label: 'Final design',
            content: `
              <p>After different explorations and discussions around copy direction with my PM, layout and UI reviews with the Marketing team and storyboard creation and reviews with our video expert, we landed on the two final designs.</p>
              <p>A revamped video highlighting recordings and webinars, complemented by three prominent cards (“Live Stream”, “Record”, and “Host Webinars”) for easy navigation to relevant pages.</p>
            `,
            image: '10.png',
          },
          {
            content:
              'A static carousel featuring the same three cards (“Live Stream”, “Record”, and “Host Webinars”), each slide highlighting the key features and benefits of each use case with cool graphics.',
            image: '9.png',
          },
          {
            label: 'Impact',
            content:
              'While the A/B/C home landing page test is pending, this project has already enhanced collaboration with the Marketing team, fostering a user-centric approach to content creation focused on value and benefits instead of just features. Furthermore, it has underscored the importance of early design involvement in discussions and a more iterative approach to understanding what works for our customers.',
          },
        ],
      },
    ],
  },
  Uzer: {
    id: 'Uzer',
    title: 'StreamYard - Checkout redesign',
    pageTitle: 'Checkout redesign',
    img: 'cover.png',
    sections: [
      {
        title: 'Introduction',
        entries: [
          { title: 'Optimising payments and driving growth through better faster checkout.' },
          {
            content: `
              <p>In this case study, I will go through the billing and checkout new features and optimisations to show how design can impact growth.</p>
              <p>StreamYard is a professional live streaming and recording browser based studio. With SY you can record, go live on your website or multiple platforms like Youtube and Facebook at once.</p>
            `,
          },
          {
            label: 'The product',
            content: 'Product Design Lead  &bull;  Designer',
          },
          {
            label: 'My role',
            content: 'November &ndash; December 2023.',
          },
        ],
      },
      {
        title: 'Background',
        prebordered: true,
        entries: [
          {
            title:
              'One of the Growth team focus is to upgrade customers to paid users. So far, experimenting  around our checkout flow was an untapped opportunity.',
          },
          {
            label: 'Opportunity',
            content:
              'Upgrading to a StreamYard paid plan typically involves entering card details manually, a tedious and fallible process. Most SaaS products offer quick payment methods that can make checkout an effortless experience, leaving no space for errors or reconsideration. Our users often ask for easier payment options like PayPal, highlighting a clear opportunity to streamline checkout and boost conversions.',
          },
          {
            label: 'Limitations',
            content:
              'While PayPal wasn’t on the table due to cost concerns, we saw potential in Google and Apple Pay as alternatives worth exploring.',
          },
          {
            label: 'Design audit',
            content: `
              <p>Taking a closer look at our checkout flow, revealed additional opportunities and improvement areas:</p>
              <ul>
                <li>Simplistic and not refined design could undermine trust.</li>
                <li>Confusing plan descriptions and less clear payment details, especially for less common payment scenarios could confuse.</li>
                <li>Limited scalability made accommodating new payment methods challenging.</li>
              </ul>
            `,
          },
          {
            label: 'Hypothesis',
            content:
              'Redesigning the checkout page to look more refined with better hierarchy and transparent copy will increase trust and conversions. It would also lay the groundwork for introducing alternative payment methods, driving even more growth.',
          },
          {
            label: 'The plan',
            content: `
              <p>My PM was on board with revamping the whole experience to optimise checkout and better accommodate alternative payment methods.</p>
              <p>Taking the project to the engineering team, we’ve decided to split the project into three tickets:</p>
              <ol>
                <li>Redesign the billing page UI, incorporating a payment method selection option and refining plan-related messaging.</li>
                <li>Revamp the checkout page to improve clarity, hierarchy, and focus, catering to various payment scenarios.</li>
                <li>Implement a scalable design to support alternative payment methods like Google Pay and Apple Pay.</li>
              </ol>
            `,
          },
        ],
      },
      {
        title: 'The design',
        prebordered: true,
        entries: [
          { title: 'Having a clear goal and plan, and the team onboard, I could explore different design solutions.' },
          {
            label: 'Billing page',
            content:
              'Before the billing page felt chaotic, with confusing copy and poor hierarchy, adding new payment methods would only exacerbate the issue. We also saw an opportunity to communicate plan details and relevant information better.',
            image: '1.png',
          },
          {
            content:
              'The new design focuses on creating a clear hierarchy and messaging. The content is organised into distinct cards with intuitive controls, to improve focus and scan-ability. Add-on options are now prominently displayed alongside subscription details, ensuring users have a comprehensive view of their plan. The billing settings were redesigned to accommodate alternative payment methods like Apple Pay and Google Pay for future updates.',
            image: '2.png',
          },
          { image: '8.png' },
          {
            content:
              'For this design, I introduced two new card components: one for plan subscription details and messaging, and another for billing settings and add-ons. These additions received positive feedback from the design team and have since been integrated into other product areas.',
          },
          {
            label: 'Checkout page',
            content:
              'Previously, the checkout page lacked focus, hierarchy, and clarity, especially when it came to different payment scenarios and edge cases. An audit with the engineering team revealed problems in communicating billing details, such as previous plan credits, discounts, and annual plan benefits.',
            image: '3.png',
          },
          {
            content:
              'The redesigned checkout page, brings the payment UI to the forefront, improving focus and readability. Unnecessary copy is removed, and a stronger hierarchy is introduced through refined typography and layout. Specifically, the payment method section is clearly defined as this is where user interaction is most critical. A revamped toggle button better highlights the annual discount benefit, while discounts and offers are clearly presented below, ensuring users understand exactly what they’re paying for.',
            image: '4.png',
          },
          { image: '7.png' },
          {
            label: 'Design impact',
            content: `
              <p>This was expected but unexpected!</p>
              <p>On paper, all of these design changes, based on UI/UX best practices & design principles, should contribute to improved conversion, but in the world of product design, we hardly ever measure them to obtain that data proof. But in our case we did, and this change alone has increased our checkout conversion by over 5%!</p>
            `,
          },
          {
            label: 'Payment methods',
            content:
              'After this successful change, we could now introduce the Apple and Google Pay options. If a user is eligible, these options will be displayed on the page, and upon selection the CTA will be updated accordingly. Clicking “Buy with A/G Pay” will initiate a seamless payment process handled entirely by Google or Apple.',
            image: '6.png',
          },
          { image: '5.png' },
          {
            content:
              'While the impact of these new options is still being assessed, the redesigned checkout lays the groundwork for future experimentation with alternative payment methods.',
          },
        ],
      },
    ],
  },
  WHR4: {
    id: 'WHR4',
    title: 'StreamYard App - Guest experience',
    pageTitle: 'Mobile Guest app',
    img: 'cover.png',
    sections: [
      {
        title: 'Introduction',
        entries: [
          {
            title: 'Optimising the StreamYard guest experience on iOS through the development of a mobile application ',
          },
          {
            content: 'In this case study, I will go through how I designed the StreamYard guest mobile app experience.',
          },
          {
            label: 'The product',
            content:
              'StreamYard is a user-friendly, browser-based professional studio tailored for live video content creation. With StreamYard you can also record and host webinars but live streaming is the primary SY use case. You can also present, play videos or invite guest to join you on stage.',
          },
          {
            label: 'My role',
            content: 'Product Design Lead  &bull;  Designer',
          },
        ],
      },
      {
        title: 'Background',
        prebordered: true,
        entries: [
          {
            label: 'Background',
            content: `
              <p>While StreamYard enables hosts to go live and invite guests from anywhere, a significant portion of the hosts (people who create and run the show with SY), predominantly use desktops. However, there’s a growing trend of mobile usage among guests, particularly on iPhones with Safari as their primary browser. Unfortunately, Safari’s poor reliability and stability pose challenges for the StreamYard platform, limiting its accessibility for mobile users.</p>
              <p>With the emergence of new content formats, like shorts and reels, and the increasing demand for a more seamless integration with platforms like Facebook, YouTube, and potentially Instagram, there’s a pressing need to accommodate mobile users better.</p>
            `,
          },
          {
            label: 'The plan',
            content:
              'To tackle these challenges and capitalise on the mobile space opportunities, we decided to develop the StreamYard mobile app. Our initial focus was on iOS, particularly in the Guest experience, with potential expansion to the Host experience, or even an Android version down the line.  With that, our primary objective was to address the core use case of a guest joining a live stream and resolving issues related to Safari’s limitations while laying the groundwork for a comprehensive mobile experience to test and build upon to ensure a smoother rollout process.',
          },
          {
            label: 'The team',
            content:
              'A new squad was created with people from different SY teams. Having previous mobile experience, I was picked to initiate the project, before we invested in getting a dedicated designer for this mobile App project.',
          },
          {
            label: 'Collaboration &amp; Research',
            content: `
              <p>For this project, I collaborated closely with the studio team PM to gain a deeper understanding of the mobile challenges associated with our browser-based platform. I also engaged with the studio designers at various stages of the design process to gather information and feedback on specific design nuances.</p>
              <p>With the assistance of our data analyst, I reviewed over 50 mobile user accounts to observe their shows and gain insights into their use cases and guest experiences. Additionally, I watched numerous Fullstory mobile sessions to identify general interaction patterns and challenges. While these sessions primarily focused on hosts, many of the insights were relevant to improving the guest experience as well.</p>
            `,
          },
          {
            label: 'Design goals',
            content: `
              <p>Drawing insights from watching user interactions via Fullstory and looking at mobile-relevant support tickets, I’ve identified some key areas for improvement in the mobile user experience beyond addressing the Safari Browser’s limitations:</p>
              <ol>
                <li><strong>Enhance Usability:</strong> Improve the existing browser-based mobile experience to deliver a more intuitive and seamless experience for iOS users.</li>
                <li><strong>Dark Mode:</strong> Respond to user feedback by implementing dark mode to cater to user preferences, decrease glare and improve comfort, especially in low-light environments.</li>
                <li><strong>Innovation in Video Creation:</strong> Use the re-design to innovate within the video content creation space, leveraging the mobile platform capabilities to enhance the creative process and experience.</li>
              </ol>
            `,
          },
        ],
      },
      {
        title: 'Join a studio',
        prebordered: true,
        entries: [
          {
            title:
              'Having a clear plan and design goals, I could explore different design solutions tailored to the iOS environment. I also worked with our existing design system to introduce a new accessible dark more colour palette.',
          },
          {
            label: 'Join studio',
            content:
              'I aimed to ensure a seamless experience for guests when joining a show, requiring just a few simple clicks. I introduced a subtle wave dynamic animation to elevate the "join a studio" screen. Guests can effortlessly paste a guest link into the provided field, automatically granting them entry to the studio. For the returning guests, selecting previously joined shows was made convenient with just a click within the field.',
            image: '4.png',
          },
          { image: '5.png' },
          {
            label: 'Loading screen',
            content:
              'As guests join the studio, there’s usually a 2-4 sec delay. To add a touch of delight, I crafted an animation featuring Puddles, our duck mascot, to welcome guests as they enter the studio and make the waiting a bit less annoying. Initially conceptualised in Figma and later brought to life with the help of a colleague in After Effects, the animation showcased Puddles following a loader with its eyes, ending with a friendly blink. Although the team embraced this approach, a change in brand direction led to the animation being replaced with a static illustration.',
            image: 'animation-8.gif',
          },
          {
            label: 'Permissions',
            content:
              'First-time users of the SY guest mobile app are prompted to grant some permissions for camera, audio, and notifications.',
            image: '7.png',
          },
        ],
      },
      {
        title: 'Enter studio',
        prebordered: true,
        entries: [
          {
            title:
              'Even before entering the studio, I could spot several opportunities to mobile tailor the StreamYard experience.',
          },
          {
            label: 'Key challenges',
            content:
              'Upon entering the studio, guests are provided the opportunity to check their audio and camera settings. Previously, the screen layout closely resembled the desktop view, resulting in several mobile interaction challenges.',
            image: '12.png',
          },
          {
            content: `
              <ol>
                <li>The horizontal camera preview area could have utilised the vertical space more effectively, for a more visible, clearer view.</li>
                <li>Key user controls were positioned too high on the screen, making them difficult to reach with a thumb.</li>
                <li>The display name field wasn’t easily accessible.</li>
                <li>The navigation controls were placed at the top of the screen, presenting accessibility issues.</li>
                <li>The settings and relevant controls were also placed at the top of the screen.</li>
                <li>The camera options dropdown wasn’t aligned with mobile platform conventions, hindering a seamless experience.</li>
                <li>Furthermore, according to my research with existing mobile users, a common scenario for mobile guests was to join with their cameras turned off. This resulted in a generic avatar being assigned. On the browser experience, the guests have to enter the studio and only then have the option to edit their avatar to something more personalised.</li>
              </ol>
            `,
          },
          {
            label: 'Solutions',
            content: `
              <p>To address these issues, I revamped the layout to prioritise a clear camera preview and relocated controls to the bottom of the screen for easier access. A minimalist set of icons simplified the UI, while the display name field was repositioned for improved usability.</p>
              <p>Introducing a drawer UI pattern housed the settings options, ensuring easy access at the bottom of the screen.</p>
            `,
            image: '13.png',
          },
          {
            content: `
              <p>Changing the phone camera was simplified by introducing a switch camera icon on the camera view, similar to smartphone camera functionality.</p>
              <p>Audio settings were tailored for mobile experiences, featuring user-friendly toggle controls for the advanced audio settings.</p>
              <p>Finally, by optimising the UI, I created space to introduce the option for users to edit their audio avatar seamlessly using native iOS features to upload or take a photo effortlessly.</p>
            `,
          },
        ],
      },
      {
        title: 'The studio',
        prebordered: true,
        entries: [
          {
            title:
              'The studio was the perfect space to optimise and innovate. My PM was keen for me to explore new solutions.',
          },
          {
            label: 'Key challenges',
            content: 'The mobile view of the studio posed several usability challenges.',
            image: '15.png',
          },
          {
            content: `
              <ol>
                <li>The backstage guest view was small and displayed horizontally, which didn’t match the camera ratio, cutting off parts of the camera view. This left much vertical space unused, and the layout needed refinement.</li>
                <li>The user actions menu was cluttered with a poor hierarchy, making navigation difficult.</li>
                <li>The comments view was hidden under the chat menu item, which included both the private chat and public comments.</li>
                <li>The settings menu, and the private chat and comments, expanded to cover the entire screen, obscuring the stage show view.</li>
                <li>The navigation controls were placed at the top of the screen, making them hard to reach.</li>
                <li>The camera & audio settings, and chat and comments tabs were also placed at the top of the screen.</li>
                <li>Many mobile-based shows take place outdoors, where guests and hosts might want to showcase their surroundings. Accessing the camera settings needed to be more accessible than through the settings.</li>
              </ol>
            `,
          },
          {
            label: 'Solutions',
            content:
              'The first issue I addressed was simplifying the actions menu. While being live, a guest should be able to easily focus and access controls, settings, and studio features. Establishing a clear information hierarchy was crucial, so I experimented with various approaches to find a structure that was intuitive and accessible.',
            image: '3.png',
          },
          { image: '17.png' },
          {
            content: `
              <p>I divided the navigation into two main parts: video and audio controls/settings, and show-related actions such as chatting, comments, and recordings (to be added later).</p>
              <ol>
                <li>Video and Audio Controls: These are made the most accessible to ensure minimal hand movement during live streaming, preventing camera blockage or phone shaking.</li>
                <li>Show-Related Actions: These are placed just below the stage, functioning as tabs or via sliding, fully utilising the space without disrupting the screen view.</li>
              </ol>
              <p>Settings are also easily accessible using the same drawer pattern introduced upon entering the studio.</p>
            `,
            image: '14.png',
          },
          {
            content:
              'Lastly, the stage tab was improved so the guests have a larger vertical view of their camera and a clear in-sight line height view of their backstage status. A switch icon on their camera view allows easy switching between the front and rear phone cameras.',
          },
          {
            label: 'Opportunities',
            content:
              'Analysing the stage display on a mobile screen revealed opportunities to address broader issues. The stage is where the show takes place, and where the host’s banners and audience comments are displayed. On a mobile device, these appear very small and are hard to read. Since comments are often directed at the guest, guests should be able to read them without straining or moving their devices closer to their faces.',
            image: '1.png',
          },
          {
            content:
              'Even after redesigning the stage tab to include a larger guest view, there was still space to utilise. I proposed adding a dedicated slot for comments and banners, displaying them larger and at eye level for easy readability.',
            image: '18.png',
          },
          {
            content:
              'Another opportunity was improving guests’ awareness of when they would join the host on stage. Previously, guests had to stay alert to the chat or other show cues to know when they would be joining. I explored adding a countdown along with a sound effect to visually and audibly inform and prepare guests before joining the stage, giving them a few seconds to get ready. Unfortunately, this feature was deprioritised for the MVP but remains a future enhancement goal.',
            image: '2.png',
          },
        ],
      },
      {
        title: 'More features',
        prebordered: true,
        entries: [
          {
            title:
              'There were a few more features we could integrate into the MVP  App that could significantly improve the guest experience.',
          },
          {
            label: 'Starred comments',
            content:
              'Comments are a crucial feature of the app, often coming in from various platforms like Facebook and YouTube. In popular shows, handling comments can be overwhelming. Monitoring, pinning, or answering comments is typically the host’s responsibility. We recently introduced a "star comments" feature, allowing hosts to shortlist comments to address or pin later. These starred comments are often relevant to guests as well.',
            image: '16.png',
          },
          {
            content:
              'Previously, guests had to sift through numerous comments to find those relevant to them. The app provided the perfect opportunity to introduce this new feature, making starred comments visible to guests for better communication. With just one click, guests can filter the comments to see only the starred ones that might need their attention.',
          },
          {
            label: 'Local recordings',
            content:
              'Another new studio feature was local recordings which allows the host to activate device recording, ensuring a flawless result even with a weak connection. Each guest records their feed locally and uploads it to the SY cloud. It was crucial to include this feature in the MVP guest app.',
            image: '11.png',
          },
          { image: '9.png' },
          {
            content:
              'When local recordings are activated, the guest is notified, and a new tab appears in their studio interface. This tab allows them to monitor the progress of their local recording upload. To ensure the recording uploads completely, the app must remain open. Collaborating with the studio design team, I designed a series of messages, notifications, and error states to communicate progress inside and outside the app.',
            image: '10.png',
          },
        ],
      },
      {
        title: 'Impact',
        prebordered: true,
        entries: [
          {
            title: 'The Guest App is currently on the iOS app store and has received some positive reviews.',
            content: `
              <p>From November 2023, when it was first released, to May 2024, the StreamYard Guest App was downloaded over 30k times! It has a rate of 4.6 stars across all app stores, and about 45% of regular mobile guests exclusively use the app to join studios.
              <p>The app has been live for less than six months, and the initial feedback highlights the need for a more tailored mobile experience for StreamYard users, both guests and hosts, especially with the introduction of Instagram as a destination for live streaming.</p>
              <p>The guest app and the design patterns I introduced laid the groundwork for developing the host app. We have since hired a dedicated mobile designer to advance this project further.</p>
            `,
          },
        ],
      },
    ],
  },
  Vm6M: {
    id: 'Vm6M',
    title: 'Experian App - Marketplace search',
    pageTitle: 'Search in the app',
    img: 'cover.png',
    sections: [
      {
        title: 'Introduction',
        entries: [
          {
            title:
              'Introducing Marketplace within the Experian Mobile app. Optimising and enhancing credit cards and loans search.',
          },
          {
            label: 'The product',
            content: `
              <p>In this case study, I will go through how I designed the Experian credit cards and loans search flow.</p>
              <p>Experian is a leading fintech company, ranked as the 6th largest global provider of technology solutions for the financial services industry. It specialises in helping individuals save money, access credit, and protect their identities through advanced data analytics and platforms. Experian offers a range of financial products, including credit score checks, credit cards, loans, and mortgages. The segment providing these financial products is known as Marketplace.</p>
            `,
          },
          {
            label: 'My role',
            content: `<p>Product Design Lead &bull; Designer &bull; <em>(This project took place in 2019-20)</em></p>`,
          },
        ],
      },
      {
        title: 'Background',
        entries: [
          {
            label: 'Project overview',
            content: `
              <p>Objective: Design the Marketplace experience within Experian’s newly developed mobile app. This involved:</p>
              <ol>
                <li>Adding a Marketplace section to the app’s home page.</li>
                <li>Optimizing the offers page.</li>
                <li>Enhancing the search flow for credit cards.</li>
                <li>Streamlining the search flow for loans.</li>
              </ol>
            `,
          },
          {
            label: 'Design goals',
            content: `
              <p><strong>Prominence:</strong> Ensure Marketplace, Experian’s most profitable consumer product, is easily accessible and highly visible.</p>
              <p><strong>Usability:</strong> Create an intuitive, mobile-friendly experience to boost product engagement.</p>
              <p><strong>Aesthetics:</strong> Refresh and modernise the design while adhering to Experian’s brand guidelines.</p>
              <p><strong>Efficiency:</strong> Develop a smooth, frictionless flow to deliver personalised product results.</p>
              <p><strong>Convenience:</strong> Enable seamless repeated searches with saved sessions and direct access to results.</p>
            `,
          },
          {
            label: 'Process',
            content: `
              <p>I collaborated closely with the Marketplace Product Manager and Design Lead to:</p>
              <ul>
                <li>Identify requirements and analyse mobile data.</li>
                <li>Conduct usability testing to inform design decisions.</li>
                <li>Address specific challenges uncovered during the discovery phase.</li>
              </ul>
            `,
          },
          {
            label: 'The problems',
            content: `
              <ul>
                <li>The app lacked search functionality for credit cards and loans, resulting in low user engagement.</li>
                <li>The existing search process was cumbersome, with unclear steps.</li>
                <li>We were requesting information that users had already provided.</li>
                <li>Users were required to type answers unnecessarily.</li>
                <li>The interface relied heavily on dropdown menus, requiring numerous clicks.</li>
                <li>Personal questions were asked without explanation, leading to high user drop-off.</li>
              </ul>
            `,
          },
          {
            label: 'Optimisation goals',
            content: `
              <ul>
                <li>Modernise, simplify and lighten the user interface to reduce visual clutter.</li>
                <li>Use concise, easy-to-understand language, especially for non-native speakers.</li>
                <li>Employ visual cues like placeholders and format hints for inputs (e.g. currency symbols).</li>
                <li>Use icons to represent different sections and options, enhancing engagement.</li>
                <li>Provide immediate validation and feedback to guide users through the process.</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Landing pages',
        entries: [
          {
            title:
              'Having a clear list of problems and goals would help me tackle different areas of the mobile app Marketplace experience. Additional research and usability testing will help me refine my design to optimise the experience.',
          },
          {
            label: 'The app landing page',
            content: `
              <p>The original idea was to introduce a slider UI pattern for selecting credit limits and loan amounts to better promote credit cards and loans and engage people guiding them into the search flow.</p>
              <p>However, due to space constraints and the need to share the page with other products, I had to compromise and simplified the design to include two buttons: “Credit Cards” and “Loans” for direct access to search flows.</p>
            `,
            image: '1.png',
          },
          {
            label: 'Offers landing page',
            content: `
              <p>This page includes all the financial products you can access through Experian. It was quickly built to provide different search flow links like credit cards, loans, mortgages and car finance. With this project, we would make credit cards and loan searches available within the app.</p>
              <p>This was a good opportunity to also improve visual design, hierarchy, and indicate when external links are accessed. I took this chance to also introduce a new icon for car finance, despite it being outside the project’s scope.</p>
            `,
            image: '2.png',
          },
        ],
      },
      {
        title: 'Search forms',
        entries: [
          {
            title:
              'To create an intuitive and less overwhelming search experience for credit cards and loans, I focused on the following key areas.',
          },
          {
            label: 'Layout',
            content:
              'I discovered that our questions could be divided into three main types, product-related (credit cards/loans), personal details, and lender-required information. This categorisation helped in structuring the form more logically.',
            image: '3.png',
          },
          {
            content:
              'I explored various methods to convey progress to users, such as percentage-based progress bars and clear step indicators.',
          },
          { title: 'I came up with two different approaches to usability test:' },
          {
            label: 'Usability testing',
            content:
              '<p><strong>Linear Progress Bar Approach:</strong> This design used a step-by-step, percentage-based progress indicator. Each question appeared sequentially, providing users with a sense of gradual completion.</p>',
            image: '4.png',
          },
          {
            content: `
              <p>Three-Step Approach: This method combined the categorised questions into three clear steps:</p>
              <ol>
                <li>Credit Card or Loan-related questions were tagged with clear indicators.</li>
                <li>Personal details were grouped under a dedicated title, providing context for the type of information required.</li>
                <li>Additional lender-required questions were displayed with progressive disclosure, meaning that depending on previous answers, further details might be requested.</li>
              </ol>
            `,
            image: '5.png',
          },
          {
            label: 'Prototype',
            content:
              'I then developed two prototypes reflecting the different design approaches. These prototypes were tested with 20 users to gather feedback on interaction ease, error rates, and overall satisfaction. I also created a document with a usability testing scenario and follow up questions on the relevant interactions to gather more specific insights.',
            image: '6.png',
          },
          {
            label: 'Results',
            content:
              'The three-step approach outperformed the linear progress bar, with users completing the forms almost twice as fast and making fewer errors. This approach also provided better transparency and context, helping users understand why specific questions were asked.',
          },
          {
            label: 'Refinement',
            content:
              'Based on testing feedback, I refined the three-step approach, ensuring clarity in navigation and accessibility to minimise user errors. Clear tags and titles were used to guide users, and a combination of progress bars and contextual prompts enhanced the overall user experience.',
            image: '7.png',
          },
        ],
      },
      {
        title: 'Content',
        entries: [
          {
            title:
              'Simplifying the content was crucial but it was also challenging due to regulatory requirements. Here’s how I approached it:',
          },
          {
            label: 'Simplification',
            content: `
              <p>I crafted several proposals aimed at reducing the complexity of the questions while complying with Financial Conduct Authority (FCA) guidelines. Each proposal was reviewed in meetings with the compliance team. From these meetings, I achieved:</p>
              <ol>
                <li>The elimination of a lender-required question about phone numbers, which was a major drop-off point for users.</li>
                <li>Leveraging existing user data to pre-fill form fields, significantly reducing the user effort. Users only needed to review and confirm pre-filled information, which streamlined the search flow.</li>
                <li>Revision of our micro-copy to be more accessible, especially for non-native English speakers. This included shortening questions and using plain language to improve comprehension.</li>
                <li>By reducing unnecessary text and providing concise, direct instructions, we decreased visual clutter and made the form more user-friendly and visually pleasing.</li>
              </ol>
            `,
            image: '8.png',
          },
          { image: '9.png' },
          {
            label: 'Interaction',
            content: `
              <p>To further improve interaction:</p>
              <ul>
                <li>I introduced placeholders and format hints, such as currency symbols for salary fields and input formats for content-specific fields, to guide users on what to enter.</li>
                <li>Used icons to represent different sections and answers, making the options more visually appealing and easier to understand.</li>
                <li>Reduced typing and clicking, by replacing dropdown menus with clearly visible button options. This change made selection faster and the interaction smoother.</li>
                <li>To enhance user interaction, I incorporated shadows, animations, and transitions that mimicked physical interactions. Completing a step was visually rewarding, with animated checks and colour changes signalling progress.</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Impact',
        entries: [
          {
            title:
              'The impact of this app design was massive! We not only saw people completing the search flows faster but we have reduced the drop-off rate.',
          },
          {
            label: 'Key metrics',
            content: `
              <p><strong>Improved Efficiency:</strong> Users completed search flows up to 2 minutes faster.</p>
              <p><strong>Reduced Error:</strong> Disabling progression buttons reduced errors due to missed questions.</p>
              <p><strong>Reduced Drop-Off:</strong> Drop-off rates decreased by over 60%.</p>
              <p><strong>Increased Engagement:</strong> The app became stickier, with more users returning to search for financial products, leading to the introduction of new features like car finance searches.</p>
            `,
            image: '10.png',
          },
          { image: '11.png' },
        ],
      },
      {
        title: 'Car finance',
        entries: [
          {
            title:
              'Following the success of the credit card and loan features, we decided to extend the in-app experience to include car finance.',
          },
          {
            label: 'Collaboration',
            content:
              'This required introducing new questions specific to car finance applications, such as job title and industry. To streamline this process, I collaborated with the Dev team to implement an API that provides an existing list of job titles and industries. This feature allows users to start typing their job title or industry and select the appropriate option from a dropdown menu, significantly speeding up the form completion process.',
          },
          {
            label: 'Efficiency',
            content:
              'Additionally, for users who have previously searched with Experian, we pre-populated all common form fields. This meant that users only needed to review and confirm the information, making the application process quicker and more efficient.',
            image: '12.png',
          },
        ],
      },
    ],
  },
  vpnm: {
    id: 'vpnm',
    img: 'cover.png',
    title: 'Experian App - Marketplace products',
    pageTitle: 'Products in the app',
    sections: [
      {
        title: 'Introduction',
        entries: [
          {
            title:
              'Optimising Marketplace results pages for the web mobile experience, while adjusting them to introduce them to the Experian Mobile app experience.',
            content:
              'In this case study, I will go through how I redesigned and optimised the Experian results page for the web mobile experience and adjusted it for the mobile app to improve discoverability and conversion.',
          },
          {
            label: 'The product',
            content:
              'Experian is a leading fintech company, ranked as the 6th largest global provider of technology solutions for the financial services industry. It specialises in helping individuals save money, access credit, and protect their identities through advanced data analytics and platforms. Experian offers a range of financial products, including credit score checks, credit cards, loans, and mortgages. The segment providing these financial products is known as Marketplace.',
          },
          {
            label: 'My role',
            content: 'Lead product designer &bull; Researcher &bull; (This project took place in 2020)',
          },
        ],
      },
      {
        title: 'Background',
        prebordered: true,
        entries: [
          {
            label: 'Problem',
            content:
              'Adding new features to our loans and credit card products page resulted in a cluttered and overwhelming experience, particularly on mobile. This led to higher drop-off rates and significantly impacted conversions. Users, especially those with lower credit scores and less experience with financial products, struggled with the excessive information and lengthy scrolling required to compare options. This made the decision-making process time-consuming and frustrating.',
          },
          {
            label: 'Key questions',
            content:
              'How might we simplify the search and comparison process for all users, particularly those with fewer product options and less credit experience? How can we enhance their confidence and reduce the overwhelm associated with our product features?',
          },
        ],
      },
      {
        title: 'Discovery',
        prebordered: true,
        entries: [
          {
            title:
              'To tackle this challenge, I sought insights from various perspectives to ensure a comprehensive understanding of our users’ challenges and needs.',
          },
          {
            label: 'User research',
            content:
              'Collaborating with our research team, I conducted interviews with 10 users to explore how they search for and compare loans and credit cards. Key findings included:',
            image: '1.png',
          },
          {
            content: `
              <ul>
                <li>The application process, for credit cards or loans, typically spans a few days to a week, involving considerable comparison shopping.</li>
                <li>Users often discover products on Experian but complete purchases directly through lenders’ websites.</li>
                <li>Our comparison pages were criticised for containing too much irrelevant information.</li>
                <li>Users found some information unclear or difficult to understand.</li>
                <li>Critical decision factors included interest rates, promotional periods, balance transfer limits, brand awareness, product eligibility, and customer reviews.</li>
              </ul>
            `,
          },
          {
            label: 'Surveys',
            content: 'I analysed 1273 customer surveys to understand user experiences and potential improvements:',
            image: '2.png',
          },
          {
            content: `
              <ul>
                <li>Some users were unaware they could apply for products directly through Experian.</li>
                <li>Navigating and comparing products on mobile was a common difficulty.</li>
                <li>Many users felt overwhelmed by the sheer volume of displayed information.</li>
              </ul>
            `,
          },
          {
            label: 'Observations',
            content: 'Using SessionCam, I reviewed over 60 high-struggle sessions, identifying top issues such as:',
            image: '3.png',
          },
          {
            content: `
              <ul>
                <li>Extended time spent on pages.</li>
                <li>Excessive scrolling.</li>
                <li>High levels of touch/cursor movement.</li>
                <li>Multiple page revisits.</li>
              </ul>
            `,
          },
          {
            label: 'Competitor analysis',
            content:
              'I examined six competitors to draw inspiration and identify limitations and common practices within our regulated space. I found:',
            image: '4.png',
          },
          { image: '5.png' },
          {
            content: `
              <ul>
                <li>Clearer calls to action for product applications.</li>
                <li>More concise compliance copy.</li>
                <li>More compact result tables.</li>
                <li>Reduced information overload and fewer interactive elements.</li>
              </ul>
            `,
          },
          {
            label: 'Assumptions',
            content:
              'Focusing on our current design and its mobile experience, I identified two key assumptions for further exploration:',
            image: '6.png',
          },
          {
            content: `
              <ul>
                <li>The proximity of the “View & Apply” button to adjacent products might lead to incorrect product selections.</li>
                <li>Extensive scrolling could hinder users’ ability to compare and choose the right product.</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Design plan',
        prebordered: true,
        entries: [
          {
            title: 'Triangulating these insights allowed me to set clear design goals and develop an actionable plan.',
          },
          {
            label: 'Goals',
            content: `
              <p>Our objectives were to:</p>
              <ul>
                <li>Provide an effortless experience for users searching for credit cards or loans.</li>
                <li>Ensure users feel well-informed and considered.</li>
                <li>Facilitate easy interaction and product comparison.</li>
                <li>Boost user confidence to apply for products through Experian.</li>
              </ul>
            `,
          },
          {
            label: 'Action plan',
            content: `
              <p>We needed to:</p>
              <ul>
                <li>Enhance navigation clarity and streamline product browsing.</li>
                <li>Simplify features and reduce visual clutter.</li>
                <li>Make additional information easily accessible to build trust and satisfaction.</li>
                <li>Minimise scrolling and optimise hierarchy to reduce errors.</li>
                <li>Improve hierarchy to encourage direct applications through Experian.</li>
              </ul>
            `,
          },
          {
            label: 'Considerations',
            content:
              'We should adhere to Experian’s design principles, branding, and product style guidelines. Aim for minimal development time and scalable solutions. Focus on maintaining a clear product hierarchy to prevent overwhelming our customers.',
          },
        ],
      },
      {
        title: 'Design',
        prebordered: true,
        entries: [
          {
            title:
              'Before diving into the design, I formulated three hypotheses to guide our changes and measure their impact incrementally:',
          },
          {
            label: 'Hypotheses',
            content: `
              <p>Reducing the size and visual noise of product tables will decrease scrolling and time on the page while boosting conversion.</p>
              <p>Reorganising and condensing product information will help users make quicker, more confident decisions.</p>
              <p>Elevating the “View &amp; Apply” button will enhance conversion rates and reduce selection errors.</p>
            `,
          },
          {
            label: 'Explorations',
            content:
              'I explored multiple design directions to address each UI, UX, and copy issues for both the web mobile view and mobile app. Successful designs were to be adjusted for both platforms.',
            image: '7.png',
          },
          {
            content:
              'For the mobile app specifically, I experimented with a minimal card design approach to fit as many products as possible on the screen. I also redesigned the result “More details” screen to accommodate and organise better all the product features.',
            image: '8.png',
          },
          {
            content:
              'Unfortunately, our Compliance Team didn’t approve this redesign proposal. Displaying less information and hiding some product features under the “More details” was deemed risky.',
          },
          {
            label: 'Key optimisations',
            content:
              'After the initial exploration discussion and several iterations, I finalised a design for review with my PM and Compliance team. Key changes included:',
            image: '9.png',
          },
          {
            content: `
              <ol>
                <li>Remove the “Loan Type” link and highlighted it in the “More Details” overlay.</li>
                <li>Reduce the eligibility rating banner by optimising its copy.</li>
                <li>Combine the Real rates message with the Eligibility (chance of approval) message.</li>
                <li>Merge the rate information link & tooltip, as they were displaying similar information.</li>
                <li>Eliminate open table space when not in use on mobile.</li>
                <li>Move the “View & Apply” button higher within the product table.</li>
                <li>Simplify the representative example copy with shorter, simpler language.</li>
                <li>Remove the “Credit available subject to status” line.</li>
                <li>Display the “Experian Credit Broker, not a lender” message once on the page.</li>
                <li>Increase the spacing between different product results for clearer distinction.</li>
              </ol>
            `,
          },
          {
            label: 'Extended scope',
            content: 'I also proposed additional changes to enhance the overall search and comparison experience:',
            image: '10.png',
          },
          {
            content: `
              <ol>
                <li>Refine the filtering bar to take advantage of the full width of the screen.</li>
                <li>Align the “Edit this search” and “Sort by” horizontally in the utility belt.</li>
                <li>Remove the loan-type accordion and added a loan-type information link to the title.</li>
                <li>Reduce the product rating banner’s space.</li>
                <li>Rework the utility belt copy to improve clarity.</li>
              </ol>
            `,
          },
          {
            label: 'Design review',
            content: 'Feedback from stakeholders, compliance, and development led to some adjustments:',
            image: '11.png',
          },
          {
            content: `
              <ol>
                <li>We couldn’t change the “View & Apply” to “Apply now.”</li>
                <li>We couldn’t move the “Apply now” CTA above the Representative example.</li>
                <li>We couldn’t change the representative example copy.</li>
                <li>We couldn’t remove the “Credit subject to status”.</li>
              </ol>
          `,
          },
          {
            content:
              'Compliance initially rejected moving the representative example under the CTA due to visibility concerns. However, a design tweak to enhance its prominence secured their approval, allowing the “Apply now” action to be more visible within the product card.',
          },
        ],
      },
      {
        title: 'Impact',
        prebordered: true,
        entries: [
          {
            title:
              'We conducted an A/B test, releasing the redesigned page to 10% of users searching for credit cards and loans over two weeks. Key success metrics included leads, conversions, and time spent on the page.',
          },
          {
            label: 'A/B test results',
            content:
              'The redesign led to a 15% increase in “View & Apply” clicks and a reduction in average time spent on the results page from 3 min 25 sec to 2 min 45 sec. However, “More details” clicks decreased by 19%, and the overall conversion rate from the results page to unique leads dropped by 3.5%.',
          },
          {
            label: 'Follow up',
            content: `
              <p>The results where fewer people clicked on “More details” and more clicked on “View & Apply” but haven’t converted, suggested users might need clearer indications for the “More details” link and better alignment between CTA copy and their expectations.</p>
              <p>We hypothesised:</p>
              <ul>
                <li>Users might have overlooked the “More details” link, necessitating clearer interaction cues.</li>
                <li>Users might have expected more information on the “View & Apply” destination, indicating a need for CTA copy refinement.</li>
              </ul>
            `,
            image: '12.png',
          },
          {
            image: '13.png',
          },
          {
            content:
              'Looking at the test evidence the compliance team has accepted the CTA copy change and we managed to maintain the positive results while improving the unique leads metric.',
          },
          {
            label: 'App designs',
            content: `
              <p>The final design successfully balanced strict FCA compliance guidelines with an optimised mobile user experience.</p>
              <p>Upon approval of the mobile web experience designs, I adapted and refined them for integration into our mobile app. This adaptation process allowed me to further enhance the user interface's look and feel and ensure a seamless and engaging user experience across all platforms.</p>
            `,
            image: '14.png',
          },
        ],
      },
      {
        title: 'Other refinements',
        prebordered: true,
        entries: [
          { title: 'With the main problems solved I could now focus on some additional page refinements.' },
          {
            label: 'Loading times',
            content: `
              <p>Another significant challenge was the lengthy results page loading time, due to pulling data from multiple lenders’ APIs. Discussions with the development team confirmed that technical constraints limited our ability to shorten this loading period.</p>
              <p>To mitigate the impact of this delay and decrease page drop-off, I proposed introducing a new, engaging branded animation to enhance the waiting experience. I designed two versions of the animation: a more detailed one and a streamlined version.</p>
            `,
            image: ['animation_max.gif', 'animation_min.gif'],
          },
          {
            content:
              'These animations aimed to maintain user engagement during the loading process. Upon testing, we observed a substantial 7% reduction in page drop-off rates, a noteworthy improvement given our high traffic volumes. Based on these positive results, we decided to fully implement the more elaborate animation on the web platform and the minimal version on the mobile app, effectively enhancing user experience across both interfaces.',
          },
          {
            label: 'Product details',
            content:
              'Another area of improvement was the "More Details" information modals and pages. I identified the opportunity to enhance the user interface and streamline the information hierarchy, combining the eligibility details with the more details page.',
            image: '15.png',
          },
          {
            content:
              'The updated design focuses on clearly highlighting key features and presenting information in a more accessible, easy-to-digest format. This refined approach can help users find and compare essential details quickly and effortlessly, ultimately aiding them in making informed decisions and confidently purchasing the right products.',
          },
        ],
      },
    ],
  },
};

// “word” ’
