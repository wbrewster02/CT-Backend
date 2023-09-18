const User = require('../models/User')


const router = require('express').Router()

//GET all
router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        console.log('error retrieving user:', error)
        res.json({ message: 'error retrieving user'})
    }
})



module.exports = router