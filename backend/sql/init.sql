-- Create the database (only if it doesn't already exist)
CREATE DATABASE IF NOT EXISTS employee_db;

-- Use the database
USE employee_db;

-- Create the employees table
CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  phone VARCHAR(20),
  position VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 1. Add the new 'FullName' column
ALTER TABLE employees ADD COLUMN FullName VARCHAR(100);

-- 2. Combine 'first_name' and 'last_name' into 'FullName' (if existing data exists)
UPDATE employees SET FullName = CONCAT(first_name, ' ', last_name); 

-- 3. Drop the old columns
ALTER TABLE employees DROP COLUMN first_name;
ALTER TABLE employees DROP COLUMN last_name;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

