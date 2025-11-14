import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import moviespopular from './rotas/moviespopular.js'; 


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});
app.listen(port, () => {
  console.log(`Aplicativo Express rodando em http://localhost:${port}`);
});

app.use(moviespopular);