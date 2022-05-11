module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'questions',
        'question',
        {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        {}
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'questions',
        'question',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        {}
      ),
    ]);
  },
};
