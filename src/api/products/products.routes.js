const express = require('express')
const { findById,find,deleteById,save } = require('./products.controller')
const router = express.Router()

router.get('/',find)
router.get('/:productId',findById)
router.post('/',save)
router.delete('/:productId',deleteById)

module.exports = router