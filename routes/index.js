const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/status', function(req, res, next) {
  try {
    const memory = process.memoryUsage()
    const resource = process.resourceUsage()
    const combined = {
      memoryUsage: memory,
      resourceUsage: resource
    }
    console.debug(combined)
    res.status(200).json(combined)
  } catch (error) {
    console.error(error)
    res.status(500).json({"err": error.message})
  }
})

module.exports = router;
