BEGIN;

DROP TABLE IF EXISTS members, categories, offers, requests, interactions, comments, groups, group_members CASCADE;

CREATE TABLE "members" (
  "member_id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) NOT NULL,
  "hashed_password" VARCHAR(255) NOT NULL,
  "member_name" VARCHAR(255) NOT NULL,
  "postcode" VARCHAR(7) NOT NULL,
  "avatar_url" VARCHAR
);

CREATE TABLE "categories" (
  "category_id" SERIAL PRIMARY KEY,
  "category_name" VARCHAR(255) NOT NULL
);

CREATE TABLE "offers" (
  "offer_id" SERIAL PRIMARY KEY,
  "category_id" INT NOT NULL,
  "offer_name" VARCHAR(255) NOT NULL,
  "offer_description" VARCHAR NOT NULL,
  "member_id" INT NOT NULL
);

CREATE TABLE "requests" (
  "request_id" SERIAL PRIMARY KEY,
  "category_id" INT NOT NULL,
  "request_name" VARCHAR(255) NOT NULL,
  "request_description" VARCHAR NOT NULL,
  "member_id" INT NOT NULL
);

CREATE TABLE "interactions" (
  "interaction_id" SERIAL PRIMARY KEY,
  "offer_id" INT,
  "request_id" INT,
  "offerer_id" INT NOT NULL,
  "requester_id" INT NOT NULL
);

CREATE TABLE "comments" (
  "comment_id" SERIAL PRIMARY KEY,
  "author_id" INT NOT NULL,
  "subject_id" INT NOT NULL,
  "comment" VARCHAR NOT NULL
);

CREATE TABLE "groups" (
  "group_id" SERIAL PRIMARY KEY,
  "category_id" INT NOT NULL,
  "group_name" VARCHAR(255) NOT NULL,
  "group_description" VARCHAR NOT NULL,
  "member_id" INT NOT NULL
);

CREATE TABLE "group_members" (
  "association_id" SERIAL PRIMARY KEY,
  "group_id" INT NOT NULL,
  "member_id" INT NOT NULL
);

ALTER TABLE "offers" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "offers" ADD FOREIGN KEY ("member_id") REFERENCES "members" ("member_id");

ALTER TABLE "requests" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "requests" ADD FOREIGN KEY ("member_id") REFERENCES "members" ("member_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("offer_id") REFERENCES "offers" ("offer_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("request_id") REFERENCES "requests" ("request_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("offerer_id") REFERENCES "members" ("member_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("requester_id") REFERENCES "members" ("member_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("author_id") REFERENCES "members" ("member_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("subject_id") REFERENCES "members" ("member_id");

ALTER TABLE "groups" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("group_id") REFERENCES "groups" ("group_id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("member_id") REFERENCES "members" ("member_id");

INSERT INTO members (email, hashed_password, member_name, postcode, avatar_url) VALUES
('regi@fac.com', 'password1' , 'Reggie', 'N4 1AA', 'https://previews.123rf.com/images/cteconsulting/cteconsulting1405/cteconsulting140500148/28827832-an-image-of-a-teddy-bear-face.jpg'),
('judith@fac.com', 'password2', 'Judith', 'N4 2BN', 'https://image.shutterstock.com/image-photo/big-bull-young-strong-have-260nw-754733863.jpg'),
('dan@fac.com', 'password3', 'Dan', 'N4 3PU', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'),
('kin@fac.com', 'password4', 'Kin', 'N4 4QR', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png');

INSERT INTO categories (category_name) VALUES
('Arts & Crafts'),
('Caring'),
('Cooking'),
('Design'),
('Disability'),
('DIY'),
('Education'),
('Environment & Sustainability'),
('Hair & Beauty'),
('Health Issues'),
('Homelessness'),
('Languages'),
('Loneliness & Isolation'),
('Migration'),
('Parenting'),
('Relationship Issues'),
('Sport'),
('Unemployment'),
('Wellness');

INSERT INTO offers (category_id, offer_name, offer_description, member_id) VALUES
(2, 'Caring Experience', 'I have experience caring for a child with Cerebral Palsy', 1),
(18, 'Bureaucracy', 'I have experienced insecure and temporary employment', 2),
(6, 'DIY', 'I have some basic DIY skills to offer', 3),
(12, 'Spanish Translation' , 'I am fluent in Spanish and have experience of translation', 4);

INSERT INTO requests (category_id, request_name, request_description, member_id) VALUES
(2, 'Carers', 'I have a disabled son and would like to connect with someone in a similar situation', 4),
(18, 'Redundancy', 'I have just been made redundant and would like help navigating the benefits system', 1),
(6, 'DIY', 'I would really appreciate some help adapting our bathroom for our disabled son', 4),
(12, 'Spanish Language Skills', 'I need some help filling out a form in spanish', 2);

INSERT INTO groups (category_id, group_name, group_description, member_id) VALUES
(17, 'Football', 'I would like to form a 5-a-side team to join a league', 1),
(8, 'Vegetable Garden', 'I would like to establish a community garden to grow vegeatbles', 2),
(7, 'Book Club', 'I would like to start a book club', 3),
(3, 'Hot Pot', 'I would like to start a hot-pot and sushi club', 4);


INSERT INTO interactions (offer_id, request_id, offerer_id, requester_id) VALUES
( 1, NULL, 1, 4 ),
( 2, NULL, 2, 1 ),
( NULL, 3 , 3, 4 ),
( NULL, 4 , 4, 2 );

INSERT INTO comments (author_id, subject_id, comment) VALUES
(1, 2, 'Judith was really patient and understanding in helping me navigate the unemployment benefits system'),
(2, 4, 'Kin helped me fill out a form in spanish in just a fraction of time it would have taken me otherwise!'),
(4, 1, 'It was great to talk about my experience of caring for a disabled child with someone else facing similar challenges'),
(4, 3, 'Dan had some great tips for addapting my bathroom for my disabled son');

COMMIT;