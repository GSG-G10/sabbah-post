const router = require('express').Router();
const { getData, postData } = require('./database/queries/index');

router.get('/getposts', (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ msg: 'Internal server error' });
    });
});
router.post('/post', (req, res) => {
  console.log(req.body);
  const { name, postText, imgUrl } = req.body;
  postData(name, postText, imgUrl)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send({ msg: 'internal server error' });
    });
});
router.get('/post', (req, res) => {
  res.json('post Page');
});

module.exports = router;
