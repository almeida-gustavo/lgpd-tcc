import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../../database/models/User';
import authConfig from '../../config/auth';

class UserService {
  async login(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!schema.isValid(req.body))
      return res.status(400).json({ error: 'Validation Fails' });

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) return res.status(401).json({ error: 'User not found' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Password does not match' });

    const { id, name, companyId, isAdmin } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        companyId,
        isAdmin,
      },
      token: jwt.sign({ id, companyId, email, isAdmin }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async checkToken(req, res) {
    return res.status(200).json({
      status: 'Token Valid',
    });
  }
}

export default UserService;
