DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int not null
    auto_increment,
    NAME VARCHAR
    (255) NOT Null,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);
