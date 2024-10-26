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
    userInfo:{
      
    }
  };
  const db=await createConnection();

  const sql = "SELECT * FROM utilisateur WHERE email= ? AND mdp = ? ";

  try{
    const [rows,fields]=await db.execute(sql, [email,mdp])
    if(rows.length>0){
      user.isExist=true,
      user.userInfo={...rows[0]}
      user.role=''
    }    
  }
  catch(e){
    user.erreur=true
  }
  return user
}

//verifier si le user est un eleve
export async function isEleve(idUser){
  let isEleve=false
  const db=await createConnection();
  const sql = "SELECT * FROM eleve WHERE id_eleve= ?";
  try{
    const [rows,fields]=await db.execute(sql, [idUser])
    if(rows.length>0){
      isEleve=true
    }    
  }
  catch(e){
    throw e;
  }
  return isEleve
}

//verifier si le user est un stagiaire
export async function isStagiaire(idUser){
  let isStagiaire=false
  const db=await createConnection();
  const sql = "SELECT * FROM stagiaire WHERE id_stagiaire= ?";
  try{
    const [rows,fields]=await db.execute(sql, [idUser])
    if(rows.length>0){
      isStagiaire=true
    }    
  }
  catch(e){
    throw e;
  }
  return isStagiaire;
}

//trouver la classe d'un élève
export async function findClasse(id_eleve) {
  const db=await createConnection();
  const sql="SELECT id_classe FROM eleve WHERE id_eleve=?";
  try{
    const[rows,fields]=await db.execute(sql,[id_eleve])
    const result=rows[0];
    const id_classe=result.id_classe
    return id_classe;
  }
  catch(e){
    throw e;
  }
}

//Trouver tous les evals associés à une classe
export async function findAllEvalStudentClasse(id_classe) {
  const db=await createConnection();
  const sql="SELECT cours.date,matieres.nom_matiere,utilisateur.nom as nom_enseignant,utilisateur.prenom as prenom_enseignant,cours.actif, evaluations.id_evaluation FROM cours LEFT JOIN evaluations ON cours.id_cours=evaluations.id_cours INNER JOIN matieres ON cours.id_matiere=matieres.id_matiere INNER JOIN utilisateur ON cours.id_enseignant=utilisateur.id_utilisateur WHERE cours.id_classe=?";

  //const sql="SELECT cours.id_cours FROM cours";

  try{
    const[rows,fields]=await db.execute(sql,[id_classe])    
    return rows;
  }
  catch(e){
    throw e;
  }
}