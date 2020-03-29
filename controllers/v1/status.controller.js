import { uuid } from '../../utils/uuid'

const debug = require('debug')('jobtting-api-express:server')

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

export { sample, getIndex }
