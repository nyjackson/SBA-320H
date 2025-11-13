import { useState, useReducer, useEffect } from 'react'
import {Routes, Route} from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import AllQuotes from './components/AllQuotes'
import FavoriteQuotes from './components/FavoriteQuotes'
import Discussion from './components/Discussion'

function App() {
  const [favoriteList, dispatch] = useReducer(reducer, [])
  const [quoteList, setQuoteList] = useState([])
  const apiURL = "http://api.quotable.io/quotes"

  useEffect(() => {
   grabQuotes()
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
console.log(quoteList)

  function reducer(state, action){
    console.log(action)
    switch(action?.type){
      case "INIT":
        console.log(action.payload)
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
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/all" element = {<AllQuotes/>}/>
        <Route path = "/favorites" element = {<FavoriteQuotes/>}></Route>
        <Route path = "/discussions" element = {<Discussion/>}></Route>
      </Routes>
      </div>
      
    </>
  )
}

export default App
