const router = require('express').Router();
const { getData, postData } = require('./database/queries/index');

router.get('/getposts', (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      console.log(error.message)
      res.status(500).json({ msg: "Internal server error" });
    });
});

module.exports = router;