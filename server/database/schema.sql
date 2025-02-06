CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  
  
  password VARCHAR(255) NOT NULL,
  
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);


INSERT INTO user(username, firstname, lastname, email, password, is_admin)
VALUES
('jdoe', 'John', 'Doe', 'jdoe@example.com', 'pass1234', FALSE),
('asmith', 'Alice', 'Smith', 'asmith@example.com', 'securepass', FALSE),
('bmartin', 'Bob', 'Martin', 'bmartin@example.com', 'bobpass99', FALSE),
('cwilson', 'Charlie', 'Wilson', 'cwilson@example.com', 'charliepwd', TRUE),
('djohnson', 'David', 'Johnson', 'djohnson@example.com', 'david2024', FALSE),
('eroberts', 'Emma', 'Roberts', 'eroberts@example.com', 'emma_pass', FALSE),
('fmiller', 'Frank', 'Miller', 'fmiller@example.com', 'frankie88', TRUE),
('ganderson', 'Grace', 'Anderson', 'ganderson@example.com', 'gracepass', FALSE),
('hthomas', 'Henry', 'Thomas', 'hthomas@example.com', 'henrypass', FALSE),
('iwalker', 'Isla', 'Walker', 'iwalker@example.com', 'isla1234', FALSE);