module.exports = {
  up: queryInterface =>
    Promise.all([
      queryInterface.bulkInsert(
        'questions',
        [
          {
            id: 16,
            question: 'O departamento possui processos de tratamento de dados?',
            department: 'T.I',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 17,
            question:
              'O(s) processo(s) utilizado(s) por sua empresa possui certificação de algum órgão regulamentador?',
            department: 'T.I',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 18,
            question:
              'O departamento permite que o usuário atualize ou remova suas informações pessoais de sua empresa?',
            department: 'T.I',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 19,
            question:
              'Um usuário teve seus dados vazados na internet e por isso decidiu remover todos eles das plataformas que os coletam. Dentre as plataformas, está a sua empresa, onde tais dados são tratados neste departamento. Entre as ferramentas disponibilizadas, seria possível que tal usuário revogue o acesso de sua empresa a tais dados?',
            department: 'T.I',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 20,
            question:
              'A segurança de dados é de suma importante para a integridade dos dados coletados. Imagine uma situação em que sua empresa é alvo de um ataque cibernético, onde dados dos usuários que estavam armazenados neste departamento estão em risco de serem expostos na internet. Olhando para este cenário, a sua empresa estaria capacitada com um plano de ação para este tipo de situação?',
            department: 'T.I',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],

        {}
      ),
    ]),

  down: queryInterface => queryInterface.bulkDelete('questions', null, {}),
};
