const { Pool } = require('pg');
require('env2')('./config.env');

const { DB_URL } = process.env;

if (!DB_URL) {
  throw new Error('link db not found >>');
}

const options = {
  connectionString: DB_URL,
  ssl: false,
};
const buildDB = new Pool(options);
module.exports = {buildDB}
