-- ************************************** `USER`

CREATE TABLE `user`
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

CREATE TABLE `friendship`
(
 `ID_SENDER`    integer NOT NULL ,
 `ACCEPTED`     smallint NOT NULL ,
 `ID_RECIPIENT` integer NOT NULL ,

  PRIMARY KEY (`ID_SENDER`, `ID_RECIPIENT`),
  KEY `fkIdx_602` (`ID_SENDER`),
  CONSTRAINT `FK_602` FOREIGN KEY `fkIdx_602` (`ID_SENDER`) REFERENCES `user` (`ID`),
  KEY `fkIdx_632` (`ID_RECIPIENT`),
  CONSTRAINT `FK_632` FOREIGN KEY `fkIdx_632` (`ID_RECIPIENT`) REFERENCES `user` (`ID`)
);

-- ************************************** `POST`

CREATE TABLE `POST`
(
 `ID`           integer NOT NULL AUTO_INCREMENT ,
 `CONTENT`      varchar(255) NOT NULL ,
 `CREATOR_ID`   integer NOT NULL ,
 `RECIPIENT_ID` integer NOT NULL ,

  PRIMARY KEY (`ID`),
  KEY `fkIdx_432` (`CREATOR_ID`),
  CONSTRAINT `FK_432` FOREIGN KEY `fkIdx_432` (`CREATOR_ID`) REFERENCES `USER` (`ID`),
  KEY `fkIdx_462` (`RECIPIENT_ID`),
  CONSTRAINT `FK_462` FOREIGN KEY `fkIdx_462` (`RECIPIENT_ID`) REFERENCES `USER` (`ID`)
);






-- ************************************** `IMAGE`

CREATE TABLE `IMAGE`
(
 `ID`      integer NOT NULL AUTO_INCREMENT ,
 `PATH`    varchar(255) NOT NULL ,
 `POST_ID` integer NOT NULL ,

  PRIMARY KEY (`ID`),
  KEY `fkIdx_692` (`POST_ID`),
  CONSTRAINT `FK_692` FOREIGN KEY `fkIdx_692` (`POST_ID`) REFERENCES `POST` (`ID`)
);


-- ************************************** `COMMENT`

CREATE TABLE `COMMENT`
(
 `ID`      integer NOT NULL AUTO_INCREMENT ,
 `COMMENT` varchar(255) NOT NULL ,
 `POST_ID` integer NOT NULL ,
 `USER_ID` integer NOT NULL ,

  PRIMARY KEY (`ID`),
  KEY `fkIdx_662` (`POST_ID`),
  CONSTRAINT `FK_662` FOREIGN KEY `fkIdx_662` (`POST_ID`) REFERENCES `POST` (`ID`),
  KEY `fkIdx_722` (`USER_ID`),
  CONSTRAINT `FK_722` FOREIGN KEY `fkIdx_722` (`USER_ID`) REFERENCES `USER` (`ID`)
);
