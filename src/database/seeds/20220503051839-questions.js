module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'questions',
      [
        {
          id: 1,
          question: 'Primeira Pergunta',
          department: 'Secao - Tecnologia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          question: 'Segunda Pergunta',
          department: 'Secao - Tecnologia',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          question: 'MAIS UMA DIFERENTA',
          department: 'Secao - Financeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          question: 'VAMOS DE Mais uma',
          department: 'Secao - Financeiro',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('questions', null, {}),
};
