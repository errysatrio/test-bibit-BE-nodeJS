const router = require('express').Router()
const { searchController, searchControllers } = require('../controllers');

router.get('/', searchControllers.getSearch);

module.exports = router