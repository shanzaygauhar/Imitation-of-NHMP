const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://harris:harris123@cluster0.iypo4.mongodb.net/InventoryManagement?retryWrites=true&w=majority',{useNewUrlParser: true},(err)=>{
    if(!err){console.log("mongoDB connected")}
    else(console.log("error connecting to mongoDB:"+err))
});

require('./inventory.model');
require('./inventoryRegister.model');
require('./inventoryCollection.model');
require('./member.model');