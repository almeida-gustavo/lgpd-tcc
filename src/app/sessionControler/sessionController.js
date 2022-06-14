import { Router } from 'express';
import SessionService from './sessionService.js';

import authMiddleware from '../../middlewares/auth.js';

const sessionServicee = new SessionService();

const sessionController = new Router();

sessionController.post('', sessionServicee.login.bind(sessionServicee));

sessionController.post(
  '/check-token',
  authMiddleware,
  sessionServicee.checkToken.bind(sessionServicee)
);

export { sessionController };
