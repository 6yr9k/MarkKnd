import meta from '../assets/icons/meta.png';
import discord from '../assets/icons/discord.png';
import telegram from '../assets/icons/telegram.png';
import instagram from '../assets/icons/instagram.png';
import type { Contacts } from '@/models/';

export const contacts: Contacts[] = [
  {
    id: 1,
    contact: 'support@bjgroup.com',
  },
  {
    id: 2,
    contact: '@metamark',
    icon: meta,
  },
  {
    id: 3,
    contact: '@metamark',
    icon: instagram,
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
    contact: '@MarkFusion',
    icon: discord,
  },
];
