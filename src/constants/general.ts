import linkedin from '../assets/bj/linkedin.svg';
import behance from '../assets/bj/behance.svg';
import telegram from '../assets/bj/telegram.svg';
import mark from '../assets/bj/mark.svg';
import konstantin from '../assets/bj/konstantin.svg';
import alim from '../assets/bj/alim.svg';
import type { General } from '@/models';

export const general: General[] = [
  {
    id: 1,
    avatar: mark,
    title: 'Mark Vassilevskiy',
    subtitle: 'CEO • UI/UX Designer',
    text: '3+ years of experience, passionate about creating UI,UX designs for diverse projects. Successfully completed 20+ huge projects.',
    network: [
      { icon: linkedin, text: '@markknd', link: 'https://www.linkedin.com/in/markknd/' },
      { icon: behance, text: '@metamark', link: 'https://www.behance.net/metamark' },
      { icon: telegram, text: '@MarkFusion', link: 'https://t.me/MarkFusion' },
    ],
  },
  {
    id: 2,
    avatar: konstantin,
    title: 'Konstantin Invanenko',
    subtitle: 'UI/UX Designer',
    text: 'Senior UI/UX Designer with three years of experience. My goal is creating innovative and engaging designs for a diverse range of projects.',
    network: [
      { icon: linkedin, text: '@thekosti4', link: '#!' },
      {
        icon: behance,
        text: '@thekosti4',
        link: 'https://www.behance.net/thekosti4?tracking_source=search_projects%7CImmigration',
      },
      { icon: telegram, text: '@TheKosti4', link: 'https://t.me/TheKosti4' },
    ],
  },
  {
    id: 3,
    avatar: alim,
    title: 'Alim Dzholdaspaev',
    subtitle: 'UI/UX Designer',
    text: 'UX/UI Designer with  two years of freelance and team experience. I work with such spheres as construction, restaurant businesses, medicine, etc.',
    network: [
      { icon: linkedin, text: '@alimdesign', link: 'https://www.linkedin.com/in/alimdesign/' },
      { icon: behance, text: '@al1mdes1gn', link: 'https://www.behance.net/al1mdes1gn' },
      { icon: telegram, text: '@alimdesign', link: 'https://t.me/alimdesign' },
    ],
  },
];
