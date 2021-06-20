-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 08 2021 г., 18:34
-- Версия сервера: 5.7.18
-- Версия PHP: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `reg`
--

-- --------------------------------------------------------

--
-- Структура таблицы `dogs`
--

CREATE TABLE `dogs` (
  `dog_id` int(5) NOT NULL,
  `people_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `breed` text NOT NULL,
  `gender` text NOT NULL,
  `birthdate` date NOT NULL,
  `weight` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `dogs`
--

INSERT INTO `dogs` (`dog_id`, `people_id`, `name`, `breed`, `gender`, `birthdate`, `weight`, `height`, `color`) VALUES
(13, 11, '1', '1', '1', '2020-12-12', 45, 66, 'Стандарт'),
(14, 11, '1', '1', '1', '2020-12-12', 45, 66, 'Стандарт');

-- --------------------------------------------------------

--
-- Структура таблицы `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `dog_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `food` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `people`
--

CREATE TABLE `people` (
  `people_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `nation` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `people`
--

INSERT INTO `people` (`people_id`, `name`, `surname`, `nation`, `email`, `password`) VALUES
(11, '1', '1', '1', '1@mail.ru', '1'),
(12, '1', '1', '1', '1@mail.ru', '1');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `dogs`
--
ALTER TABLE `dogs`
  ADD PRIMARY KEY (`dog_id`),
  ADD KEY `people_id` (`people_id`);

--
-- Индексы таблицы `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dog_id` (`dog_id`);

--
-- Индексы таблицы `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`people_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `dogs`
--
ALTER TABLE `dogs`
  MODIFY `dog_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `people`
--
ALTER TABLE `people`
  MODIFY `people_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `dogs`
--
ALTER TABLE `dogs`
  ADD CONSTRAINT `dogs_ibfk_1` FOREIGN KEY (`people_id`) REFERENCES `people` (`people_id`);

--
-- Ограничения внешнего ключа таблицы `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`dog_id`) REFERENCES `dogs` (`dog_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
