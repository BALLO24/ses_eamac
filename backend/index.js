import express from "express";
import cors from 'cors';
import { db } from "./config/db.js";
import { randomPassword } from "./services/functions.js";
import { hash } from "bcrypt";

const app=express();
app.use(cors());
app.use(express.json());
db.connect((err)=>{!err ? console.log("Connection database OK"):console.log(err)})

app.post('/insertStudent',(req,res)=>{
    
    const sql= "INSERT INTO  eleve (`nom`,prenom,email,password) VALUES (?)";

    // randomPassword(10).then(hashpass=>console.log(hashpass))
    console.log(randomPassword(10));
    res.status(200).send("success")    
    // const values=[
    //     students.nom,
    //     students.prenom,,
    //     students.promotion,
    //     students.email,
    //     hashPassword ]

    
})

app.listen(5000, ()=>console.log("Listening....."));