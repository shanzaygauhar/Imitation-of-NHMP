const mongoose=require('mongoose');

var inventorySchema = new mongoose.Schema({
    RCnumber :{
        type: Number,
        unique: true} ,
    itemID :{ 
        type: Number
        },
    itemName : {
        type: String
        },
    quantity:{ 
        type: Number
        },
    branchName:{
        type: String
        },
    receiverName:{
        type: String
        },
    date: {
        type: String
        },
    shopkeeperName:{
        type: String
        }
})

mongoose.model('Inventory',inventorySchema);