import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { useStates } from './utilities/states'

import MovieList from "./MovieList"
import StartPage from "./StartPage"
import MainMenu from "./MainMenu"
import Receipt from "./Receipt"
import Page404 from "./Page404"
import Screenings from "./ScreeningList"
import InfoPage from "./InfoPage"

export default function App() {


  return <Routes>
    <Route path="/" element={<MainMenu />}>
      <Route index element={<StartPage />}></Route>
      <Route path="/movie-list" element={<MovieList/>}></Route>
      <Route path="/screening-list" element={<Screenings />}></Route>
      <Route path="/information" element={<InfoPage />}></Route>
      <Route path="/thank-you" element={<Receipt />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Route>
  </Routes>
}