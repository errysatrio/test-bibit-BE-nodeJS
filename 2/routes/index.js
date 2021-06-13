const express = require('express')
const router  = express.Router()

const searchRoutes = require('./searchRoutes')
const detailRoutes = require('./detailRoutes')

router.get('/api', function(req,res) {
    res.status(200).json({
        message: 'You are connected to the server, refer to API documentation for further information'
    })
})

router.use('/api/detail',detailRoutes)
router.use('/api/search',searchRoutes)

module.exports = router;