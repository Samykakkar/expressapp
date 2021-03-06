const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
_id: new mongoose.Types.ObjectId()

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/apniSHop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(" MONGO Connection open ")
    })
    .catch(err => {
        console.log("Oh no MONGO error")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', { products })
})
app.get('/products/new',  (req, res) => {
    res.render('products/new')
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    res.render('products/show', { product })
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})