const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM posts;');

module.exports = getData;
