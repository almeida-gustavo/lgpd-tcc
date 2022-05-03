import Sequelize, { Model } from 'sequelize';

class Country extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get() {
          return String(this.getDataValue('id'));
        },
      },
      name: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}

export default Country;
