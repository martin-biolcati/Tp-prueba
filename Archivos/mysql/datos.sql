CREATE SCHEMA `luxury_cars`;

USE `luxury_cars`;
CREATE TABLE `clientes`(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(20) NOT NULL,
email VARCHAR(30) NOT NULL,
password VARCHAR(200) NOT NULL,
foto_de_perfil VARCHAR(200),
dni INT NOT NULL UNIQUE,
fecha_de_nacimiento DATE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP NULL
);

USE `luxury_cars`;
INSERT INTO `clientes` (nombre, email, password, foto_de_perfil, dni, fecha_de_nacimiento)
VALUES (
('nelson', 'nelson@gmail.com', 'pepegrillo', 'images/', 9435223, '2002-02-13'),
('martin', 'martin@gmail.com', 'martin123', 'images/', 53432425, '2003-04-22'),
('bautista', 'bauti@gmail.com', 'bauti2345', 'images/', 3445634, '2003-11-11'),
('juan', 'juancho@gmail.com', 'juanchito', 'images/', 45423634, '2010-02-23'),
('pepe', 'pepito@gmail.com', 'pepe123', 'images/', 9453456, '2001-03-30'),
('ana', 'anita@gmail.com', 'anita234', 'images/', 4352328, '1993-01-11'),
('andrea', 'andrea@gmail.com', 'andrea7388', 'images/', 4656734, '1982-02-04'),
('manuel', 'manuel@gmail.com', 'manuel2003', 'images/', 9456345, '2003-06-16'),
('sofia', 'sofia@gmail.com', 'sofi939', 'images/', 25568540, '2000-11-11'),
('gonzalo', 'gonza@gmail.com', 'gonzalito23', 'images/', 58643205, '2004-05-29')
);

CREATE TABLE `productos`(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
cliente_id INT UNSIGNED NOT NULL,
nombre VARCHAR(50) NOT NULL, 
descripcion TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP NULL,
CONSTRAINT fk_productos_clientes FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

USE `luxury_cars`;
INSERT INTO `productos` (cliente_id, nombre, descripcion)
VALUES (
(1, 'Porsche 911 GT3', 'Auto usado por 1 anio en muy buen estado.'),
(2, 'LAMBORGHINI AVENTADOR SVJ', 'Auto sin usar en perfectas condiciones.' ),
(3, 'FERRARI 812 COMPETIZONE', 'Auto usado por 2 anios en muy buen estado.'),
(4, 'AUDI RSQ8', 'Auto sin usar en perfectas condiciones.' ),
(5, 'FORD F-150 RAPTOR', 'Auto sin usar en perfectas condiciones.'),
(6, 'BMW M8', 'Auto sin usar en perfectas condiciones.' ),
(7, 'LOTUS EMIRA', 'Auto usado por 1 anio en muy buen estado.'),
(8, 'ROLLS ROYCE PHANTOM', 'Auto sin usar en perfectas condiciones.' ),
(9, 'PAGANI HUAYRA', 'Auto usado por 3 anio en muy buen estado.'),
(10, 'Lamborghini Urus', 'Auto sin usar en perfectas condiciones.' )
);


CREATE TABLE `producto_clientes`(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
cliente_id INT UNSIGNED NOT NULL,
producto_id INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP NULL,
CONSTRAINT `fk_prodcuto_clientes` FOREIGN KEY(`cliente_id`) REFERENCES clientes(id),
CONSTRAINT `fk_prodcuto_prodcutos` FOREIGN KEY(`producto_id`) REFERENCES productos(id)
);

USE `luxury_cars`;
INSERT INTO `productos_clientes` (cliente_id, producto_id, comentario)
VALUES (
('1', '1', 'Muy lindo auto'),
('2', '2', 'Le compre el auto a mi mama y le encanto. Muy recomendable.'),
('3', '3', 'Lo compraria pero tiene mucho uso.'),
('4', '4', 'Hermoso auto. Lo compraria pero es muy caro'),
('5', '5', 'Auto recomendable para conductores avanzados'),
('6', '6', 'Lo quiero!!'),
('7', '7', 'Lo compre pero no me convencio.'),
('8', '8', 'Genial su ingenieria'),
('9', '9', 'Me gustaria probarlo.'),
('10', '10', 'Auto recomendable para familia.')
);
