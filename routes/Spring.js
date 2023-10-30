const router = require('express').Router()


const {
    getAllSpring,
    getSpringById,
    createSpring,
    updateSpringById,
    deleteSpringById

} = require('../controllers/Spring')

// GET / get all
router.get('/', getAllSpring)

//Get /:id get by id
router.get('/:id', getSpringById)

//POST /create
router.post('/', createSpring)

//PUT /:id update by id
router.put('/:id', updateSpringById)

// DELETE /:id bread by id
router.delete('/:id', deleteSpringById)

module.exports = router