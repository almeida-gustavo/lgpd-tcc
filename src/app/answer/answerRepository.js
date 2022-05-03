import Answer from '../../database/models/Answer';
import Question from '../../database/models/Question';

class AnswerRepository {
  async listAnswers(companyId) {
    const results = await Question.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [['section', 'ASC']],
      include: [
        {
          model: Answer,
          as: 'answers',
          where: { companyId },
          required: false,
          attributes: ['id', 'answer', 'answerVersion'],
          order: [['answerVersion', 'DESC']],
          limit: 1,
        },
      ],
    });

    return results;
  }

  async updateAnswers(req) {
    const { body, params } = req;

    // O auto incremento do answer_version esta no banco
    const result = await Answer.bulkCreate(
      body.responses.map(r => ({
        ...r,
        companyId: params.companyId,
        userId: 1,
      }))
    );

    return result;
  }
}

export default AnswerRepository;
