import { Router } from 'express';
import UserRepository from './userRepository';
import UserService from './userService';

import authMiddleware from '../../middlewares/auth';

const userService = new UserService({
  userRepository: new UserRepository(),
});

const userController = new Router();

userController.post('', userService.createUserAndCompany.bind(userService));
userController.get('/:userId', userService.findUser.bind(userService));

userController.put(
  '',
  authMiddleware,
  userService.updateUser.bind(userService)
);

userController.post(
  '/create-other',
  authMiddleware,
  userService.createUserFromAdmin.bind(userService)
);

export { userController };
