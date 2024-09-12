import express from "express";
import cors from 'cors';
import { db } from "./config/db.js";
import { randomPassword } from "./services/functions.js";
import { hash } from "bcrypt";
import bcrypt from 'bcrypt'
const salt=10;

const app=express();
app.use(cors());
app.use(express.json());
db.connect((err)=>{!err ? console.log("Connection database OK"):console.log(err)})

app.post('/insertStudent', async (req,res)=>{
     const sql= "INSERT INTO  eleve (`nom`,`prenom`,`email`,`promotion`,`password`) VALUES (?)";
    const hashedPassword=await bcrypt.hash(randomPassword(10).toString(),salt)
    
    const values=[
        req.body.nom,
        req.body.prenom,
        req.body.promotion,
        req.body.email,
        hashedPassword
    ]
    console.log(values);
    
    db.query(sql, [values],(err,result)=>{
        if(err){
            res.status(403).send("Error when inserting data")
            } 
        else{ 
            res.status(200).send("success");
        }
    })   
})

app.listen(5000, ()=>console.log("Listening....."));