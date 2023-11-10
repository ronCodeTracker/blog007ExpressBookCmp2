

const mongoose = require('mongoose')

const express = require('express')

const { connectToDb, getDb } = require('./db')


const app = express()

let db

// connect
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("app listening on port 3000")
        })

        db = getDb()

    }
    else {
        console.log("error")
    }
})






app.get('/books', (req, res) => {

    //db.collection('books')

    res.json({mssg:"welcome to the api"})
})

