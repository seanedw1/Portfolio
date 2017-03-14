# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.42)
# Database: myssl
# Generation Time: 2015-12-09 21:48:15 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table grades
# ------------------------------------------------------------

DROP TABLE IF EXISTS `grades`;

CREATE TABLE `grades` (
  `studentid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `studentsName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `studentsPercent` varchar(5) CHARACTER SET utf8 DEFAULT NULL,
  `studentsLetterGrade` varchar(5) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`studentid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;

INSERT INTO `grades` (`studentid`, `studentsName`, `studentsPercent`, `studentsLetterGrade`)
VALUES
	(1,NULL,'78','<span'),
	(2,'sena','98','<span'),
	(3,'sena','98','<span'),
	(4,'micheal','89','<span'),
	(5,'janet','98','A'),
	(6,'oniel','34','F'),
	(7,'0o','78','C'),
	(8,'lucas','94','A'),
	(9,'janet jackson','89','B'),
	(10,'fia','100','A'),
	(11,'fredie','74','C'),
	(12,'lindsay','34','F'),
	(13,'sean','67','D'),
	(14,'john','2','F');

/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users101
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users101`;

CREATE TABLE `users101` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `fname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `lname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users101` WRITE;
/*!40000 ALTER TABLE `users101` DISABLE KEYS */;

INSERT INTO `users101` (`userid`, `username`, `password`, `avatar`, `fname`, `lname`)
VALUES
	(9,'jason small3','76a57b8907e22b5132f7fa45687bf828','11145019_487186614790056_1062247607225790804_o.jpg',NULL,NULL),
	(10,'sean','f4a47049dda6840d54341dcae0b6d2c3','12004883_1656006207989393_3568469740415230022_n.jpg',NULL,NULL),
	(11,'sean','ac12963da81da64bfde9b8d09e555124','',NULL,NULL);

/*!40000 ALTER TABLE `users101` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
