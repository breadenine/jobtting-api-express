import express from 'express'
const router = express.Router()

import { getIndex, sample } from '../../controllers/v1/status.controller'

router.get('/', getIndex)

router.get('/sample', sample)

export default router
