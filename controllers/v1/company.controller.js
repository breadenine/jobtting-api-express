import CompanyService from '../../services/company.service'

const list = async (req, res, next) => {
  const companyName = req.query.name

  const companyService = new CompanyService()

  const data = await companyService.getCompanies({ companyName })

  return res.json(data)
}

export { list }
