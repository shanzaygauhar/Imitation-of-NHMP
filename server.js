require('./models/db')
const express = require('express')
const mongoose=require('mongoose');
const path = require('path');
const inventoryController=require('./controllers/inventoryController');
const bodyParser=require('body-parser');
const InventoryCollection=mongoose.model('InventoryCollection');
const app=new express();

app.use(bodyParser.urlencoded({   
    extended: true
  }));
app.use( bodyParser.json()); 



app.listen(3000,function(){
    console.log("server started on port 3000" );
});


 /*function main(){
    inv = new InventoryCollection({
        'itemNumber':2,
        'totalQuantity':20,
        'price':100
    });
    inv.save();
}
main();*/

app.use(express.static('views'));
app.use('/css', express.static(__dirname + 'views/css'))
app.use('/fonts', express.static(__dirname + 'views/fonts'))
app.use('/js', express.static(__dirname + 'views/js'))
app.use('/images', express.static(__dirname + 'views/images'))
app.use('/',inventoryController)
//app.use(express.static(path.join(__dirname, 'views/images')));