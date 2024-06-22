CREATE TABLE users (
  id NUMBER(10) GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) NOT NULL PRIMARY KEY,
  first_name VARCHAR2(100) NOT NULL,
  last_name VARCHAR2(100) NOT NULL,
  email VARCHAR2(255) NOT NULL UNIQUE,
  password VARCHAR2(255) NOT NULL,
  role VARCHAR2(50)
);


INSERT INTO users (first_name,last_name,email ,password, role ) VALUES (
'John', 'Doe', 'john.doe@example.com', 'secure_password', 'user'
);
INSERT INTO users (first_name,last_name,email ,password, role ) VALUES (
'main', 'api', 'apimain90@gmail.com', '123456', 'admin'
);
INSERT INTO users (first_name,last_name,email ,password, role ) VALUES (
'api', 'Livescore', 'apiforlivescore@gmail.com', '123456', 'admin'
);
INSERT INTO users (first_name,last_name,email ,password, role ) VALUES (
'apim new', 'm15361', 'apim15361@gmail.com', '123456', 'admin'
);

select * from users;

