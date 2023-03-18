const path = require("path");
const express = require("express");
const router = express.Router();

let fruits=["banana","mango"]
let credentials=[{username:'teke',password:1234},{username:'mese',password:234}]
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','login','login.html'))

})
router.get('/add',(req,res,next)=>{
res.sendFile(path.join(__dirname,'../','login','addtolist.html'))

})
router.post('/postdata',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    for(let cred of credentials){
        if(cred.username==username&&cred.password==password){
          // res.redirect('back')
            res.send("user exist")


        }
        else{
          //  res.send("incorect")
   //res.redirect('/add') 
   credentials.push({username:username,password:password})
   res.redirect('/add') 
        }
    }
   
   // res.send("success")
   //  

})

router.post('/add', (req,res,next)=>{
    let fruit = req.body.fruit;
    if(fruits.indexOf(fruit)<0 && fruit)
        fruits.push(fruit);
    res.send(fruits);
});
let myarray={guest:['nuts',"legumes"],owners:['vegetables','nuts','fruits',"legumes"]}
for(let aut of myarray){
    for(let role in aut){
        
    }
}


module.exports = router;
