import express from 'express';
import * as emailController from '../controller';

const emailRouter = express.Router();

emailRouter.post('/send', emailController.sendEmail);

export { emailRouter };
