import redesign from '../assets/service/redesign.svg';
import landing from '../assets/service/landingDesign.svg';
import multiPage from '../assets/service/multiPages.svg';
import manyPages from '../assets/service/manyPages.svg';
import wpTemplate from '../assets/service/wpTemplate.svg';
import fdTemplate from '../assets/service/fdTemplate.svg';
import type { Services } from '@/models';

export const services: Services[] = [
  {
    id: 1,
    title: 'Redesign',
    shortDescription:
      'Our redesign services will help you increase brand awareness and promote your business at a competitive price',
    longDescription:
      "Revamp your digital presence with our top-notch redesign services. We understand that your business evolves, and so should your website. Our team of expert designers will breathe new life into your existing website, making it more engaging, user-friendly, and in line with your brand's vision.",
    providedList: [
      'Comprehensive website audit.',
      'Modern, responsive design.',
      'Improved user experience.',
      'SEO-friendly structure.',
      'Increased conversion rates.',
    ],
    bg: redesign,
  },
  {
    id: 2,
    title: 'Landing Page Design',
    shortDescription: 'We can design a landing page and help you craft the perfect call to action for your website.',
    longDescription:
      'The landing page is the first impression of your business. We design high-converting landing pages that captivate visitors and drive them to take action. Our designs are not just visually appealing, but also strategically crafted to meet your business goals.',
    providedList: [
      'Custom design tailored to your brand.',
      'Optimized for conversions.',
      'Mobile-friendly design.',
      'Fast loading times.',
      'Clear and compelling call-to-actions.',
    ],
    bg: landing,
  },
  {
    id: 3,
    title: '2-4 Pages Design',
    shortDescription:
      'We are a marketing agency that helps big and small companies to grow and expand as well as give them the best ',
    longDescription:
      'Perfect for small businesses or startups, our 2-4 page design service offers a concise yet comprehensive digital platform to showcase your products or services. We focus on creating a seamless user journey that guides visitors to the information they need.',
    providedList: [
      'Customized design to reflect your brand.',
      'User-friendly navigation.',
      'Responsive design for all devices.',
      'SEO optimized for better visibility.',
      'Fast and secure pages \n.',
    ],
    bg: multiPage,
  },
  {
    id: 4,
    title: '5+ Pages Design',
    shortDescription:
      'We are a marketing agency that helps big and small companies to grow and expand as well as give them the best ',
    longDescription:
      'RFor businesses that require a more extensive online presence, our 5+ pages website design service is the ideal solution. We create a robust website with multiple pages, each designed to provide detailed information about your business, products, or services.',
    providedList: [
      'Customized multi-page design.',
      'User-friendly navigation and layout.',
      'Responsive and mobile-optimized.',
      'SEO-friendly structure.',
      'High-quality graphics and visuals.',
    ],
    bg: manyPages,
  },
  {
    id: 5,
    title: 'Website Development',
    shortDescription:
      'Your website is not just visually pleasing! Turn your vision into reality with our website development service..',
    longDescription:
      'Turn your vision into reality with our website development service. Our team of skilled developers will transform our stunning designs into a fully functional website. We ensure that your website is not just visually pleasing, but also technically sound.',
    providedList: [
      'Front-end and back-end development.',
      'Mobile and SEO friendly.',
      'Fast and secure website.',
      'Integration with necessary tools and platforms.',
      'Ongoing support and maintenance.',
    ],
    bg: fdTemplate,
  },
  {
    id: 6,
    title: 'Buy Figma Templates',
    shortDescription:
      'Our unique Figma template will allow you to design websites in a more efficient manner and at the same time save time.',
    longDescription:
      'Take your design process to the next level with our Figma templates available on Gumroad. These templates are designed to help you kickstart your design process, save time, and maintain consistency across your designs.',
    providedList: [
      'Wide range of templates for different industries.',
      'Easy to use and customize.',
      'Consistent design elements.',
      'Regularly updated with new designs.',
      'Instant download and lifetime access.',
    ],
    bg: wpTemplate,
  },
];
