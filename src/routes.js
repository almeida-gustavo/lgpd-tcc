import { addressController } from './app/address/addressController';
import { userController } from './app/user/userController';

const { Router } = require('express');

const expressRoutes = new Router();

expressRoutes.use('/address', addressController);
expressRoutes.use('/user', userController);

export default expressRoutes;
