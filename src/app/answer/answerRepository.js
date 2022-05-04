import Answer from '../../database/models/Answer';
import Question from '../../database/models/Question';

class AnswerRepository {
  async listAnswers(companyId, department) {
    const where = {};
    if (department) {
      where.department = department;
    }
    const results = await Question.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [['department', 'ASC']],
      where,
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

    const formattedResult = new Map();

    results.forEach(result => {
      const formatedObject = {
        options: result.options,
        id: result.id,
        question: result.question,
        answer: (result.answers[0] || {}).answer || null,
      };

      if (formattedResult.has(result.department)) {
        const existingValues = formattedResult.get(result.department);
        formattedResult.set(result.department, [
          ...existingValues,
          formatedObject,
        ]);
      } else {
        formattedResult.set(result.department, [formatedObject]);
      }
    });

    const iteratorResult = formattedResult[Symbol.iterator]();

    const finalResult = [];

    /* eslint-disable no-restricted-syntax */
    for (const item of iteratorResult) {
      console.log(item);
      finalResult.push({
        department: item[0],
        questions: item[1],
      });
    }

    return finalResult;
  }

  async updateAnswers(req) {
    const { body, params, userId } = req;

    // O auto incremento do answer_version esta no banco
    const result = await Answer.bulkCreate(
      body.responses.map(r => ({
        ...r,
        companyId: params.companyId,
        userId,
      }))
    );

    return result;
  }
}

export default AnswerRepository;
