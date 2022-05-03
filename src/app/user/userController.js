import { Router } from 'express';
import UserRepository from './userRepository';
import UserService from './userService';

const userService = new UserService({
  userRepository: new UserRepository(),
});

const userController = new Router();

userController.post('', userService.createUserAndCompany.bind(userService));
userController.get('/:userId', userService.findUser.bind(userService));

export { userController };
