import { generateErrorReturn } from '../../utils/exceptions/expressReturnError.js';
import StateValidation from './stateValidation.js';

class StateService {
  constructor({ stateRepository }) {
    this.stateRepository = stateRepository;
    this.stateValidation = new StateValidation({ stateRepository });
  }

  async list(req, res) {
    try {
      const states = await this.stateRepository.listStates();
      return res.status(200).send(states);
    } catch (err) {
      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }

  async listCitiesInState(req, res) {
    const { stateId } = req.params;
    const params = { stateId };

    try {
      const validationErrors = await this.stateValidation.listCitiesInState({
        stateId,
      });

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const result = await this.stateRepository.listCitiesInState(params);
      return res.status(200).send(result);
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

export default StateService;
