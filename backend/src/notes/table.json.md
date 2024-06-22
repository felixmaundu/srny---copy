CREATE TABLE `drivers_data` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
  `address_line_1` VARCHAR(255) NOT NULL,
  `address_line_2` VARCHAR(255),
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `zip_code` VARCHAR(20) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `driving_license` VARCHAR(50) NOT NULL,
  `picture_url` VARCHAR(255),
  `license_picture_url` VARCHAR(255),
  `social_security` VARCHAR(50) NOT NULL,
  `social_security_card_number` VARCHAR(50) NOT NULL,
  `resume_url` VARCHAR(255),
  `supportive_document` JSON, -- Field for storing an array of other relevant data URLs
  -- Add any other driver data fields here
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);
