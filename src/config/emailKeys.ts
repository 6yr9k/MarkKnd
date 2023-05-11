import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || '8080';
export const GMAIL_USER = process.env.GMAIL_USER || '';
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || '';
