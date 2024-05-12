export type StarListItem = { title: string; description: string; starColor: string };

export type BlogPost = {
  title: string;
  subtitle: string;
  url: string;
};

export type Experience = {
  title: string;
  where: string;
  when: string;
  description: string;
  pointColor: string;
};

export type Testimonial = {
  passage: string;
  author: string;
  jobTitle: string;
  company: string;
};

export type KeySkill = {
  title: string;
  content: string;
  icon: string;
};

type CaseStudyEntry =
  | {
      title: string;
      content: string;
      label: string;
      image: string;
    }
  | {
      image: string;
    }
  | {
      content: string;
    }
  | {
      title: string;
    }
  | {
      content: string;
      label: string;
    }
  | {
      title: string;
      label: string;
    }
  | {
      image: string;
      label: string;
    }
  | {
      title: string;
      content: string;
      label: string;
    };

type CaseStudySection = {
  title: string;
  entries: CaseStudyEntry[];
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  img: string;
  sections?: CaseStudySection[];
};
