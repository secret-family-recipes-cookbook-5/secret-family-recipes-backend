const User = require('../users/users-model')
const router = require('express').Router()
const { restricted } = require('../auth/auth-middleware')

router.get('/:id', restricted, async (req, res, next) => {
    try {
        const user = await User.findByUserId(req.params.id)
        if (!user) {
            res.status(404).json({
                message: "user not found"
            })
        } else {
            res.json(user)
        }
    } catch (err) {
        next(err)
    }
        
})

router.put('/:id', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = router