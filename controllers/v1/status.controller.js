import axios from 'axios'
import { SERVICE_KEY } from '../../config'
import { uuid } from '../../utils/uuid'

const debug = require('debug')('jobtting-api-express:server')

require('dotenv').config()

const getIndex = (req, res, next) => {
  debug('status check')
  return res.status(200).end()
}

const sample = (req, res, next) => {
  debug('sample sample')
  const mock = [
    {
      id: uuid(),
      title: 'Lorem, ipsum dolor.'
    },
    {
      id: uuid(),
      title: 'Lorem ipsum dolor sit.'
    },
    {
      id: uuid(),
      title: 'Lorem ipsum dolor sit amet.'
    }
  ]
  res.json(mock)
}

const company = async (req, res, next) => {
  console.time('123')
  const key = SERVICE_KEY
  const { data } = await axios.get(`http://apis.data.go.kr/B552015/NpsBplcInfoInqireService/getBassInfoSearch?serviceKey=${key}`, {
    params: {
      wkpl_nm: '그립랩스',
      pageNo: 1,
      numOfRows: 10
    }
  })
  console.timeEnd('123')

  return res.json(data)
}

export { sample, getIndex, company }
