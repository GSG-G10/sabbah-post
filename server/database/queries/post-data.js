// eslint-disable-next-line import/extensions
const connection = require('../config/connection.js');

const postData = (name, textPost, imgUrl) => connection.query(
  `INSERT INTO posts (user_name, post_text, link_img) VALUES ('${name}' , '${textPost}', '${imgUrl}');`,
);
module.exports = postData;
