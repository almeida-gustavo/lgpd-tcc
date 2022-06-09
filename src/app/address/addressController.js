import { Router } from 'express';
import StateRepository from './stateRepository';
import StateService from './stateService';

const stateService = new StateService({
  stateRepository: new StateRepository(),
});

const addressController = new Router();

addressController.get('/', (req, res) => {
  console.log('test');
  return res.status(200).send('ola meu amigo');
});

addressController.get('/states', stateService.list.bind(stateService));
addressController.get(
  '/states/:stateId/cities',
  stateService.listCitiesInState.bind(stateService)
);

export { addressController };
