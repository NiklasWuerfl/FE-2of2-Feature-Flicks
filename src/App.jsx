import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { useStates } from './utilities/states'
import { kebabify } from "./utilities/kebabify";

import MovieList from "./MovieList"
import StartPage from "./StartPage"
import MainMenu from "./MainMenu"
import Receipt from "./Receipt"
import Page404 from "./Page404"
import Screenings from "./ScreeningList"
import InfoPage from "./InfoPage"
import Movie from "./Movie"
import SeatSelection from "./SeatSelection";

export default function App() {

  const s = useStates("main", {
    movies: [],
    screenings: [],
    categories: [],
    selectedCategory: "All",
    movieInfoScreenings: [],
  })

  useEffect(() => {
    (async () => {
      // fetch alll movies from the REST api
      let movies = await (await fetch("/api/movies")).json();
      // add a slug to be used in url routes to each movie
      for (let movie of movies) {
        movie.slug = kebabify(movie.title)
      }
      // store the movies in our state variable
      s.movies = movies;

      let screenings = await (await fetch("/api/screenings")).json();
      screenings.sort(({ time: aTime }, { time: bTime }) => {
        return aTime < bTime ? s.sortingOrders : -s.sortingOrders
      })
      s.screenings = screenings

      // evtl kritischerer Block?
      let movieInfoScreenings = s.screenings.map((screening) => {
        let movie = s.movies.find((m) => m.id === screening.movieId)
        return { ...movie, ...screening }
      });
      s.movieInfoScreenings = movieInfoScreenings

      let categories = await (await fetch("/api/categories")).json()
      s.categories = categories
    })()
  }, [])

  return <Routes>
    <Route path="/" element={<MainMenu />}>
      <Route index element={<StartPage />}></Route>
      <Route path="movie-list" element={<MovieList />}></Route>
      <Route path="movie/:slug" element={<Movie />}></Route>
      <Route path="screening-list" element={<Screenings />}></Route>
      <Route path="booking/:screeningId" element={<SeatSelection />}></Route>
      <Route path="information" element={<InfoPage />}></Route>
      <Route path="thank-you" element={<Receipt />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Route>
  </Routes>
}