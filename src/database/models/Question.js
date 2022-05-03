import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        section: Sequelize.STRING,
        options: {
          type: Sequelize.VIRTUAL,
          get() {
            return ['Sim', 'Não', 'Talvez'];
          },
        },
      },
      { sequelize }
    );

    return this;
  }
}

export default Question;
