import Question from '../../database/models/Question.js';

class QuestionRepository {
  async listQuestions() {
    // @TODO: ver como que faz para agrupar juntos em sql ao inves de ficar fazendo o oder
    const questions = await Question.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    const orderedQuestions = questions.sort((a, b) =>
      a.department.localeCompare(b.department)
    );

    return orderedQuestions;
  }
}

export default QuestionRepository;
