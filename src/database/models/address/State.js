import Sequelize, { Model } from 'sequelize';

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          get() {
            return String(this.getDataValue('id'));
          },
        },
        name: Sequelize.STRING,
        initials: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Country, {
      foreignKey: 'countryId',
      as: 'country',
    });
  }
}

export default State;
