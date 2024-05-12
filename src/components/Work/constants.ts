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
  },
};
