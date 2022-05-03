import Sequelize, { Model } from 'sequelize';

class Address extends Model {
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
        street: Sequelize.STRING,
        zipCode: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        numberHouse: Sequelize.STRING,
        complement: Sequelize.STRING,
        referencePoint: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.City, {
      foreignKey: 'cityId',
      as: 'city',
    });
  }
}

export default Address;
