CREATE DATABASE `jantunedb`;

USE `jantunedb`;

/*Table structure for table `identification` */

DROP TABLE IF EXISTS `identification`;

CREATE TABLE `identification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `age` int DEFAULT NULL,
  `sex` int DEFAULT NULL,
  `chestPainType` int DEFAULT NULL,
  `restingBP` int DEFAULT NULL,
  `cholesterol` int DEFAULT NULL,
  `fastingBS` int DEFAULT NULL,
  `restingECG` int DEFAULT NULL,
  `maxHR` int DEFAULT NULL,
  `exerciseAngina` int DEFAULT NULL,
  `oldpeak` float DEFAULT NULL,
  `stSlope` int DEFAULT NULL,
  `result` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`userId`),
  CONSTRAINT `user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `identification` */

insert  into `identification`(`id`,`userId`,`name`,`date`,`time`,`age`,`sex`,`chestPainType`,`restingBP`,`cholesterol`,`fastingBS`,`restingECG`,`maxHR`,`exerciseAngina`,`oldpeak`,`stSlope`,`result`) values 
(1,1,'Malika','2023-12-10','00:11:05',40,1,1,1,1,1,0,110,0,0,1,'Normal'),
(2,1,'David','2023-12-10','00:11:05',40,1,1,1,1,1,0,111,0,0,1,'Normal'),
(3,1,'Dere','2023-12-19','00:27:05',20,0,0,0,100,1,1,175,1,1,1,'Normal');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phoneNumber` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`userImage`,`phoneNumber`) values 
(1,'nandita','nandita@gmail.com','$2b$10$/fi236eEzqhJ2yTV7oIAnuVgMiY2MajiboqsHdEpGMkIpe7.Jf/bu',NULL,'081234567890'),
