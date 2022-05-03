import Company from '../../database/models/Company';

class CompanyRepository {
  async findByCNPJ(cnpj) {
    const company = await Company.findOne({ where: { cnpj } });
    return company;
  }

  async findById(id) {
    const company = await Company.findByPk(id);
    return company;
  }
}

export default CompanyRepository;
