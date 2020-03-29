import express from 'express'
const router = express.Router()

import { list } from '../../controllers/v1/company.controller'

router.get('/', list)

export default router
