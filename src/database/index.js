import Sequelize from 'sequelize';

import User from './models/User.js';
import State from './models/address/State.js';
import City from './models/address/City.js';
import Country from './models/address/Country.js';
import Address from './models/address/Address.js';
import Company from './models/Company.js';
import Question from './models/Question.js';
import Answer from './models/Answer.js';

import databaseConfig from '../config/database.js';

const models = [User, Country, State, City, Address, Company, Question, Answer];

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
