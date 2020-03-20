// import axios from 'axios'
// import { SERVICE_KEY } from '../../config'
// import { uuid } from '../../utils/uuid'

const debug = require('debug')('jobtting-api-express:server')

// require('dotenv').config()

const sampleData = [
  {
    id: 1,
    name: '엔에이치엔고도',
    team: '',
    closingDate: '2020-02-29',
    applyDate: '2020-02-05',
    status: '서류지원',
    distance: '구디역 / 1h',
    pay: '6000',
    review: '5',
    recruitsite: '원티드',
    etc: '잡플래닛 평점이 2.6이긴 한데 it평점은 좋으니까..',
    jobplanet: '2.6',
    homepage: ''
  },
  {
    id: 2,
    name: '야놀자',
    team: 'SOS유닛',
    closingDate: '상시',
    applyDate: '2019-12-20',
    status: '면접탈락',
    distance: '삼성역 / 1h 30m',
    pay: '4000',
    review: '',
    recruitsite: '원티드',
    etc: '',
    jobplanet: '2.7',
    homepage: 'http://www.naver.com'
  },
  {
    id: 3,
    name: '미식의시대',
    team: 'ABC팀',
    closingDate: '상시',
    applyDate: '2020-01-30',
    status: '서류지원',
    distance: '종각역 / 1h 30m',
    pay: '2000',
    review: '5',
    recruitsite: '원티드',
    etc: '모회사: 코스콤, 모회서에서 분리된 초기 스타트업',
    jobplanet: '',
    homepage: 'http://www.naver.com'
  }
]

const list = (req, res, next) => {
  return res.json(sampleData)
}

const detail = (req, res, next) => {
  const id = parseInt(req.params.id)
  const result = sampleData.find((item) => item.id === id)
  return res.json(result)
}

const create = (req, res, next) => {
  const data = req.body

  sampleData.push({
    id: sampleData.length,
    ...data
  })

  res.status(200)
  return res.json(data)
}

const update = (req, res, next) => {
  const id = parseInt(req.params.id)
  const data = req.body

  const index = sampleData.findIndex((item) => item.id === id)
  sampleData[index] = { ...data }

  res.status(200)
  return res.json(data)
}

const remove = (req, res, next) => {
  const id = parseInt(req.params.id)

  const index = sampleData.findIndex((item) => item.id === id)

  const removeData = sampleData.splice(index, 1)

  res.status(200)
  res.json(removeData)
}

export { list, detail, create, update, remove }
