import Sequelize from 'sequelize';

import User from './models/User';
import State from './models/address/State';
import City from './models/address/City';
import Country from './models/address/Country';
import Address from './models/address/Address';
import Company from './models/Company';
import Question from './models/Question';

import databaseConfig from '../config/database';

const models = [User, Country, State, City, Address, Company, Question];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
