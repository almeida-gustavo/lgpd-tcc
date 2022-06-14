import { Router } from 'express';
import QuestionService from './questionsService.js';
import QuestionRepository from './questionRepository.js';

const questionService = new QuestionService({
  questionsRepository: new QuestionRepository(),
});

const questionController = new Router();

questionController.get('', questionService.listQuestions.bind(questionService));

export { questionController };
