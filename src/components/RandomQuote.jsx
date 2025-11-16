import { useEffect } from "react";
import Quote from "./Quote";
import { apiURL } from "../App";

function RandomQuote({state, dispatch}) {

  function handleReroll(){
    grabRandomQuote()
  }
  async function grabRandomQuote() {
    try {
      const connection = await fetch(apiURL + "/random");
      const result = await connection.json();
      dispatch({type: "RAND", payload: [...result]})
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    grabRandomQuote();
  }, [dispatch]);

    return (
      <div id= "random">
      {state.quotes.length > 0 ? 
    <Quote q={state.quotes[0]} dispatch={dispatch} favorites={state.favorites}/>
   : <p>Loading</p>}
      <button id = "reroll-btn" onClick = {handleReroll}>New Random Quote</button>
      </div>
    )
}

export default RandomQuote;
