CREATE DATABSE IF NOT EXISTS taskdb;
USE taskdb;
CREATE TABLE IF NOT EXISTS task(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY_KEY(id)

);
INSERT INTO task (title, description) VALUES 
('var 1', 'some description'),
('var 2', 'some description 2');