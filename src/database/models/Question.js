import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        section: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Question;
