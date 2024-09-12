import { generate } from "generate-password";

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
