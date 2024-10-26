import express from "express";
import cors from 'cors';
import { findAllEvalStudentClasse, randomPassword, uuid } from "./services/functions.js";
import { hash } from "bcrypt";
import bcrypt from 'bcrypt';
import {sendGmail,isUserExist,isEleve,isStagiaire } from "./services/functions.js";
import { findClasse } from "./services/functions.js";
import jwt from "jsonwebtoken"
const salt = 10;

const app = express();
app.use(cors());
app.use(express.json());

//const dateDuJour=new Date().toLocaleString;

app.post('/login',async (req,res)=>{
    const email=req.body.email;
    const mdp=req.body.mdp
    
   if((await isUserExist(email,mdp)).erreur){
    
    console.log("il y a erreur");
    res.send('erreur')
   }
    
    else{
        if(!(await isUserExist(email,mdp)).isExist){
            console.log("Il n'existe pas");
            res.send("nExistePas");
        }
        else{
            const result=await isUserExist(email,mdp); 
            const user=result.userInfo;
            //const data=result.userInfo
            console.log("bon");
            
            const token=jwt.sign({user},"jwtSecretKey",{expiresIn:300})
            res.send({Login:true,token,user});
            }               
    }
})

//Verifier si le user est toujours authentifé ie un jeton valide

const verifyUser=async (req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token= authHeader && authHeader.split(' ')[1];
    
    if(!token){
        console.log("not token");
        
        res.status(401).send("vous n'etes pas autorisé")
    }
    try{
        const userDecoded=await jwt.verify(token,"jwtSecretKey");
        req.user=userDecoded;
        console.log(userDecoded);
        
        next();
    }
    catch(err){
        res.status(401).send("vous n'etes pas autorisé")
    }
}

app.get("/checkAuthentication",verifyUser,async(req,res)=>{
    const userSystem=await req.user?.user;
    if(!userSystem){
        console.log("no user");
        
        res.status(401).send("vous n'etes pas autorisé")                
    }
    try{
        const id_user= userSystem.id_utilisateur;
        const id_classe= await findClasse(id_user);
        const data=await findAllEvalStudentClasse(id_classe)
        console.log(data);
        
        await res.status(200).send({data,userSystem});
    }
    catch(err){
        res.status(500).send("Erreur interne au serveur")
    }
    
})

app.post('/insertStudent', async (req,res) => {
    
    sendGmail(req.body.email);
    res.status(200).send("success")

    // const sql = `INSERT INTO  eleve (id_eleve,nom,prenom,telephone,email,mdp) VALUES (?)`;
    // const sql2 = `INSERT INTO eleve_classe (id_eleve,id_classe) VALUES (?)`;
    // const id_eleve = uuid();
   
    // const hashedPassword = await bcrypt.hash(randomPassword(10).toString(), salt)

    // const values = [
    //     id_eleve,
    //     req.body.nom,
    //     req.body.prenom,
    //     req.body.telephone,
    //     req.body.email,
    //     hashedPassword
    // ]
    // const values2=[id_eleve,req.body.classe];
    // console.log(req.body);

    // db.query(sql, [values], (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(403).send("Error when inserting data");
    //     }
    //     else {
    //         db.query(sql2, [values2], (err2, result) => {
    //             if (err2) {
    //                 console.log(err2);
    //                 res.status(403).send("Error when inserting data");
    //             }
    //             else {
    //                 res.status(200).send("success");
    //             }
    //         })
    //     }
    // })
})

 app.post("/findClasse",async (req,res)=>{
    res.send(await findClasse(req.body.id_user))
    
});
app.post("/findAllEvalStudentClasse",async (req,res)=>{
    res.send(await findAllEvalStudentClasse(req.body.id_classe));
    
})

app.listen(5000, () => console.log("Listening..... 5000"));