import express from 'express'
const router = express.Router()

import { list, detail, create, update, remove } from '../../controllers/v1/jobs.controller'

router.get('/', list)

router.get('/:id', detail)

router.post('/', create)

router.patch('/:id', update)

router.delete('/:id', remove)

export default router
