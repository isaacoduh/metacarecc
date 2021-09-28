CREATE TABLE `movies`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `title`          VARCHAR(100) NOT NULL ,
  `release_date` VARCHAR(50) NOT NULL ,
`opening_crawl` LONGTEXT NOT NULL,
`url`          VARCHAR(100) NOT NULL ,
  PRIMARY KEY (`id`)
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE `comments`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `movie_id`          INT NOT NULL ,
`content`          VARCHAR(500) NOT NULL ,
`ip_address` VARCHAR(100) NOT NULL,
`created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  FOREIGN KEY(movie_id) REFERENCES movies(id) ON DELETE CASCADE
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;


CREATE TABLE `characters`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(255) NOT NULL ,
  `height`          VARCHAR(100) NOT NULL ,
  `mass`          VARCHAR(100) NOT NULL ,
  `gender` 	VARCHAR(100) NOT NULL,
  `created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;