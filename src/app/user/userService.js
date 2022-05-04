import { generateErrorReturn } from '../../utils/exceptions/expressReturnError';
import UserValdidation from './userValidation';

class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
    this.userValdidation = new UserValdidation({ userRepository });
  }

  async createUserAndCompany(req, res) {
    try {
      const validationErrors = await this.userValdidation.createUserAndCompany(
        req
      );

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const user = await this.userRepository.createUserAndCompany(req);
      return res.status(200).send(user);
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

  async findUser(req, res) {
    const { userId } = req.params;

    try {
      const validationErrors = await this.userValdidation.findUser(userId);

      if (validationErrors.length > 0) {
        return generateErrorReturn({
          res,
          status: 400,
          errUrl: req.url,
          errors: validationErrors,
        });
      }

      const user = await this.userRepository.findByPk(userId);
      return res.status(200).send(user);
    } catch (err) {
      return generateErrorReturn({
        res,
        status: 400,
        errUrl: req.url,
        errors: err.message,
      });
    }
  }

  async updateUser(req, res) {}
}

export default UserService;
