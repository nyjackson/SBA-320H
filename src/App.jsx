import { useState, useReducer, useEffect } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import AllQuotes from './components/AllQuotes'
import FavoriteQuotes from './components/FavoriteQuotes'
import Discussion from './components/Discussion'
import Account from './components/Account'
import RandomQuote from './components/RandomQuote'

export const apiURL = "http://api.quotable.io/quotes"

function App() {
  const [state, dispatch] = useReducer(reducer, {quotes: [], favorites:[]})
  
  useEffect(() => {
   //grabQuotes()
   //grabRandomQuote()
  }, [])

  function reducer(state, action) {
  switch(action?.type) {
    case "INIT":
      return { quotes: [], favorites: [] }
    case "SHOW_ALL":
      return { ...state, quotes: action.payload }
    case "RAND":
      return { ...state, quotes: action.payload }
    case "FAVE":
      const isFavorited = state.favorites.some(fav => fav._id == action.payload._id)
      if (isFavorited) {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav._id != action.payload._id)
        }
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

  return (
    <>
      <div id = "app">
        <NavBar />
        <Routes>
        <Route path = "/all" element = {<AllQuotes state = {state} dispatch = {dispatch}/>}/>
        <Route path = "/random" element = {<RandomQuote state = {state} dispatch = {dispatch}/>}/>
        <Route path = "/favorites" element = {<FavoriteQuotes state = {state} dispatch = {dispatch}/>}></Route>
        <Route path = "/discussions" element = {<Discussion/>}></Route>
        <Route path = "/account" element = {<Account/>}></Route>
        <Route path = "*" element = {<Home/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
