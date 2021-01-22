import express from 'express'
import {
  getMemories,
  createMemory,
  updateMemory,
  deleteMemory,
} from '../controllers/posts-controller.js'

const router = express.Router()

router.get('/', getMemories)
router.post('/', createMemory)
router.put('/:id', updateMemory)
router.delete('/:id', deleteMemory)

export default router
