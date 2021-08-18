BEGIN;
DROP TABLE IF EXISTS posts CASCADE ;



CREATE TABLE posts(
id BIGSERIAL PRIMARY KEY NOT NULL,
user_name VARCHAR(100) NOT NULL,
text VARCHAR(500) NOT NULL,
link_img text NOT NULL,
likes VARCHAR(10) NOT NULL);

INSERT INTO posts (user_name, text, link_img, likes) VALUES ('ahmad' , 'this is text default about  this image', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' , 540);

COMMIT;