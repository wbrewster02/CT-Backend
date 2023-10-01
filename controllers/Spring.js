const Spring = require('../models/Spring')

async function getAllSpring(req, res) {
    try {
        const spring = await Spring.find()
        res.json(spring)
    } catch (error) {
        console.log('error fetching Spring:', error)
        res.json({'message': 'error fetching Spring'})
    }
}

async function getSpringById(req, res) {
    try {
        const { id } = req.params
        const spring = await Spring.findById(id)
        res.json(spring)
    } catch (error) {
        console.log('error fetching Spring by id:', error)
        res.json({ 'message': 'error fetching Spring' })
    }
}

async function createSpring(req, res) {
    try {
        // if (!req.body.image) req.body.image = undefined
        await new Spring(req.body).save()
        res.status(201).json({ 'message': 'Spring created' })
    } catch (error) {
        console.log('error creating Spring:', error)
        res.json({ 'message': 'error creating Spring' })
    }
}

module.exports = {
    getAllSpring,
    getSpringById,
    createSpring
}