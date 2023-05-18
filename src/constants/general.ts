import linkedin from '../assets/bj/linkedin.svg';
import behance from '../assets/bj/behance.svg';
import telegram from '../assets/bj/telegram.svg';
import avatar from '../assets/bj/frame380.jpg';
import type { General } from '@/models';

export const general: General[] = [
  {
    id: 1,
    avatar: avatar,
    title: 'Mark Vassilevskiy',
    subtitle: 'CEO • UI/UX Designer',
    text: "I am very pleased with the work of this agency! Always in touch, always answer all questions and never leave. I'm lucky that I contacted them!",
    network: [
      { icon: linkedin, text: '@markknd', link: 'https://www.linkedin.com/in/markknd/' },
      { icon: behance, text: '@metamark', link: 'https://www.behance.net/metamark' },
      { icon: telegram, text: '@MarkFusion', link: 'https://t.me/MarkFusion' },
    ],
  },
  {
    id: 2,
    avatar: avatar,
    title: 'Konstantin Invanenko',
    subtitle: 'UI/UX Designer',
    text: "I am very pleased with the work of this agency! Always in touch, always answer all questions and never leave. I'm lucky that I contacted them!",
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
    avatar: avatar,
    title: 'Alim Dzholdaspaev',
    subtitle: 'UI/UX Designer',
    text: "I am very pleased with the work of this agency! Always in touch, always answer all questions and never leave. I'm lucky that I contacted them!",
    network: [
      { icon: linkedin, text: '@alimdesign', link: 'https://www.linkedin.com/in/alimdesign/' },
      { icon: behance, text: '@al1mdes1gn', link: 'https://www.behance.net/al1mdes1gn' },
      { icon: telegram, text: '@alimdesign', link: 'https://t.me/alimdesign' },
    ],
  },
];
