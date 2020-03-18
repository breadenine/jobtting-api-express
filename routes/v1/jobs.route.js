import express from 'express'
const router = express.Router()

import { getIndex, detail } from '../../controllers/v1/jobs.controller'

router.get('/', getIndex)

router.get('/:id', detail)

// router.get('/company', company)

export default router
