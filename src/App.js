import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [movie, setMovie] = useState({})

 useEffect(()=> {
 async function getMovies() {
   try {
    const res = await fetch('https://api.themoviedb.org/3/movie/76341?api_key=31dab1ca58484568ac09b8a656e2dd73')
    const data = await res.json()
    setMovie(data)
   } catch (error) {
     console.log(error)
   }
 }
getMovies()



 }, [])

console.log(movie.title)



  return (
    <div className="App">
      <h2>{movie.title}</h2>
    </div>
  );
}

export default App;
