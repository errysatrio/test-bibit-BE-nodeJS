const router = require('express').Router();
const { detailControllers } = require('../controllers');

router.get('/', detailControllers.getDetail);

module.exports = router