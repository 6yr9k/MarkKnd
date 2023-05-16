import type { Info } from '@/models/info';
import { RouterLink } from '@/enums';

export const info: Info[] = [
  { name: 'Terms of use ', path: RouterLink.TERMS },
  { name: 'Privacy Policy', path: RouterLink.PRIVACY },
];
