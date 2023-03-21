import { useState, useEffect } from "react"
import Movie from "./Movie"

export default function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      setMovies(await(await(fetch('api/movies'))).json())
    })()
  }, [])

  const [greeting, setGreeting] = useState('Hello World!')

  return <div className="App">
    <h1>{greeting}</h1>
    <button
      onClick={() => setGreeting('Goodbye world!')}
    >Say goodbye</button>
    {movies.map(({ id, title, description }) => <Movie
      key={id}
      title={title}
      description={description}
    />)}
    </div>
}