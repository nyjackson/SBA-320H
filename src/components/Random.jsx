import { catApiURL } from "../App";
import { dogApiURL } from "../App";
import { useState, useEffect } from "react";
import Animal from "./Animal";

function Random({ state, dispatch }) {
  const [flip, setFlip] = useState(Math.floor(Math.random() * 2));
  const dogOrCat = flip == 0 ? catApiURL : dogApiURL;

  let apiUrl = dogOrCat.split("/");
  apiUrl.pop();
  apiUrl.push("search?limit=1");
  apiUrl = apiUrl.join("/");

  useEffect(() => {
    grabRandomPic();
  }, [dispatch]);

  function handleReroll() {
    setFlip(Math.floor(Math.random() * 2));
    grabRandomPic();
  }
  async function grabRandomPic() {
    try {
      const connection = await fetch(apiUrl);
      const result = await connection.json();
      console.log("result", result);
      dispatch({ type: "RAND", payload: result });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Animal
        p={state?.pics[0]}
        dispatch={dispatch}
        favorites={state.favorites}
      />
      <button id="reroll-btn" onClick={handleReroll}>
        New Random Pic
      </button>
    </>
  );
}

export default Random;
