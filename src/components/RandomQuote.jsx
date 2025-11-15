import { useEffect } from "react";
import Quote from "./Quote";
import { apiURL } from "../App";

function RandomQuote({state, dispatch}) {
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
  }, []);

    return state.quotes.length > 0 ? (
    <Quote q={state.quotes[0]} dispatch={dispatch} favorites={state.favorites}/>
  ) : <p>Loading</p>
}

export default RandomQuote;
