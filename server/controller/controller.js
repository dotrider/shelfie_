

module.exports = {

    getInventory:(req,res) => {
        const db = req.app.get('db');

        db.get_inventory().then(products => {
            res.status(200).send(products);
        });
    },

    addProduct:(req,res) => {
        const {name, price, imageurl} = req.body;
        const db = req.app.get('db');
        

        db.add_product([name, price ,imageurl]).then(product => {
            res.status(200).send(product);
        });
    },

    deleteProduct: (req,res) => {
        const {id} = req.params
        const db = req.app.get('db');

        db.delete_product(id).then(product => {
            res.status(200).send(product);
        });
    },

    updateProduct: (req,res) => {
        const {name, price, imageurl} = req.body
        const {id} = req.params
        const db = req.app.get('db');
        db.update_product([name, price, imageurl, id]).then( product => {
            res.status(200).send(product);
        })
    }
}

