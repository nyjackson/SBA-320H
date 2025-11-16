import Animal from './Animal'
import {dogApiURL} from '../App'
import {useState, useEffect} from 'react'

function AllDogs({state, dispatch}) {
  const [pageNumber, setPageNumber] = useState(1)

  const result = state.pics?.map((q) => <Animal key = {q.id} p = {q} dispatch = {dispatch} favorites = {state.favorites}/>)
  
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
  
  async function grabDogs(){
     try{
      const connection = await fetch(dogApiURL)
      const result = await connection.json()
      console.log("result:", result)
      dispatch({type: "SHOW_ALL", payload: result}) 
    }
    catch(e){
      console.log(e)
    }
  }
   useEffect(() => {
    grabDogs()
   }, [pageNumber, dispatch])

  //console.log("quotelist", result)
  return <div id="list-quotes"><h1>Some Dogs</h1> {result}
  <div id = "page-nav">
    <h4>Page:</h4>
    {pageNumber == 1 ? '': <button onClick = {() => {handlePageNav("-")}}>-1</button>}
    <p>{pageNumber}</p>
    <button onClick = {() => {handlePageNav("+")}}>+1</button>
  </div>
  </div>;
}

export default AllDogs;
