import { Router } from 'express';
import { addressController } from './app/address/addressController.js';
import { userController } from './app/user/userController.js';
import { questionController } from './app/questions/questionsController.js';
import { answerController } from './app/answer/answerController.js';
import { sessionController } from './app/sessionControler/sessionController.js';

import authMiddleware from './middlewares/auth.js';

const expressRoutes = new Router();

expressRoutes.use('/address', addressController);
expressRoutes.use('/user', userController);
expressRoutes.use('/question', questionController);
expressRoutes.use('/login', sessionController);

expressRoutes.use('/answer', authMiddleware, answerController);

export default expressRoutes;
