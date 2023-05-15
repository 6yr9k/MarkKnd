import { RouterLink } from '@/enums';
import type { Links } from '@/models/links';

export const links: Links[] = [
  {
    path: RouterLink.HOME,
    name: 'Home',
  },
  {
    name: 'About',
    path: RouterLink.ABOUT,
  },
  {
    path: RouterLink.SERVICE,
    name: 'Service',
  },
  {
    name: 'Contact',
    path: RouterLink.CONTACT,
  },
];
