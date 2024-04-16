CREATE TABLE usuarios (
  id varchar(255) PRIMARY KEY UNIQUE NOT NULL,
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role tinyInt
);
