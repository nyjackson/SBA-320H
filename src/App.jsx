import { useState, useReducer, useEffect } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import AllQuotes from './components/AllQuotes'
import FavoriteQuotes from './components/FavoriteQuotes'
import Discussion from './components/Discussion'
import Account from './components/Account'
import Quote from './components/Quote'

function App() {
  const [favoriteList, dispatch] = useReducer(reducer, [])
  const [quoteList, setQuoteList] = useState([])
  const [randomQuote, setRandomQuote] = useState("")

  const apiURL = "http://api.quotable.io/quotes"
  useEffect(() => {
   grabQuotes()
   grabRandomQuote()
  }, [])

  async function grabQuotes(){
     try{
      const connection = await fetch(apiURL)
      const result = await connection.json()
      console.log(result.results)
      setQuoteList(result.results) 
    }
    catch(e){
      console.log(e)
    }
  }
    async function grabRandomQuote(){
     try{
      const connection = await fetch(apiURL+"/random")
      const result = await connection.json()
      setRandomQuote(...result)
    }
    catch(e){
      console.log(e)
    }
  }
console.log(quoteList)
console.log(randomQuote)

  function reducer(state, action){
    console.log(action)
    switch(action?.type){
      case "INIT":
        console.log(action.payload)
        return
      case "SHOW_ALL":
        console.log(action.payload)
        return
      case "RAND":
        grabRandomQuote()
        return state
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
        <Route path = "/all" element = {<AllQuotes dispatch = {dispatch}/>}/>
        <Route path = "/random" element = {<Quote {...randomQuote}/>}/>
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
