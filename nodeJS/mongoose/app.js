const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoose-test');
const validator = require("validator");
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim: true,
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator: function(val){
                // if(!val.includes('@')) throw new Error("This is not an Email")
                if(!validator.isEmail(val))
                    throw new Error("This is not an Email")
            },
        },
    },
    age:{
        type:Number,
        required:true,
        default:0,
    }
});

const User = mongoose.model("User", userSchema)

// const newUser = new User({name:"Maymay", email: "hkim@gmail.com", password:"  abcde", age:3});
// newUser.save().then(val => console.log(val))

// User.find().then(val => console.log("all data", val))
User.find({name: 'Maymay'})
.select("name -_id")
.then(val => console.log("all data", val))