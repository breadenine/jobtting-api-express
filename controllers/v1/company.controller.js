import axios from 'axios'
import { SERVICE_KEY } from '../../config'

const debug = require('debug')('jobtting-api-express:server')

require('dotenv').config()

const list = async (req, res, next) => {
  const companyName = req.query.name

  const key = SERVICE_KEY

  const { data } = await axios.get(`http://apis.data.go.kr/B552015/NpsBplcInfoInqireService/getBassInfoSearch?serviceKey=${key}`, {
    params: {
      wkpl_nm: companyName,
      pageNo: 1,
      numOfRows: 1
    }
  })

  return res.json(data)
}

export { list }
