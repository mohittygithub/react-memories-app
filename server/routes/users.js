import express from 'express'
import {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUser,
} from '../controllers/user-controller.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)

export default router
