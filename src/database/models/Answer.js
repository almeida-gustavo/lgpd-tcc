import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        answer: Sequelize.STRING,
        answerVersion: {
          type: Sequelize.NUMBER,
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, {
      foreignKey: 'questionId',
      as: 'question',
    });

    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    this.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  }
}

export default Answer;
