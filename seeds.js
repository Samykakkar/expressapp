const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/apniSHop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(" MONGO Connection open ")
    })
    .catch(err => {
        console.log("Oh no MONGO error")
        console.log(err)
    })
// const p = new Product({
//     name: 'Apple',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Cabbage',
        price: 20,
        category: 'vegetable'
    },
    {
        name: 'Banana',
        price: 10,
        category: 'fruit'
    },
    {
        name: 'Mango',
        price: 60,
        category: 'fruit'
    },
    {
        name: 'Onion',
        price: 90,
        category: 'vegetable'
    },
    {
        name: 'Chocolate',
        price: 90,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })