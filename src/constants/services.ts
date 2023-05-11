import redesign from '../assets/service/redesign.png';
import landing from '../assets/service/landingDesign.png';
import multiPage from '../assets/service/multiPages.png';
import manyPages from '../assets/service/manyPages.png';
import wpTemplate from '../assets/service/wpTemplate.png';
import fdTemplate from '../assets/service/fdTemplate.png';
import type { Services } from '@/models';

export const services: Services[] = [
  {
    id: 1,
    title: 'Redesign',
    shortDescription:
      'Our redesign services will help you increase brand awareness and promote your business at a competitive price',
    bg: redesign,
  },
  {
    id: 2,
    title: 'Landing Page Design',
    shortDescription: 'We can design a landing page and help you craft the perfect call to action for your website.',
    bg: landing,
  },
  {
    id: 3,
    title: '2-4 Pages Design',
    shortDescription:
      'We are a marketing agency that helps big and small companies to grow and expand as well as give them the best ',
    bg: multiPage,
  },
  {
    id: 4,
    title: '5+ Pages Design',
    shortDescription:
      'We are a marketing agency that helps big and small companies to grow and expand as well as give them the best ',
    bg: manyPages,
  },
  {
    id: 5,
    title: 'Buy Figma Templates',
    shortDescription:
      'Our unique Figma template will allow you to design websites in a more efficient manner and at the same time save time.',
    bg: fdTemplate,
  },
  {
    id: 6,
    title: 'Buy WordPress Templates',
    shortDescription: 'Choose WordPress template for websites, showing the detail of your products and services!',
    bg: wpTemplate,
  },
];
