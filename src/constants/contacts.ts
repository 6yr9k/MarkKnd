import link from '../assets/icons/linkedin.svg';
import discord from '../assets/icons/discord.svg';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import type { Contacts } from '@/models/';

export const contacts: Contacts[] = [
  {
    id: 1,
    contact: 'support@bjgroup.com',
  },
  {
    id: 2,
    contact: '@bjgroup-agency',
    icon: link,
    link: 'https://www.linkedin.com/company/bjgroup-agency/',
  },
  {
    id: 3,
    contact: '@bjgroup.agency',
    icon: instagram,
    link: 'https://www.instagram.com/bjgroup.agency/',
  },

  {
    id: 4,
    contact: '+1 (985) 331 7059',
  },
  {
    id: 5,
    contact: '@MarkFusion',
    icon: telegram,
    link: 'https://t.me/MarkFusion',
  },

  {
    id: 6,
    contact: '@BJ Group',
    icon: discord,
    link: 'https://discord.gg/cvwRyHeR5t',
  },
];
