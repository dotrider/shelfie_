CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price MONEY,
    imageurl TEXT
);

SELECT * FROM inventory;