const Joi = require('joi')
const db= require('../models/index')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')

const SchemaValidation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    user_pass: Joi.string().min(8).required() ,
})
exports.register = (username, email, user_pass) => {
    return new Promise((resolve, reject) => {
        let validation = SchemaValidation.validate({ username, email, user_pass });
        if (validation.error) {
            reject(validation.error.details[0].message);
        } else {
            db.User.count({ where: { email: email } }).then(doc => {
                if (doc != 0) {
                    reject(" !!this email is used!!");
                } else {
                    bcrypt.hash(user_pass, 10).then(hashedPassword => {
                        db.User.create({
                            username: username,
                            email: email,
                            user_pass: hashedPassword,
                        }).then((response) => resolve(response))
                            .catch((err) => reject(err));
                    }).catch(err => reject(err)); // Catch any errors in hashing password
                }
            }).catch(err => reject(err)); // Catch any errors in counting users
        }
    });


/*
exports.register= (username,email,user_pass)=>{
    return new Promise((resolve , reject)=>{
        let validation =SchemaValidation.validate({username,email,user_pass})
        if(validation.error){
            reject(validation.error.details[0].message)
        }

        db.User.count({ where: { email:email } }).then(doc => {
            if (doc != 0) {
                reject(" !!this email is used!!");
            } else {
                bcrypt.hash(user_pass, 10).then(hashedPassword => {
                    db.User.create({
                        username: username,
                        email: email,
                        user_pass: hashedPassword,
                    }).then((response) => resolve(response))
                        .catch((err) => reject(err));
                });
            }
        });


    })*/
}

const PrivateKey = "this is private key nfjvfccjffdwxdwsj::;!!!:;!:;!:!:;;;l,jhhghvfxyateeki"
exports.login= (email,user_pass)=>{
    return new Promise((resolve ,reject )=>{
        db.User.findOne({ where: { email:email } }).then(user=>{
            if(!user){
                reject(`invalid email ${email}`)
            }else {
                bcrypt.compare(user_pass,user.user_pass).then(same=>{
                    if(same){
                        //let token = jwt.sign({id_user:user.id_user,username:user.id_user} 
                        let token = jwt.sign({id_user:user.id_user,username:user.username} 
                            , PrivateKey,{
                            expiresIn:"48h"
                            //expiresIn:"2min"
                        } )
                        //resolve(token)
                        resolve({ token: token, username: user.username, id_user: user.id_user  });                        
                    } else {
                        reject("invalid email and password combination")
                    }
                })
            }
        })
    })
}


