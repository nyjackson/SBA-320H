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
  const [quoteList, dispatch] = useReducer(reducer, [])
  const [faveList, setFaveList] = useState([])
  const [randomQuote, setRandomQuote] = useState("")

  useEffect(() => {
   //grabQuotes()
   //grabRandomQuote()
  }, [])

 
    
console.log(quoteList)
console.log(randomQuote)

  function reducer(state, action){
    console.log(action)
    switch(action?.type){
      case "INIT":
        return state
      case "SHOW_ALL":
        console.log("Action Payload", action.payload)
        state = [...action.payload]
        return state
      case "RAND":
        console.log("Random Quote", action.payload)
        return action.payload
      case "FAVES":
        return
      default:
        return;
    }
  }

  return (
    <>
      <div id = "app">
        <NavBar />
        <Routes>
        <Route path = "/all" element = {<AllQuotes quoteList = {quoteList} dispatch = {dispatch}/>}/>
        <Route path = "/random" element = {<RandomQuote quoteList = {quoteList} dispatch = {dispatch}/>}/>
        <Route path = "/favorites" element = {<FavoriteQuotes dispatch = {dispatch}/>}></Route>
        <Route path = "/discussions" element = {<Discussion/>}></Route>
        <Route path = "/account" element = {<Account/>}></Route>
        <Route path = "*" element = {<Home/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
