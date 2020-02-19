CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price MONEY,
    imageUrl TEXT
);

SELECT * FROM inventory;