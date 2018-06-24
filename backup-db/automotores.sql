-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-06-2018 a las 19:30:16
-- Versión del servidor: 5.7.22-0ubuntu18.04.1
-- Versión de PHP: 7.1.18-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `automotores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motor`
--

CREATE TABLE `motor` (
  `nro_serie` int(50) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `cilindrada` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `motor`
--

INSERT INTO `motor` (`nro_serie`, `tipo`, `cilindrada`) VALUES
(39128312, 'Naftero', '1600cc'),
(39128313, 'Sedan', '1600cc'),
(39128319, 'Sedán', '1600cc'),
(1216465718, 'Gasolero', '2.2'),
(1231241154, 'Sedan', '1600cc'),
(1231551821, 'Naftero', '1.8'),
(1411246564, 'Naftero', '2.5T'),
(2131231941, 'Naftero', '2000cc');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

CREATE TABLE `vehiculo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dominio` varchar(9) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `version` varchar(20) NOT NULL,
  `nro_serie_motor` int(50) NOT NULL,
  `anio` int(4) NOT NULL,
  `valor` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vehiculo`
--

INSERT INTO `vehiculo` (`id`, `dominio`, `marca`, `modelo`, `tipo`, `version`, `nro_serie_motor`, `anio`, `valor`) VALUES
(1, 'AA122XP', 'Ford', 'Ka', 'Sedan', 'SE', 39128312, 2016, '190.000'),
(3, 'MGH058', 'Hyundai', 'Tucson', 'Utilitario', 'GLS+', 2131231941, 2013, '450.000'),
(4, 'KKE499', 'Toyota', 'Corolla', 'Sedán', 'XLI', 1231551821, 2012, '250.000'),
(5, 'KID302', 'Volkswagen', 'Vento', 'Sedán', 'Highline', 1411246564, 2012, '350.000'),
(6, 'LMP221', 'Ford', 'Ranger', 'Pick-up', 'SEL', 1216465718, 2013, '420.000'),
(7, 'AA122XL', 'Ford', 'Fiesta', 'Sedan', 'SE', 39128313, 2016, '190.000'),
(8, 'asas', 'Ford', 'Fiesta', 'Sedán', 'sel', 39128319, 2014, '250000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `motor`
--
ALTER TABLE `motor`
  ADD PRIMARY KEY (`nro_serie`);

--
-- Indices de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dominio` (`dominio`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `nro_serie_motor` (`nro_serie_motor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `fk_vehiculo_motor` FOREIGN KEY (`nro_serie_motor`) REFERENCES `motor` (`nro_serie`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
