-- ************************************** `USER`

CREATE TABLE `USER`
(
 `ID`       integer NOT NULL AUTO_INCREMENT ,
 `NAME`     varchar(45) NOT NULL ,
 `LASTNAME` varchar(45) NOT NULL ,
 `EMAIL`    varchar(100) NOT NULL ,
 `PASSWORD` varchar(100) NOT NULL ,
 `PHONE`    varchar(10) NULL ,
 `BIRTHDAY` date NULL ,
 `ABOUT_ME` varchar(255) NULL ,

PRIMARY KEY (`ID`)
);


-- ************************************** `FRIENDSHIP`

CREATE TABLE `FRIENDSHIP`
(
 `ID_SENDER`    integer NOT NULL ,
 `ACCEPTED`     smallint NOT NULL ,
 `ID_RECIPIENT` integer NOT NULL ,

PRIMARY KEY (`ID_SENDER`, `ID_RECIPIENT`),
KEY `fkIdx_60` (`ID_SENDER`),
CONSTRAINT `FK_60` FOREIGN KEY `fkIdx_60` (`ID_SENDER`) REFERENCES `USER` (`ID`),
KEY `fkIdx_63` (`ID_RECIPIENT`),
CONSTRAINT `FK_63` FOREIGN KEY `fkIdx_63` (`ID_RECIPIENT`) REFERENCES `USER` (`ID`)
);

-- ************************************** `POST`

CREATE TABLE `POST`
(
 `ID`           integer NOT NULL AUTO_INCREMENT ,
 `CONTENT`      varchar(255) NOT NULL ,
 `CREATOR_ID`   integer NOT NULL ,
 `RECIPIENT_ID` integer NOT NULL ,

PRIMARY KEY (`ID`),
KEY `fkIdx_43` (`CREATOR_ID`),
CONSTRAINT `FK_43` FOREIGN KEY `fkIdx_43` (`CREATOR_ID`) REFERENCES `USER` (`ID`),
KEY `fkIdx_46` (`RECIPIENT_ID`),
CONSTRAINT `FK_46` FOREIGN KEY `fkIdx_46` (`RECIPIENT_ID`) REFERENCES `USER` (`ID`)
);






-- ************************************** `IMAGE`

CREATE TABLE `IMAGE`
(
 `ID`      integer NOT NULL AUTO_INCREMENT ,
 `PATH`    varchar(255) NOT NULL ,
 `POST_ID` integer NOT NULL ,

PRIMARY KEY (`ID`),
KEY `fkIdx_69` (`POST_ID`),
CONSTRAINT `FK_69` FOREIGN KEY `fkIdx_69` (`POST_ID`) REFERENCES `POST` (`ID`)
);


-- ************************************** `COMMENT`

CREATE TABLE `COMMENT`
(
 `ID`      integer NOT NULL AUTO_INCREMENT ,
 `COMMENT` varchar(255) NOT NULL ,
 `POST_ID` integer NOT NULL ,
 `USER_ID` integer NOT NULL ,

PRIMARY KEY (`ID`),
KEY `fkIdx_66` (`POST_ID`),
CONSTRAINT `FK_66` FOREIGN KEY `fkIdx_66` (`POST_ID`) REFERENCES `POST` (`ID`),
KEY `fkIdx_72` (`USER_ID`),
CONSTRAINT `FK_72` FOREIGN KEY `fkIdx_72` (`USER_ID`) REFERENCES `USER` (`ID`)
);
















