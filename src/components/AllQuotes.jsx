import Quote from './Quote'
import { apiURL } from '../App'
import {useEffect} from 'react'
function AllQuotes({quoteList, dispatch}) {
   const result = quoteList.map((q) => <Quote key = {q._id}{...q}/>)
    async function grabQuotes(){
     try{
      const connection = await fetch(apiURL)
      const result = await connection.json()
      //console.log(result.results)
      dispatch({type: "SHOW_ALL", payload: result.results}) 
    }
    catch(e){
      console.log(e)
    }
  }
   useEffect(() => {
    grabQuotes()
   }, [])

  //console.log("quotelist", result)
  return <div id="list-quotes"><h1>All Quotes</h1> {result}</div>;
}

export default AllQuotes;
