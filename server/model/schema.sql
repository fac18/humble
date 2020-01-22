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
  "category_id" INT NOT NULL,
  "sharer_id" INT NOT NULL,
  "connector_id" INT NOT NULL
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
  "group_description" VARCHAR NOT NULL
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

ALTER TABLE "interactions" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("sharer_id") REFERENCES "members" ("member_id");

ALTER TABLE "interactions" ADD FOREIGN KEY ("connector_id") REFERENCES "members" ("member_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("author_id") REFERENCES "members" ("member_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("subject_id") REFERENCES "members" ("member_id");

ALTER TABLE "groups" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("group_id") REFERENCES "groups" ("group_id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("member_id") REFERENCES "members" ("member_id");

INSERT INTO members (email, hashed_password, member_name, postcode, avatar_url) VALUES
('regi@fac.com', 'password1' , 'Reggie', 'N154UY', 'https://previews.123rf.com/images/cteconsulting/cteconsulting1405/cteconsulting140500148/28827832-an-image-of-a-teddy-bear-face.jpg'),
('judith@fac.com', 'passowrd2', 'Judith', 'N153XF', 'https://image.shutterstock.com/image-photo/big-bull-young-strong-have-260nw-754733863.jpg'),
('dan@fac.com', 'password3', 'Dan', 'N154ZS', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'),
('kin@fac.com', 'password4', 'Kin', 'N159BT', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png');

COMMIT;