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
(1, 'painting' , 'I would like to share my single-stroke prowess with a canvass', 4),
(2, 'woodwork' , 'My cabinet-making skills have changed the world and I want to share it with someone', 3),
(3, 'football' , 'Teaching a bicycle kick to a neighbour would be great', 2),
(4, 'hotpot' , 'Showing a community member how to setup a hotpot brings a great feeling to me', 1),
(3, 'swimming', 'Able to teach various styles and techniques', 4);

CREATE TABLE "requests" (
  "request_id" SERIAL PRIMARY KEY,
  "category_id" INT NOT NULL,
  "request_name" VARCHAR(255) NOT NULL,
  "request_description" VARCHAR NOT NULL,
  "member_id" INT NOT NULL
);

INSERT INTO requests (category_id, request_name, request_description, member_id) VALUES
(1, 'drawing' , 'Needs help learning to draw on a graphic tablet', 4),
(2, 'remodelling' , 'My second baby has a crib that needs remodelling but I would love if someone could teach me how to do it', 3),
(3, 'swimming' , 'Would love it if anyone could help me with backstroke', 2),
(4, 'sushi' , 'Will appreciate learning how to make salmon-skin sushi from a potential friend', 1);

CREATE TABLE "groups" (
  "group_id" SERIAL PRIMARY KEY,
  "category_id" INT NOT NULL,
  "group_name" VARCHAR(255) NOT NULL,
  "group_description" VARCHAR NOT NULL,
  "member_id" INT NOT NULL
);

INSERT INTO groups (category_id, group_name, group_description) VALUES
()


INSERT INTO interactions (offer_id, request_id, offerer_id, requester_id) VALUES
( 1, NULL, 4, 3 ),
( 2, NULL, 3, 4 ),
( NULL, 3 , 1, 2 ),
( NULL, 4 , 2, 1 );

INSERT INTO comments (author_id, subject_id, comment) VALUES
(3, 4, 'Taught me so much about single-strokes to make a happy painting'),
(4, 3, 'Managed to build a high-quality cabinet out of wood ordered online with help'),
(2, 1, 'Learned so much about backstrokes in swimming it was great'),
(1, 2, 'Will appreciate learning how to make salmon-skin sushi from a potential friend');

COMMIT;