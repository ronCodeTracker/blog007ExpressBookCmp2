



const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/my_database', { useNewUrlParser: true })

const app = new express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.listen(4000, () => {
    console.log("App listening on port 4000")
})

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname,      'pages/index.html'))
    res.render('index')
})



app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})


app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})


app.get('/posts/new', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('create')
})



app.post('/posts/store', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


