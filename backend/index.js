import express from "express";
import cors from 'cors';
import { db } from "./config/db.js";
import { randomPassword, uuid } from "./services/functions.js";
import { hash } from "bcrypt";
import bcrypt from 'bcrypt'
const salt = 10;

const app = express();
app.use(cors());
app.use(express.json());
db.connect((err) => { !err ? console.log("Connection database OK") : console.log(err) })

app.post('/insertStudent', async (req, res) => {
    //res.status(200).send("success")

    const sql = `INSERT INTO  eleve (id_eleve,nom,prenom,telephone,email,mdp) VALUES (?)`;
    const sql2 = `INSERT INTO eleve_classe (id_eleve,id_classe) VALUES (?)`;
    const id_eleve = uuid();
   
    const hashedPassword = await bcrypt.hash(randomPassword(10).toString(), salt)

    const values = [
        id_eleve,
        req.body.nom,
        req.body.prenom,
        req.body.telephone,
        req.body.email,
        hashedPassword
    ]
    const values2=[id_eleve,req.body.classe];
    console.log(req.body);

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.log(err);
            res.status(403).send("Error when inserting data");
        }
        else {
            db.query(sql2, [values2], (err2, result) => {
                if (err2) {
                    console.log(err2);
                    res.status(403).send("Error when inserting data");
                }
                else {
                    res.status(200).send("success");
                }
            })
        }
    })
})

app.listen(5000, () => console.log("Listening....."));