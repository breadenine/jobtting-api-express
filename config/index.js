require('dotenv').config()

const debug = require('debug')('jobtting-api-express:server')

export default class Config {
  constructor() {}

  static get debug() {
    return debug
  }

  static get SERVICE_KEY() {
    return process.env.SERVICE_KEY
  }
}
