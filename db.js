const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://deepparmar36611:l9rW7OiThAvUhyHy@notes.ehgf0tn.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", false); // if not use throws error

const connectToMongo=()=>
{
    mongoose.connect(mongoURI , ()=>{
        console.log("connected to mongo succesfully")
    })
}

module.exports = connectToMongo ;
