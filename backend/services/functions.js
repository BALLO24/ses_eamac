import { generate } from "generate-password";
import bcrypt from 'bcrypt';

export async function  randomPassword(taille){
    const salt=10;
    
    // const password=generate({
    //     length:taille,
    //     numbers:true,
    //     symbols:true,
    //     uppercase:true,
    //     excludeSimilarCharacters:true,
    //     strict:true })
    const password=1212;

        
        const hashPassword= await bcrypt.hash(password.toString(),salt)
             return hashPassword

 
    }
