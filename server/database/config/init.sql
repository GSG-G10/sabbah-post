BEGIN;
DROP TABLE IF EXISTS posts CASCADE ;



CREATE TABLE posts(
id BIGSERIAL PRIMARY KEY NOT NULL,
user_name VARCHAR(100) NOT NULL,
post_text VARCHAR(500) NOT NULL,
link_img text);

INSERT INTO posts (user_name, post_text, link_img) VALUES ('ahmad' , 'this is text default about  this image', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');

COMMIT;