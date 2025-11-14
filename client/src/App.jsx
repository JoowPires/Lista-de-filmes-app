import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]); 
  
  useEffect(() => {

  const fetchPopularMovies = () => {
      
      // 4. O FETCH (A CHAMADA DE REDE)
      // Estamos chamando a rota do NOSSO back-end (que está em localhost:4000)
      fetch('http://localhost:4000/movies/popular')
        .then(response => {
          // Se a resposta não for 'ok' (ex: erro 500 no server), jogue um erro
          if (!response.ok) {
            throw new Error('Falha ao buscar dados do back-end')
          }
          // Converte a resposta de texto para um objeto JSON
          return response.json()
        })
        .then(data => {
          // 5. ATUALIZANDO O ESTADO
          // 'data' é o objeto JSON que seu back-end enviou.
          // O TMDB coloca a lista de filmes dentro de uma chave chamada 'results'.
          // Vamos adicionar um console.log para você ver o que está vindo
          console.log('Dados recebidos do back-end:', data)
          
          // Se o seu back-end enviou o objeto inteiro do TMDB, os filmes estão em 'data.results'
          setMovies(data.results) 
        })
        .catch(error => {
          // 6. LIDANDO COM ERROS
          // Se o 'fetch' falhar (ex: back-end desligado), o erro aparecerá aqui.
          console.error('Erro ao buscar filmes:', error)
        })
    }

    // Finalmente, chamamos a função que acabamos de criar:
    fetchPopularMovies()
    
  }, []) // O array vazio [] garante que isso rode SÓ UMA VEZ.

   // 7. A RENDERIZAÇÃO (O QUE O USUÁRIO VÊ)
  return (
    // Usando classes do Tailwind para centralizar e estilizar
    <div className="container mx-auto p-8">
      
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Filmes Populares
      </h1>

      {/* 8. O "MAP" (TRANSFORMANDO O ARRAY EM HTML) */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Mapeamos o array 'movies' do nosso estado. 
          Para cada 'movie' dentro dele, criamos um item <li> 
        */}
        {movies.map(movie => (
          <li key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* O TMDB nos dá o caminho da imagem, mas precisamos da URL base */}
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={`Pôster do filme ${movie.title}`}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{movie.title}</h2>
              <p className="text-sm text-gray-600 mt-2">Lançamento: {movie.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

