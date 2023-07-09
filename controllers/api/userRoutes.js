const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password 
        })

        req.session.save(() => {
            req.session.userId = newUser.username 
            req.session.loggedIn = true 

            res.json(newUser)
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        if(!user) {
            res.status(404).json({ message: 'User not found!'})
        }

        const validPW = user.checkPassword(req.body.password)

        if (!validPW) {
            res.status(400).json({ message: 'User not found!'})
        }

        req.session.save(() => {
            req.session.userId = user.userid
            req.session.username = user.username
            req.session.loggedIn = true

            res.json(user)
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router