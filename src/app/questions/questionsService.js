import { generateErrorReturn } from '../../utils/exceptions/expressReturnError';

class UserService {
  constructor({ questionsRepository }) {
    this.questionsRepository = questionsRepository;
  }

  async listQuestions(req, res) {
    try {
      const questions = await this.questionsRepository.listQuestions();
      return res.status(200).send(questions);
    } catch (err) {
      console.log('meu erro', err.errors);

      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }
}

export default UserService;
