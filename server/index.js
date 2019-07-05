require('dotenv').config({path: __dirname + '/../.env'})

const express = require('express')
const cors = require('cors')
const massive = require('massive')
const iCtrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Pulled data using Jedi data tricks')

    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`)
    })
})



app.get('/api/inventory', iCtrl.getInventory)
app.post('/api/product', iCtrl.addProduct)
app.delete('/api/inventory/:id', iCtrl.deleteProduct)