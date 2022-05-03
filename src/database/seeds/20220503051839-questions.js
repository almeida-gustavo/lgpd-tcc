module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'questions',
      [
        {
          id: 1,
          question: 'Primeira Pergunta',
          section: 'Secao - Tecnologia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          question: 'Segunda Pergunta',
          section: 'Secao - Tecnologia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          question: 'MAIS UMA DIFERENTA',
          section: 'Secao - Financeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          question: 'VAMOS DE Mais uma',
          section: 'Secao - Financeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('questions', null, {}),
};
