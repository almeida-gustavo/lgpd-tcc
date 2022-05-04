import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        question: Sequelize.STRING,
        department: Sequelize.STRING,
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

  static associate(models) {
    this.hasMany(models.Answer, {
      foreignKey: 'questionId',
      as: 'answers',
    });
  }
}

export default Question;
