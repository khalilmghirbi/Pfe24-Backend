const express = require('express')
const route= express.Router()
const db= require('../models/index')
const User = require("../models/users")
const { where } = require('sequelize')
//const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const userController = require("../controlles/userController")

const PrivateKey = "this is private key nfjvfccjffdwxdwsj::;!!!:;!:;!:!:;;;l,jhhghvfxyateeki"

//// valider 
route.post('/register', (req, res, next) => {
    userController.register(req.body.username , req.body.email, req.body.user_pass)
    .then(response=>res.status(200).json(response))
    .catch(err=>res.status(400).json(err))
   /* db.User.count({ where: { email: req.body.email } }).then(doc => {
        if (doc != 0) {
            res.status(400).send(" !!this email is used!!");
        } else {
            bcrypt.hash(req.body.user_pass, 10).then(hashedPassword => {
                db.User.create({
                    username: req.body.username,
                    email: req.body.email,
                    user_pass: hashedPassword,
                }).then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err));
            });
        }
    });*/
});

////// login  validee
//const PrivateKey = "this is private key nfjvfccjffdwxdwsj::;!!!:;!:;!:!:;;;l,jhhghvfxyateeki"
route .post('/admin/login', (req,res,next)=>{
    userController.login(req.body.email , req.body.password
    )
    .then(token=>res.status(200).json({token:token}))
    .catch(err=>res.status(400).json({err:err}))
    /*db.User.findOne({ where: { email: req.body.email } }).then(user=>{
        if(!user){
            res.status(400).json({msg:"invalid email and password"})
        }else {
            bcrypt.compare(req.body.user_pass,user.user_pass).then(same=>{
                if(same){
                    let token = jwt.sign({id_user:user.id_user,username:user.id_user} , PrivateKey,{
                        expiresIn:"1min"
                    } )
                    res.status(200).json({token:token})
                } else {
                    res.status(400).json({msg:"invalid email and password"})
                }
            })
        }
    })*/
})

verifyToken = (req,res,next)=>{
    let token = req.headers.authorization
    if(!token){
        res.status(400).json({msg:'access rejected...!!!'})
    }
    try{
        jwt.verify(token,PrivateKey)
        next()
    } catch(e){
        res.status(400).json({msg:e})
    }
}

//// valider
route .post('/createuser',verifyToken,(req,res,next)=>{
    db.User.create({
        username:req.body.username,
        email:req.body.email,
        user_pass:req.body.user_pass
    }).then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

//// valider
route.get('/user/:id_user',verifyToken, (req,res,next)=>{
    db.User.findOne({where:{id_user:req.params.id_user}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.get('/users',verifyToken, (req,res,next)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

/// valider
route.put('/user/:id_user',verifyToken, (req,res,next)=>{
    db.User.update({
        username:req.body.username,
        email:req.body.email,
    },{where:{id_user:req.params.id_user}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
///valider 
route.delete('/user/:id_user',verifyToken, (req,res,next)=>{
    db.User.destroy({where:{id_user:req.params.id_user}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
module.exports= route