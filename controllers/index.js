const router = require('express').Router()

const apiRoutes = require('./api')
const viewRoutes = require('./viewroutes')

router.use('/', viewRoutes)
router.use('/', apiRoutes)

module.exports = router