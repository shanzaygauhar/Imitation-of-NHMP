const mongoose=require('mongoose');

var memberSchema = new mongoose.Schema({
    userName :{
        type: String,
        } ,
    password :{ 
        type: String
        }
    
})

mongoose.model('Member',memberSchema);