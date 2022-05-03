import { addressController } from './app/address/addressController';

const { Router } = require('express');

const expressRoutes = new Router();

expressRoutes.use('/address', addressController);

expressRoutes.get('', (req, res) => {
  return res.send('eai');
});

export default expressRoutes;
