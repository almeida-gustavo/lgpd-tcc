import { addressController } from './app/address/addressController';
import { userController } from './app/user/userController';
import { questionController } from './app/questions/questionsController';
import { answerController } from './app/answer/answerController';

const { Router } = require('express');

const expressRoutes = new Router();

expressRoutes.use('/address', addressController);
expressRoutes.use('/user', userController);
expressRoutes.use('/question', questionController);
expressRoutes.use('/answer', answerController);

export default expressRoutes;
