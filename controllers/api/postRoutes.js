const router = require('express').Router()
const { Post } = require('../../server')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try{
        const post = await Post.create({...req.body, userID: req.session.userId})
        res.json(post)
    } catch (err) {
      res.status(500).json(err)  
    }
})

router.put('./:id', withAuth, async (req, res) => {
    try{
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
    if (affectedRows > 0) {
        res.status(200).end()
    }else
        res.status(500).json(err)    
    }
}
)