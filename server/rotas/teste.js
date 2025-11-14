import  Router  from "express";
import dotenv from 'dotenv';
dotenv.config();

const { CHAVE_API_FILMES } = process.env; 

const Rotateste = Router();

Rotateste.get('/teste', (req, res) => {
    let statuschaveapi;
    if (CHAVE_API_FILMES){console.log("Chave API está definida.")}    
    else {console.log('Chave API não está definida.')};
    res.json({ mensagem: 'Rota de teste funcionando!', statuschaveapi });
});

export default Rotateste;