-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hoteldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hoteldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hoteldb` DEFAULT CHARACTER SET utf8 ;
USE `hoteldb` ;

-- -----------------------------------------------------
-- Table `hoteldb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` TINYINT(1) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `mobile_number` VARCHAR(20) NOT NULL,
  `logo_url` VARCHAR(45) NOT NULL,
  `birth_date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoteldb`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`room` (
  `id` INT NOT NULL,
  `price` DECIMAL NOT NULL,
  `room_type` VARCHAR(45) NOT NULL,
  `max_persons` INT NOT NULL,
  `is_active` TINYINT(1) NOT NULL,
  `has_baby_bed` TINYINT(1) NOT NULL,
  `has_tv` TINYINT(1) NOT NULL,
  `has_bath` TINYINT(1) NOT NULL,
  `has_fridge` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoteldb`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `room_id` INT NOT NULL,
  `date_from` DATE NOT NULL,
  `date_to` DATE NOT NULL,
  `person_count` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservation_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_reservation_room1_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `hoteldb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservation_room1`
    FOREIGN KEY (`room_id`)
    REFERENCES `hoteldb`.`room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoteldb`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reservation_id` INT NOT NULL,
  `mark` TINYINT(10) NOT NULL,
  `comment` VARCHAR(65) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_review_reservation1_idx` (`reservation_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_reservation1`
    FOREIGN KEY (`reservation_id`)
    REFERENCES `hoteldb`.`reservation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoteldb`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `event_type` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `date_time_start` DATETIME NOT NULL,
  `date_time_end` DATETIME NOT NULL,
  `price` DECIMAL NOT NULL,
  `max_persons` INT NOT NULL,
  `logo_url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hoteldb`.`event_record`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hoteldb`.`event_record` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  `time_from` DATETIME NOT NULL,
  `time_to` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_event_record_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_event_record_event1_idx` (`event_id` ASC) VISIBLE,
  CONSTRAINT `fk_event_record_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `hoteldb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_record_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `hoteldb`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
