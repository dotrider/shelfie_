UPDATE inventory
SET name = $1, price = $2, imageurl= $3
WHERE id = $4;

SELECT * FROM inventory;