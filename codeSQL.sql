CREATE DATABASE devnotes;
USE devnotes;

CREATE TABLE notes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    body TEXT
);