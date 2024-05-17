import { CaseStudy } from 'src/types';

export const CAST_STUDY_ORDER: CaseStudy['id'][] = ['zLI1', 'Dv5M', 'Uzer'];

export const CASE_STUDIES: Record<CaseStudy['id'], CaseStudy> = {
  zLI1: {
    id: 'zLI1',
    title: 'The Onboarding Project Part 1',
    intro:
      'A look into my design thinking process, user research strategies and team collaboration. Preview some of my design solutions, A/B tests and artefacts developed throughout this project.',
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
  Dv5M: {
    id: 'Dv5M',
    title: 'The Onboarding Project Part 2',
    intro:
      'Delve into specific user research insights, find out how they influenced the 2024 StreamYard Company Vision and kickstarted a series of growth A/B tests and product optimisation projects.',
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
    title: 'Enabling payments',
    intro:
      'Explore how optimising the UI and UX of payments can drive growth.',
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
};
