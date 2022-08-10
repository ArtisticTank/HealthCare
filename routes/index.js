var express = require('express');
var router = express.Router();
const Status = require('http-status')
const {getPeopleBmiData, calculatePeopleBmiData} = require("../src/healthcare/service/healthcare_service");

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

router.post('/calculatePeopleBmiData', function (req, res, next) {
  try {
    res.status(Status.OK).json(calculatePeopleBmiData(req.body))
  } catch (e) {
    next(e)
  }
});

module.exports = router;
