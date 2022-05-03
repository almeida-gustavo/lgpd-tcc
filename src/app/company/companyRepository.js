import Company from '../../database/models/Company';

class CompanyRepository {
  async findByCNPJ(cnpj) {
    const company = await Company.findOne({ where: { cnpj } });
    return company;
  }

  // async listCitiesInCompany({ CompanyId }) {
  //   const cities = await City.findAll({
  //     attributes: ['id', 'name'],
  //     include: [
  //       {
  //         model: Company,
  //         as: 'Company',
  //         where: { id: CompanyId },
  //         attributes: ['id', 'name', 'initials'],
  //       },
  //     ],
  //   });

  //   return cities;
  // }
}

export default CompanyRepository;
