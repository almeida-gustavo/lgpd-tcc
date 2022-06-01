import User from '../../database/models/User';
import Company from '../../database/models/Company';
import Address from '../../database/models/address/Address';

class UserRepository {
  async findByPk(userId) {
    const user = await User.findByPk(userId, {
      attributes: {
        exclude: ['password_hash'],
      },
    });
    return user;
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  async findbyCpf(cpf) {
    const user = await User.findOne({ where: { cpf } });
    return user;
  }

  async createUserAndCompany(req) {
    const address = await Address.create(req.body.company.address);
    const company = await Company.create({
      ...req.body.company,
      addressId: address.id,
    });

    const user = await User.create({
      ...req.body,
      companyId: company.id,
      isAdmin: true,
    });

    user.password_hash = undefined;

    return user;
  }

  async createUserFromAdmin(req) {
    const { userCompanyId } = req;
    const user = await User.create({
      ...req.body,
      companyId: userCompanyId,
      isAdmin: false,
    });

    user.password_hash = undefined;

    return user;
  }

  async updateUser(req) {
    const { userId, body } = req;

    const user = await User.findByPk(userId);

    return user.update({ ...body });
  }
}

export default UserRepository;
