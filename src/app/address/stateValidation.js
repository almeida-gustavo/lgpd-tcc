import FieldMessage from '../../utils/exceptions/fieldmessage.js';
import { idValid } from '../../utils/helpers/idValid.js';

class StateValidation {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
  }

  async listCitiesInState({ stateId }) {
    const errors = [];

    if (!idValid(stateId)) {
      errors.push(
        new FieldMessage('stateId', 'Parametro deve ser do tipo inteiro')
      );
      return errors;
    }

    const state = await this.stateRepository.findByPk(stateId);
    if (!state) {
      errors.push(new FieldMessage('stateId', 'Não existe estado com esse id'));
    }

    return errors;
  }
}

export default StateValidation;
