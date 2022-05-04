import * as yup from 'yup';
import FieldMessage from '../../utils/exceptions/fieldmessage';

import StateRepository from '../address/stateRepository';
import CompanyRepository from '../company/companyRepository';

import { idValid } from '../../utils/helpers/idValid';

const addressSchema = yup.object().shape({
  zipCode: yup.string().required('Campo Obrigatório'),
  street: yup.string().required('Campo Obrigatório'),
  neighborhood: yup.string().required('Campo Obrigatório'),
  numberHouse: yup.string(),
  complement: yup.string(),
  referencePoint: yup.string(),
  cityId: yup
    .number('Cidade inválida.')
    .integer()
    .required('Campo Obrigatório'),
});

const companySchema = yup.object().shape({
  name: yup.string().required('Campo Obrigatório'),
  cnpj: yup.string().required('Campo Obrigatório'),
  address: addressSchema,
});

const userSchema = yup.object().shape({
  name: yup.string().required('Campo Obrigatório'),
  cpf: yup.string().required('Campo Obrigatório'),
  email: yup
    .string()
    .email()
    .required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
  company: companySchema,
});

class UserValidation {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
    this.stateRepository = new StateRepository();
    this.companyRepository = new CompanyRepository();
  }

  async findUser(userId) {
    const errors = [];

    if (!idValid(Number(userId))) {
      errors.push(
        new FieldMessage('userId', 'Parametro deve ser do tipo inteiro')
      );
      return errors;
    }

    const user = await this.userRepository.findByPk(userId);

    if (!user) {
      errors.push(new FieldMessage('userId', 'Não existe usuario com esse id'));
    }

    return errors;
  }

  async createUserAndCompany(req) {
    const errors = [];

    const { body } = req;

    try {
      await userSchema.validate(body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach(error => {
        errors.push(new FieldMessage(error.path, error.message));
      });

      return errors;
    }

    const user = await this.userRepository.findByEmail(body.email);
    if (user) {
      errors.push(
        new FieldMessage('email', 'Ja existe usuario com esse email')
      );
    }

    const { company } = body;
    const { address } = company;

    const city = await this.stateRepository.findCityByid(address.cityId);
    if (!city) {
      errors.push(new FieldMessage('cityId', 'Não existe cidade com esse id'));
    }

    const foundCompany = await this.companyRepository.findByCNPJ(company.cnpj);
    if (foundCompany) {
      errors.push(
        new FieldMessage('company.cnpj', 'Ja existe uma empresa com esse cnpj')
      );
    }

    return errors;
  }

  async updateUser(req) {
    const errors = [];

    const { body, userId } = req;

    const { name, email } = body;

    if (email) {
      const foundUser = await this.userRepository.findByEmail(email);

      if (foundUser && foundUser.id !== userId) {
        errors.push(
          new FieldMessage('email', 'Ja existe um usuario com esse email')
        );
      }
    }

    if (name && typeof name !== 'string') {
      errors.push(new FieldMessage('name', 'Nome tem que ser string'));
    }

    return errors;
  }
}

export default UserValidation;
