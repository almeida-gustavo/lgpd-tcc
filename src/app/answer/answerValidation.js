import * as yup from 'yup';
import FieldMessage from '../../utils/exceptions/fieldmessage';

import CompanyRepository from '../company/companyRepository';

const updateAnswersSchema = yup.object().shape({
  responses: yup
    .array(
      yup.object().shape({
        answer: yup
          .string()
          .oneOf(['Sim', 'Não', 'Talvez'])
          .required('Campo Obrigatório'),
        questionId: yup
          .number()
          .integer()
          .required('Campo Obrigatório'),
      })
    )
    .required('Campo Obrigatório'),
});

class AnswerValidation {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
    this.companyRepository = new CompanyRepository();
  }

  async listAnswers(req) {
    const errors = [];

    const { params, userCompanyId, query } = req;

    const foundCompany = await this.companyRepository.findById(
      params.companyId
    );

    if (!foundCompany) {
      errors.push(
        new FieldMessage('params.companyId', 'Não existe empresa com esse id')
      );
    }

    if (userCompanyId !== foundCompany.id) {
      errors.push(
        new FieldMessage('companyId', 'Você não pertence a essa empresa')
      );
    }

    if (!query.department) {
      // errors.push(
      //   new FieldMessage('query.department', 'Filtro department Obrigatório ')
      // );
    }

    return errors;
  }

  async updateAnswers(req) {
    const errors = [];

    const { body, params, userCompanyId } = req;

    try {
      await updateAnswersSchema.validate(body, { abortEarly: false });
    } catch (err) {
      console.log(err);
      err.inner.forEach(error => {
        errors.push(new FieldMessage(error.path, error.message));
      });

      return errors;
    }

    const foundCompany = await this.companyRepository.findById(
      params.companyId
    );

    if (!foundCompany) {
      errors.push(
        new FieldMessage('params.companyId', 'Não existe empresa com esse id')
      );
    }

    if (userCompanyId !== foundCompany.id) {
      errors.push(
        new FieldMessage('companyId', 'Você não pertence a essa empresa')
      );
    }

    return errors;
  }

  async getStatistics(req) {
    const errors = [];

    const { params, userCompanyId } = req;

    const foundCompany = await this.companyRepository.findById(
      params.companyId
    );

    if (!foundCompany) {
      errors.push(
        new FieldMessage('params.companyId', 'Não existe empresa com esse id')
      );
    }

    if (foundCompany.id !== userCompanyId) {
      errors.push(
        new FieldMessage('companyId', 'Você não pertence a essa empresa')
      );
    }

    return errors;
  }
}

export default AnswerValidation;
