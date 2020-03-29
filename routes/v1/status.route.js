import express from 'express'
const router = express.Router()

import { getIndex, sample, company } from '../../controllers/v1/status.controller'

router.get('/', getIndex)

router.get('/sample', sample)

router.get('/company', company)

export default router
