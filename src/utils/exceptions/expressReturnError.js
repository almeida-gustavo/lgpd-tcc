import ValidateException from './validate.js';

export const generateErrorReturn = ({ res, status = 400, errUrl, errors }) =>
  res
    .status(status)
    .send(
      new ValidateException(
        status,
        'Erro ao processar solicitação!',
        errUrl,
        errors
      )
    );
