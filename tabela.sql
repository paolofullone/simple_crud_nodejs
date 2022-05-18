CREATE DATABASE SuperTryunfo;

CREATE TABLE `characters` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `attr1` int(11) NOT NULL,
    `attr2` int(11) NOT NULL,
    `attr3` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 19 DEFAULT CHARSET = latin1;