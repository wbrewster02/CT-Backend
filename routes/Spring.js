const router = require('express').Router()


const {
    getAllSpring,
    getSpringById,
    createSpring

} = require('../controllers/Spring')

// GET / get all
router.get('/', getAllSpring)

//Get /:id get by id
router.get('/:id', getSpringById)

//POST /create
router.post('/', createSpring)

//PUT /:id update by id

// DELETE /:id bread by id

module.exports = router