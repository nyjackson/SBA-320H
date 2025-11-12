import { useState, useReducer, useEffect } from 'react'
import NavBar from './components/NavBar'
import Quote from './components/Quote'
import './App.css'

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

  const result = quoteList.map((q) => <Quote {...q}/>)

  return (
    <>
      <div id = "app">
        <NavBar />
        <div id ="list-quotes">
          {result}
        </div>
      </div>
    </>
  )
}

export default App
