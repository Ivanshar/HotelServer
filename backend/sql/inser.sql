--EVENT--

INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ('Спортивное', 'Футбол юниоры', 'Приглашаются все желающие посмотреть хорший футбол', '2019-12-12 14:00:00', '2019-12-12 22:00:00', '10', '700');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ('Бизнес', 'Маркетинг для вашего бизнеса', 'Лучшие практики от самых современных спикеров', '2019-12-18 17:00:00', '2019-12-18 14:00:00', '12', '200');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Спортивное', 'Волейбол', 'Приглашаются все желающие посмотреть хорший волейбол', '2019-11-12 11.00.00', '2019-11-12 14.00.00', '15', '200');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ('Образовательное', 'История узбекистана', 'Главный историк узбекистана приезжает к нам в отель, что б дать лекцию по истории своей родины', '2019-11-12 14.30.00', '2019-11-12 15.00.00', '5', '100');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Религиозное', 'Сжигание', 'Отлично провести время, вмести с христианами сжигающими ведьм', '2019-10-29 23.00.00', '2019-10-30 02.00.00', '199', '2000');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Спортивное', 'Гандбол', 'Приглашаются все желающие посмотреть хорший по гандболу', '2019-09-09 09.00.00', '2019-09-12 18.00.00', '3', '1000');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Политическое', 'Встреча с жириновским', 'Встреча с ведущим политическим спикером мира, обсуждение интересующих вопросов', '2019-10-10 14.00.00', '2019-10-12 21.00.00', '2', '200');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Бизнес', 'Нефтяной', 'Обсуждение современных erp в нефтяном бизнесе', '2019-08-08 14.00.00', '2019-08-08 23.00.00', '0', '150');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Образовательное', 'Высшая школа', 'Станите ну очень умным', '2019-05-01 19.00.00', '2019-05-01 22.00.00', '12', '100');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Спортивное', 'Футбол деды', 'Приглашаются все желающие посмотреть хорший футбол', '2019-12-04 12.00.00', '2019-12-04 18.00.00', '32', '250');
INSERT INTO `hoteldb`.`event` ( `event_type`, `name`, `description`, `date_time_start`, `date_time_end`, `price`, `max_persons`) VALUES ( 'Образовательное', 'История футбола', 'Основатель Румынского футбола расскажет что это такое', '2019-02-07 17.00.00', '2019-02-07 19.00.00', '21', '100');

--ROOM--

INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('101', '100', 'Классический с видом на море', '4', '1', '0', '1', '0', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('102', '100', 'Классический с видом на море', '4', '1', '0', '1', '0', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('103', '50', 'Классический', '3', '1', '1', '0', '1', '0');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('104', '50', 'Классический', '3', '1', '1', '1', '0', '0');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('105', '35', 'Классический', '2', '0', '0', '0', '0', '0');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('211', '652', 'Роскошный люкс', '6', '1', '0', '1', '1', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('212', '254', 'Люкс Premium', '5', '0', '1', '1', '1', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('213', '211', 'Люкс Hospitality', '4', '1', '1', '1', '1', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('225', '200', 'Люкс Hospitality', '4', '1', '0', '1', '1', '1');
INSERT INTO `hoteldb`.`room` (`id`, `price`, `room_type`, `max_persons`, `is_active`, `has_baby_bed`, `has_tv`, `has_bath`, `has_fridge`) VALUES ('301', '1200', 'Президентский люкс', '6', '1', '1', '1', '1', '1');



--User--

INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ('1', 'antoxa@gmail.com', 'antoxa', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Антон', 'Булахов', '+375291234584', '0', '99', '1975-09-09');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'vano@gmail.com', 'vano', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Иван', 'Ильяков', '+375294821345', '0', '0', '1986-02-15');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ('0', 'killer228@gmail.com', 'killer228', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Андрей', 'Жудкий', '+375291574123', '0', '2', '1999-05-05');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'lover@gmail.com', 'lover', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Алексей', 'Король', '+375297842135', '0', '5', '2000-08-08');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'petrosan@gmail.com', 'petrosan', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Анжелла', 'Дерзкая', '+375294854213', '0', '12', '2011-01-01');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'gopnic1@gmail.com', 'gopnic1', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Вика', 'Безусик', '+375291542134', '0', '21', '1965-05-18');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'ak47@gmail.com', 'ak47', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Ян', 'Трубодуров', '+375291478996', '1', '5', '1998-05-07');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'beerdrinker@gmail.com', 'beerdrinker', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Стася', 'Веселенская', '+375291274459', '0', '0', '2001-12-12');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '0', 'mashina@gmail.com', 'mashina', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Петр', 'Демонический', '+375291234213', '0', '15', '1999-11-11');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '1', 'admin@37.com', 'admin', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Егор', 'Астронавтенко', '+375291234201', '0', '70', '1995-03-23');
INSERT INTO `hoteldb`.`user` ( `role`, `email`, `login`, `password`, `first_name`, `last_name`, `mobile_number`, `blocked`, `discount`, `birth_date`) VALUES ( '1', 'ivshar@tut.by', 'ivshar', '$10$pSA1DbY0DPI5RPU2O9KXQuzVsr/al41iMJ3Ada8VYGVdG1T3lLcj2', 'Иван', 'Шарафанович', '+375291092062', '0', '99' ,'1991-05-22');
