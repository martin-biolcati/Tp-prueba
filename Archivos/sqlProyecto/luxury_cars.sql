CREATE DATABASE  IF NOT EXISTS `luxury_cars` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `luxury_cars`;
-- MySQL dump 10.13  Distrib 5.7.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: luxury_cars
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `foto_de_perfil` varchar(200) DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Nelson','nelson@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://media.istockphoto.com/id/498549810/es/foto/de-toma-de-un-hombre-no-sonriente.jpg?s=612x612&w=0&k=20&c=qVEDT-MuwymQ3MZr17Rj6XLDnozs26bwCulst86ZlQw=',9435223,'2002-02-13','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(2,'Martin','martin@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://st4.depositphotos.com/1049680/19973/i/450/depositphotos_199737222-stock-photo-handsome-middle-age-man-with.jpg',53432425,'2003-04-22','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(3,'Bautista','bauti@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://volemcreixer.files.wordpress.com/2013/11/foto-julio-basulto-tamac3b1o-carnet.jpg',3445634,'2003-11-11','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(4,'Juan','juancho@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://media.istockphoto.com/id/462112713/es/foto/hombre-atractivo-vestido-informal-en-estudio-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=F4g4TpNvvNSvtWNexC-fXDQkBxZJfkAOsMr9wmdCcX0=',45423634,'2010-02-23','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(5,'Pepe','pepito@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://media.licdn.com/dms/image/C5603AQENlJ1UTeNGLQ/profile-displayphoto-shrink_800_800/0/1619798697932?e=2147483647&v=beta&t=m02cEhLeSFDZ4YeYLcX8ai5NFknWDYTCqtxdvtZINlI',9453456,'2001-03-30','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(6,'Ana','anita@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita-355x337.gif',4352328,'1993-01-11','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(7,'Andrea','andrea@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://es.visafoto.com/img/4x4-cm-passport-photo-example.jpg',4656734,'1982-02-04','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(8,'Manuel','manuel@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://t3.ftcdn.net/jpg/00/85/77/74/360_F_85777484_taiJMlalWD64cze9KAZGlRKRTXZYOlT7.jpg',9456345,'2003-06-16','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(9,'Sofia','sofia@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg',25568540,'2000-11-11','2023-05-08 19:40:43','2023-06-16 18:53:04',NULL),(10,'Gonzalo','gonza@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://media.licdn.com/dms/image/C4D03AQGBQGRCWdkY5w/profile-displayphoto-shrink_800_800/0/1658359365271?e=2147483647&v=beta&t=KuDFpcyIGfS3NyYhiG1kYmh490ghT_41T8Qad7G_dBQ',58643205,'2004-05-29','2023-05-08 19:40:43','2023-06-16 18:52:27',NULL),(65,'Carlos','c@gmail.com','$2a$12$Uc.Uo1xiC3P6RLXd6f5XqumQmyxhSqpP1/p5G3FcGOAV92NZluJ3W','https://i.pinimg.com/originals/79/7e/8d/797e8db0f734ec96f563af7994c96dfc.jpg',6423817,'2023-06-02','2023-06-02 16:08:38','2023-06-16 18:53:39',NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cliente_id` int(10) unsigned NOT NULL,
  `producto_id` int(10) unsigned NOT NULL,
  `comentario` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prodcuto_clientes` (`cliente_id`),
  KEY `fk_prodcuto_prodcutos` (`producto_id`),
  CONSTRAINT `fk_prodcuto_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`),
  CONSTRAINT `fk_prodcuto_prodcutos` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,2,1,'Muy lindo auto','2023-06-12 17:38:06','2023-06-16 16:35:10',NULL),(2,3,2,'Le compre el auto a mi mama y le encanto. Muy recomendable.','2023-06-12 17:38:06','2023-06-16 16:35:10',NULL),(3,10,3,'Lo compraria pero tiene mucho uso.','2023-06-12 17:38:06','2023-06-16 16:33:21',NULL),(4,3,4,'Hermoso auto. Lo compraria pero es muy caro','2023-06-12 17:38:06','2023-06-16 16:35:10',NULL),(5,2,5,'Auto recomendable para conductores avanzados','2023-06-12 17:38:06','2023-06-16 16:33:21',NULL),(6,10,6,'Lo quiero!!','2023-06-12 17:38:06','2023-06-16 16:33:21',NULL),(7,3,7,'Lo compre pero no me convencio.','2023-06-12 17:38:06','2023-06-16 16:35:10',NULL),(8,2,8,'Genial su ingenieria','2023-06-12 17:38:06','2023-06-16 16:33:21',NULL),(9,10,9,'Me gustaria probarlo.','2023-06-12 17:38:06','2023-06-16 16:33:21',NULL),(10,3,10,'Auto recomendable para familia.','2023-06-12 17:38:06','2023-06-16 16:35:10',NULL),(16,2,1,'Cuanto cuesta','2023-06-14 21:11:10','2023-06-16 16:33:21',NULL),(17,10,31,'Cuantos km tiene','2023-06-14 21:12:02','2023-06-16 16:33:21',NULL),(25,3,31,'Es de primer dueño?','2023-06-15 14:19:51','2023-06-16 16:35:10',NULL),(26,3,31,'Tuvo algun choque?','2023-06-15 14:21:59','2023-06-16 16:35:10',NULL),(27,10,30,'Que lindo auto','2023-06-15 14:22:45','2023-06-16 16:33:21',NULL),(28,3,31,'Donde lo puedo ir a ver','2023-06-15 18:09:05','2023-06-16 16:35:10',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cliente_id` int(10) unsigned NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `image` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_clientes` (`cliente_id`),
  CONSTRAINT `fk_productos_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Porsche 911 GT3','Auto usado por 1 anio en muy buen estado.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspMtwZaiEt5yPew03zhRc2c9jqA7fQ1KmOJUPY0gZTBsN5xRl2dioC1ivQD9AzXCKuAIKyDUZTcOt5FTmnEBc6XdGA'),(2,2,'LAMBORGHINI AVENTADOR SVJ','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://www.autonocion.com/wp-content/uploads/2021/07/Lamborghini-Aventador-LP-780-4-Ultimae-14-1130x636.jpg'),(3,3,'FERRARI 812 COMPETIZONE','Auto usado por 2 anios en muy buen estado.','2023-05-08 19:44:01','2023-06-12 18:45:52',NULL,'https://jancars.com/wp-content/uploads/2023/01/Ferrari-812-Superfast-1-jancars-alquiler-ferrari.png'),(4,4,'AUDI RSQ8','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://www.eventosmotor.com/wp-content/uploads/2021/01/audi-rs-q8-mansory-blog-premium-eventosmotor-4.jpg'),(5,5,'FORD F-150 RAPTOR','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://www.ford.cl/content/ford/cl/es_cl/home/performance/nueva-f-150-raptor/jcr:content/par/image_167086159/image.imgs.full.high.jpg/1638827393786.jpg'),(6,6,'BMW M8','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://imgd.aeplcdn.com/0x0/n/cw/ec/47278/bmw-m8-right-front-three-quarter15.jpeg'),(7,7,'LOTUS EMIRA','Auto usado por 1 anio en muy buen estado.','2023-05-08 19:44:01','2023-06-12 18:40:38',NULL,'https://cdn.imagin.studio/getImage?customer=ukcvsl&capVehicleType=car&capId=98903&zoomType=fullscreen&fileType=jpg&width=800&paintId=pspc0000'),(8,8,'ROLLS ROYCE PHANTOM','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://www.diariomotor.com/imagenes/picscache/750x/rolls-royce-phantom-23_750x.jpg'),(9,9,'PAGANI HUAYRA','Auto usado por 3 anio en muy buen estado.','2023-05-08 19:44:01','2023-06-12 18:49:57',NULL,'https://cdn.shopify.com/s/files/1/0649/4581/5809/products/Screenshot_1_ce3d9105-c133-4a5e-9a1b-80be5e6bf11f.jpg?v=1657695308'),(10,10,'Lamborghini Urus','Auto sin usar en perfectas condiciones.','2023-05-08 19:44:01','2023-06-05 17:56:29',NULL,'https://looksmartmodels.com/wp-content/uploads/2022/09/lamborghini-urus-performante_05.jpg'),(30,65,'Bugatti Chiron','Auto con 6 meses de uso','2023-06-13 17:44:51','2023-06-13 17:44:51',NULL,'https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4799f9106491ebb58ca3351f6df5c44a.jpg'),(31,65,'Maserati  GT','Auto nuevo recien llegado de italia','2023-06-13 18:27:32','2023-06-16 14:39:30',NULL,'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/54f4-110007534/ZAM57XSA8N1390732/217f352213ad2b585cac8d979640acfc.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16 17:28:02
