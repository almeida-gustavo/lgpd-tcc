import { Router } from 'express';
import SessionService from './sessionService';

const sessionServicee = new SessionService();

const sessionController = new Router();

sessionController.post(
  '',
  sessionServicee.createUserAndCompany.bind(sessionServicee)
);

export { sessionController };
