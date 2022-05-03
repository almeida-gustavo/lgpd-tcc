import { Router } from 'express';
import QuestionService from './questionsService';
import QuestionRepository from './questionRepository';

const questionService = new QuestionService({
  questionsRepository: new QuestionRepository(),
});

const questionController = new Router();

questionController.get('', questionService.listQuestions.bind(questionService));

export { questionController };
