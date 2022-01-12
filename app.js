const fs= require("fs");
const path= require('path');
const http = require("http");
const express= require("express");
const { all } = require("express/lib/application");
const app=express();
app.use(express.urlencoded)
const port=80;
//pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
//express specific stuff
app.use('/static', express.static('static'));
//main
app.get('/',(req,res)=>{
    res.status(200).render('base.pug')
})
app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug')
})
app.get('/home',(req,res)=>{
    res.status(200).render('home.pug')
})
app.post('/contact', (req,res)=>{
    user_name=req.body.user_name;
    last_name=req.body.last_name;
    Adress=req.body.Adress;
    Email_ID=req.body.Email_ID;
    Mobile_number=req.body.Mobile_number;
    all=`User name is ${user_name}, Last name is ${last_name}, Adress is ${Adress}, Emiail ID is ${Email_ID}, Mobile_number is ${Mobile_number} \n\n`;
    fs.writeFileSync('output.txt', all);
  
})
app.listen(port,()=>{
    console.log("port started");
})
app.get('/About', (req,res)=>{
    res.render('About.pug')
})