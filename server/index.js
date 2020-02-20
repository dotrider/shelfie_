require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, STR_CONNECTION} = process.env;
const {getInventory, addProduct, deleteProduct, updateProduct} = require('./controller/controller');

app.use(express.json());


massive(STR_CONNECTION).then(db => {
    app.set('db',db);
    console.log(`Connected to db`)
});



//Endpoints

app.get('/api/inventory', getInventory);
app.post('/api/inventory', addProduct);
app.delete(`/api/inventory/:id`, deleteProduct);
app.put(`/api/inventory/:id`, updateProduct);



app.listen(SERVER_PORT, () => console.log(`On port ${SERVER_PORT}`));
