//syntax
CREATE DATABASE databasename;
//-> MySQL
CREATE DATABASE informatika;
USE informatika;
//syntax
CREATE TABLE tablename(
    attrib1 type,
    attrib1 type,
    ...
);

//-> MySQL
CREATE TABLE dolgozo(
    personID int,
    name varchar(100),
    email varchar(60)
);

//->MySQL
SHOW DATABASES;
SHOW TABLES;
INSERT INTO dolgozo VALUES(101,'John Carpenter','j.c@cegem.com');
SELECT * FROM dolgozo;

//Adattípusok
//szöveg típusok
CHAR(n) - n max 255
VARCHAR(n) - n max 65535
--
TEXT(n), LONGTEXT, TINYTEXT
BLOB(n), MEDIUMBLOB, LONGBLOB

// számok
INT
FLOAT - keveset használjuk
DOUBLE
DECIMAL
--
MEDIUMINT, BIGINT, BIT

//kitüntetett számok
BOOLEAN
DATE
--
DATETIME, TIME, YEAR
TIMESTAMP

//Tábla attributúmainak módosítása
ALTER TABLE tablename ADD newAttrib tipus
ALTER TABLE tablename DROP COLUMN oldAttrib;
ALTER TABLE tablename MODIFY COLUMN attrib ujTipus;
