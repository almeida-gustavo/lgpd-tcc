module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('countries',
    [
      {
        name: 'Brasil',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('countries', null, {}),
};
