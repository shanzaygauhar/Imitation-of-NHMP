const express = require('express')
var router=express.Router();
const mongoose=require('mongoose');
/////////////////////////////

//////////////////////////
const Inventory=mongoose.model('Inventory');
const InventoryRegister=mongoose.model('InventoryRegister');
const InventoryCollection=mongoose.model('InventoryCollection');
const Member=mongoose.model('Member');

var bodyParser = require('body-parser')
router.use( bodyParser.json() );       
router.use(bodyParser.urlencoded({   
  extended: true
}));



router.get('/login',(req,res)=>{
    
	res.sendFile('C:\\Harris Files\\Semester 7\\SE\\Project\\Backend\\original\\views\\index.html');
	
})


router.post('/login',async (req,res)=>{
    console.log(req.body.username)
    let mem;
        await Member.find({
        "userName":req.body.username},function (err, docs) { 
            if (err){ 
                console.log(err); 
            } 
            else{ 
                console.log(docs); 
                mem=docs;
            }
        } )
        if(mem==''){
            res.sendFile('C:\\Harris Files\\Semester 7\\SE\\Project\\Backend\\original\\views\\index.html');
        }
        else if(mem[0].password==req.body.pass){
            res.sendFile('C:\\Harris Files\\Semester 7\\SE\\Project\\Backend\\original\\views\\RC.html'); 
        }
        else{
            res.render('/');
        }
    
})



router.get('/inventory',(req,res)=>{
    res.sendFile('C:\\Harris Files\\Semester 7\\SE\\Project\\Backend\\original\\views\\RC.html');
    /*function main(){
        inv = new Member({
            'userName':'harris',
            'password':'harris123'
            
        });
        //inv.save();
        passport.authenticate("local")( 
            req, res, function () { 
            //res.render("secret"); 
        }); 
    }
    main();*/
    
})

router.post('/inventory',(req,res)=>{
    
    insertRecordInventory(req,res);
    
})

async function insertRecordInventory(req,res){
    var num=Math.floor(Math.random() * 1000);
    var inventory=new Inventory();
    inventory.RCnumber= num;
    inventory.itemID=req.body.itemID;
    inventory.itemName=req.body.itemName;
    inventory.quantity=req.body.quantity;
    inventory.branchName=req.body.branchName;
    inventory.receiverName=req.body.receiverName;
    inventory.date=req.body.date;
    inventory.shopkeeperName=req.body.storeKeeperName;
    console.log(req.body.itemID);
    var inventoryCollection=new InventoryCollection();
    let inv;
        await InventoryCollection.find({
        "itemNumber":req.body.itemID},function (err, docs) { 
            if (err){ 
                console.log(err); 
            } 
            else{ 
                //console.log(docs); 
                inv=docs;
            }
        } )
        console.log(inv[0].totalQuantity);
        

    var inventoryRegister=new InventoryRegister();
    inventoryRegister.RCnumber=num;
    inventoryRegister.remainingQuantity=inv[0].totalQuantity-req.body.quantity;
    inventoryRegister.receiverName=req.body.receiverName;
    inventoryRegister.receiverSignature=req.body.receiverName;
    
    inventoryRegister.save((err,doc)=>{
        if(err){
            console.log("Error inserting the item into inventory register")
        }
    });

    inventory.save((err,doc)=>{
        if(!err){
            res.redirect('/inventory');
        }
        else{
            console.log("Error inserting the item")
        }
    });
    
}

module.exports=router;