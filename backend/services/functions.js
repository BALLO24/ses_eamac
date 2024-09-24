import { generate } from "generate-password";
import nodemailer from "nodemailer";
//import { db } from "../config/db.js";
import { createConnection } from "../config/db.js";

//generer un identifiant unique
export function uuid() {
  return (
    new Date().getSeconds().toString(36) +
    Math.random().toString(36).substring(3)
  );
}

//generer un password aléatoire
export function randomPassword(taille) {
  const password = generate({
    length: taille,
    numbers: true,
    symbols: false,
    uppercase: true,
    excludeSimilarCharacters: true,
    strict: true,
  });
  return password;
}

export function sendGmail(receiver) {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: receiver,
    subject: "Test",
    html: '<b>Ceci est un texte en gras</b> <a href="#">Click me</a>',
  };

  transport.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

// Verifier si le user existe lors du login

export async function isUserExist(email,mdp) {
  const user = {
    erreur: false,
    isExist: false,
  };
  const db=await createConnection();


  const sql = "SELECT * FROM utilisateur WHERE email= ? AND mdp = ? ";

  try{
    const [rows,fields]=await db.execute(sql, [email,mdp])
    console.log("Resultats",rows);
    if(rows.length>0){
      user.isExist=true
    }
    
  }
  catch(e){
    user.erreur=true
    
  }
  return user
    // try{
    //   var newUser={...user}
    //   await db.query(sql, [email,mdp],(err,data)=>{
    //     if (err) {
          
    //       newUser.erreur=true
    //     }
    //     else if(data.length>0){
    //       newUser.isExist=true
    //     }
    //     else{
    //       newUser.erreur=false
    //       newUser.isExist=false
    //     }
    //   })
    //   return newUser

    // }
    // catch(e){
    //   console.log(e);

    // }
    
 // return newUser
}