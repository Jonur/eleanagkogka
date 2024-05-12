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
