import { useEffect } from "react";
import Quote from "./Quote";
import { apiURL } from "../App";

function RandomQuote({quoteList, dispatch}) {
  async function grabRandomQuote() {
    try {
      const connection = await fetch(apiURL + "/random");
      const result = await connection.json();
      dispatch({type: "RAND", payload: [...result]})
      //setRandomQuote(...result);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    grabRandomQuote();
  }, []);

  return(<Quote {...quoteList[0]}/>)
}

export default RandomQuote;
