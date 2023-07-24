const router  = require('express').Router()
const { User, Post } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (res, req) => {
    try{
        const postData = await Post.findAll({ include: [User] })

        const posts = postData.map(post => post.get({ plain: true }))

        res.render('homepage', {posts})
    } catch(err) {
        res.statusCode(500).json(err)
    }
})

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params.id, { include: [User] })

        if(!postData) {
            res.status(404).end()
        }

        const post = postData.get({ plain: true })

        res.render('post', post)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/auth', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }

    res.render('auth')
})

module.exports = router 