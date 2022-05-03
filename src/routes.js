import { addressController } from './app/address/addressController';
import { userController } from './app/user/userController';
import { questionController } from './app/questions/questionsController';

const { Router } = require('express');

const expressRoutes = new Router();

expressRoutes.use('/address', addressController);
expressRoutes.use('/user', userController);
expressRoutes.use('/question', questionController);

export default expressRoutes;
