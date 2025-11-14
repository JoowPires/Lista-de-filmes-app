import axios from "axios";
import { Router } from "express";
import dotenv from 'dotenv';
dotenv.config();

// 1. Cria o router e pega a chave
const moviespopular = Router();
const { CHAVE_API_FILMES } = process.env;

// 2. Define as opções da API
const options = {
 method: 'GET',
 url: 'https://api.themoviedb.org/3/movie/popular',
 headers: {
 accept: 'application/json',
  Authorization: 'Bearer ' + CHAVE_API_FILMES
 }
};

// 3. Define a rota que usa as opções
moviespopular.get('/movies/popular', async (req, res) => {
 try {
    // 4. Faz a chamada da API AQUI DENTRO da rota
 const response = await axios.request(options);
    
    // 5. Envia os dados dos filmes para o front-end
 res.json(response.data);
    
} catch (error) {
    // 6. Lida com qualquer erro
 console.error('Erro ao buscar filmes:', error.message); // Log mais limpo
 res.status(500).json({ error: 'Erro ao buscar filmes populares' });
 }
});

// 7. Exporta o router
export default moviespopular;