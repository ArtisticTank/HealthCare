var express = require('express');
var router = express.Router();
const Status = require('http-status')
const {getPeopleBmiData} = require("../src/healthcare/service/healthcare_service");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/totalOverweightPeople', function (req, res, next) {
  try {
    res.status(Status.OK).json(getPeopleBmiData())
  } catch (e) {
    next(e)
  }
});

module.exports = router;
