import { Router } from 'express';
import AnswerService from './answerService';
import AnswerRepository from './answerRepository';

const answerService = new AnswerService({
  answerRepository: new AnswerRepository(),
});

const answerController = new Router();

answerController.get(
  '/:companyId',
  answerService.listAnswer.bind(answerService)
);

answerController.post(
  '/:companyId',
  answerService.updateAnswers.bind(answerService)
);

answerController.get(
  '/:companyId/statistics',
  answerService.getAnswerStatistics.bind(answerService)
);

export { answerController };
