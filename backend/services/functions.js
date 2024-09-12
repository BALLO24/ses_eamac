import { generate } from "generate-password";
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
