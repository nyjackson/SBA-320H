import Quote from './Quote'
import { apiURL } from '../App'
import {useState, useEffect} from 'react'

function AllQuotes({state, dispatch}) {
  const [pageNumber, setPageNumber] = useState(1)

  const result = state.quotes?.map((q) => <Quote key = {q._id} q = {q} dispatch = {dispatch} favorites = {state.favorites}/>)
  
  function handlePageNav(sign){
    switch(sign){
      case '+':
        if(pageNumber > 0){
          setPageNumber(pageNumber + 1)
        }
        return
      case '-':
        if(pageNumber != 1){
          setPageNumber(pageNumber - 1)
        }
        return
    }
  }
  
  async function grabQuotes(){
     try{
      const connection = await fetch(apiURL+"?page="+pageNumber)
      const result = await connection.json()
      dispatch({type: "SHOW_ALL", payload: result.results}) 
    }
    catch(e){
      console.log(e)
    }
  }
   useEffect(() => {
    grabQuotes()
   }, [pageNumber])

  //console.log("quotelist", result)
  return <div id="list-quotes"><h1>All Quotes</h1> {result}
  <div id = "page-nav">
    <h4>Page:</h4>
    {pageNumber == 1 ? '': <button onClick = {() => {handlePageNav("-")}}>-1</button>}
    <p>{pageNumber}</p>
    <button onClick = {() => {handlePageNav("+")}}>+1</button>
  </div>
  </div>;
}

export default AllQuotes;
