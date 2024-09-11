import express from "express";
import cors from 'cors';
import { db } from "./config/db.js";
import insertStudent from './services/API.js';
const app=express();
app.use(cors());
app.use(express.json());
db.connect((err)=>{!err ? console.log("Connection database OK"):console.log(err)})

app.post('/insert',(req,res)=>{
    console.log(req.body);    
})

app.listen(5000, ()=>console.log("Listening....."));