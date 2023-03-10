const express = require('express')
const router = express.Router()
const { createPet, getAll, updateInfo, deletePet, getById } = require('../controllers/mascota')

router.use(express.json())

router.post('/', createPet)
router.get('/', getAll)
router.get('/:id', getById)
router.put('/:id', updateInfo)
router.delete('/:id', deletePet)

module.exports = router
