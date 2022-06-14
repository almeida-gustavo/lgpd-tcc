import { generateErrorReturn } from '../../utils/exceptions/expressReturnError.js';
import AnswerValidation from './answerValidation.js';

class AnswerService {
  constructor({ answerRepository }) {
    this.answerRepository = answerRepository;
    this.answerValidation = new AnswerValidation({ answerRepository });
  }

  async listAnswer(req, res) {
    const { companyId } = req.params;

    try {
      const validationErrors = await this.answerValidation.listAnswers(req);

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const answers = await this.answerRepository.listAnswers(
        companyId,
        req.query.department
      );
      return res.status(200).send(answers);
    } catch (err) {
      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }

  async updateAnswers(req, res) {
    try {
      const validationErrors = await this.answerValidation.updateAnswers(req);

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const answers = await this.answerRepository.updateAnswers(req);
      return res.status(201).send(answers);
    } catch (err) {
      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }

  async getAnswerStatistics(req, res) {
    const { companyId } = req.params;

    try {
      const validationErrors = await this.answerValidation.getStatistics(req);

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const answers = await this.answerRepository.getStatistics(companyId);
      return res.status(200).send(answers);
    } catch (err) {
      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }
}

export default AnswerService;
