import { useState, useReducer, useEffect } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [favoriteList, dispatch] = useReducer(reducer, [])
  const [quoteList, setQuoteList] = useState([])
  const apiURL = "https://supernatural-api.onrender.com/"
  useEffect(async () => {
    try{
      const connection = await fetch(apiURL)
      const result = connection.json()
      console.log(result)
      setQuoteList(result)
    }
    catch(e){
      console.log(e)
    }
  }, [quoteList])


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
        <div>
          <p>Testing</p>
        </div>
      </div>
    </>
  )
}

export default App
