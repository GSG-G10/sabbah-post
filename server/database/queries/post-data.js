// eslint-disable-next-line import/extensions
const connection = require('../config/connection.js');

const postData = (name, textPost, linkImageUrl) => connection.query(
  `INSERT INTO posts (user_name, post_text, link_img, likes) VALUES ('${name}' , '${textPost}', '${linkImageUrl}');`,
);
module.exports = postData;
