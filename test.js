
const mongoose = require('mongoose')


const BlogPost = require('./models/BlogPost')


mongoose.connect('mongodb://127.0.0.1:27017/my_database', { useNewUrlParser: true })
    .then(() => {
        console.log("connected")
    })
    .catch((error) => {
        console.log("oh no")
        console.log(error)
    })




//BlogPost.create({

//    title: 'Lord of the Rings',
//    body: 'A book series by J. R. R. Tolkien.  It was made into movies based on the books.'

//}).then(result =>{

//    console.log(result)


//})

var id = "653add840b0d2e473e20bc15"
var id2 = "653adaa9381f2f4c2206a019"

BlogPost.findById(id2).exec()
    .then(items => console.log(items))
    .catch(err => {
        console.log("here is an error: " + err)
    })
    //Customer.create({ name: 'Rahul', orderCount: 5 })
    //.then(result => {
    //    console.log(result)
    //})


    //  mongodb://localhost:27017



    //.then(() => {
    //    console.log(`CONNECTED TO MONGO!`);
    //})
    //.catch((err) => {
    //    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    //    console.log(err);
    //})


