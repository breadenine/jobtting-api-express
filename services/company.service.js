import axios from 'axios'
import Config from '../config'

export default class CompanyService {
  constructor() {}

  async getCompanies(options) {
    const { companyName } = options

    const {
      data: {
        response: { body },
      },
    } = await axios.get(`http://apis.data.go.kr/B552015/NpsBplcInfoInqireService/getBassInfoSearch?serviceKey=${Config.SERVICE_KEY}`, {
      params: {
        wkpl_nm: companyName,
        pageNo: 1,
        numOfRows: 10,
      },
    })

    Config.debug(body)

    return body
  }
}
