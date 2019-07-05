module.exports = {
    getInventory(req,res){
        const db = req.app.get('db')
        db.get_inventory()
        .then(dbRes => res.status(200).send(dbRes))
        .catch(err => res.status(500).send(err))
    },
    addProduct(req,res){
        const db=req.app.get('db')
        const {name, price, image} = req.body
        db.create_product([name, price, image])
        .then(() => res.sendstatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct(req,res){
        const db=req.app.get('db')
        let {id} = req.params
        id = +id
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.sendStatus(500).send(err))
    }
}