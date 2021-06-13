const mongoose=require('mongoose');

var inventoryRegisterSchema = new mongoose.Schema({
    RCnumber :{
        type: Number,
        unique: true} ,
    remainingQuantity: Number,
    receiverName: String,
    receiverSignature: String,
})

mongoose.model('InventoryRegister',inventoryRegisterSchema);
