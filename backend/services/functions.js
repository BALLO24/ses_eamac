import { generate } from "generate-password";
import nodemailer from 'nodemailer';
export function uuid(){ return new Date().getSeconds().toString(36) + Math.random().toString(36).substring(3);}


export function  randomPassword(taille){
    
    const password=generate({
        length:taille,
        numbers:true,
        symbols:false,
        uppercase:true,
        excludeSimilarCharacters:true,
        strict:true,
    })
    return password;
}

export function sendGmail(receiver){
    let transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
          user:process.env.SENDER_EMAIL,
          pass:process.env.SENDER_EMAIL_PASSWORD,
        }
        
    });

    let mailOptions={
        from :process.env.SENDER_EMAIL,
        to:receiver,
        subject:"Test",
        html:'<b>Ceci est un texte en gras</b> <a href="#">Click me</a>',
    }

    transport.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
}