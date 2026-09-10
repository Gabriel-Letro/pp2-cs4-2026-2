import { Router } from 'express'

import * as controller from '../controllers/customerController'

const router = Router()

/* GET todos os clientes */
router.get('/', controller.retrieveAll)

/* GET um cliente pelo id */
router.get('/:id', controller.retrieveOne)

/* POST um novo cliente */
router.post('/', controller.create)

/* PATCH um cliente existente */
router.patch('/:id', controller.update)

/* DELETE um cliente */
router.delete('/:id', controller.remove)

export default router
