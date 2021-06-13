const mongoose=require('mongoose');

var inventoryCollectionSchema = new mongoose.Schema({
    itemNumber : Number,
    totalQuantity : Number,
    price : Number
})

mongoose.model('InventoryCollection',inventoryCollectionSchema);
