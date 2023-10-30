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

async function updateSpringById(req, res) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Spring.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'spring updated' })
    } catch (error) {
        console.log('error updating spring:', error)
        res.json({ 'message': 'error updating spring' })
    }
}

async function deleteSpringById(req, res) {
    try {
        const { id } = req.params
        await Spring.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'spring deleted' })
    } catch (error) {
        console.log('error deleting spring:', error)
        res.json({ 'message': 'error deleting spring' })
    }
}

module.exports = {
    getAllSpring,
    getSpringById,
    createSpring,
    updateSpringById,
    deleteSpringById
}