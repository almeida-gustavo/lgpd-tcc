module.exports = {
  up: queryInterface =>
    Promise.all([
      queryInterface.bulkDelete('answers', null, {}),
      queryInterface.bulkDelete('questions', null, {}),

      queryInterface.bulkInsert(
        'questions',
        [
          {
            id: 1,
            question: 'O departamento possui processos de tratamento de dados?',
            department: 'RH',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            question:
              'O(s) processo(s) utilizado(s) por sua empresa possui certificação de algum órgão regulamentador?',
            department: 'RH',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            question:
              'O departamento permite que o usuário atualize ou remova suas informações pessoais de sua empresa?',
            department: 'RH',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 4,
            question:
              'Um usuário teve seus dados vazados na internet e por isso decidiu remover todos eles das plataformas que os coletam. Dentre as plataformas, está a sua empresa, onde tais dados são tratados neste departamento. Entre as ferramentas disponibilizadas, seria possível que tal usuário revogue o acesso de sua empresa a tais dados?',
            department: 'RH',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 5,
            question:
              'A segurança de dados é de suma importante para a integridade dos dados coletados. Imagine uma situação em que sua empresa é alvo de um ataque cibernético, onde dados dos usuários que estavam armazenados neste departamento estão em risco de serem expostos na internet. Olhando para este cenário, a sua empresa estaria capacitada com um plano de ação para este tipo de situação?',
            department: 'RH',
            created_at: new Date(),
            updated_at: new Date(),
          },

          {
            id: 6,
            question: 'O departamento possui processos de tratamento de dados?',
            department: 'Financeiro',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 7,
            question:
              'O(s) processo(s) utilizado(s) por sua empresa possui certificação de algum órgão regulamentador?',
            department: 'Financeiro',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 8,
            question:
              'O departamento permite que o usuário atualize ou remova suas informações pessoais de sua empresa?',
            department: 'Financeiro',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 9,
            question:
              'Um usuário teve seus dados vazados na internet e por isso decidiu remover todos eles das plataformas que os coletam. Dentre as plataformas, está a sua empresa, onde tais dados são tratados neste departamento. Entre as ferramentas disponibilizadas, seria possível que tal usuário revogue o acesso de sua empresa a tais dados?',
            department: 'Financeiro',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 10,
            question:
              'A segurança de dados é de suma importante para a integridade dos dados coletados. Imagine uma situação em que sua empresa é alvo de um ataque cibernético, onde dados dos usuários que estavam armazenados neste departamento estão em risco de serem expostos na internet. Olhando para este cenário, a sua empresa estaria capacitada com um plano de ação para este tipo de situação?',
            department: 'Financeiro',
            created_at: new Date(),
            updated_at: new Date(),
          },

          {
            id: 11,
            question: 'O departamento possui processos de tratamento de dados?',
            department: 'Comercial',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 12,
            question:
              'O(s) processo(s) utilizado(s) por sua empresa possui certificação de algum órgão regulamentador?',
            department: 'Comercial',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 13,
            question:
              'O departamento permite que o usuário atualize ou remova suas informações pessoais de sua empresa?',
            department: 'Comercial',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 14,
            question:
              'Um usuário teve seus dados vazados na internet e por isso decidiu remover todos eles das plataformas que os coletam. Dentre as plataformas, está a sua empresa, onde tais dados são tratados neste departamento. Entre as ferramentas disponibilizadas, seria possível que tal usuário revogue o acesso de sua empresa a tais dados?',
            department: 'Comercial',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 15,
            question:
              'A segurança de dados é de suma importante para a integridade dos dados coletados. Imagine uma situação em que sua empresa é alvo de um ataque cibernético, onde dados dos usuários que estavam armazenados neste departamento estão em risco de serem expostos na internet. Olhando para este cenário, a sua empresa estaria capacitada com um plano de ação para este tipo de situação?',
            department: 'Comercial',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],

        {}
      ),
    ]),

  down: queryInterface => queryInterface.bulkDelete('questions', null, {}),
};
