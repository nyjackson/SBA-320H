import {useState} from 'react'
function Quote({q, dispatch}) {
  const [favorite, setFavorite] = useState(false)

  function handleFavorite(){
    setFavorite(!favorite)
    dispatch({type: "FAVE", payload: q})
  }
  return (
    <div className = "quote">
      <h2>{q.content}</h2>
      <h3>- {q.author}</h3>
      {q.tags != undefined && q.tags.length > 0 ? <p className = "tag">Tags: {q.tags.join(", ")}</p> : ''}
      <button onClick = {handleFavorite}>{!favorite ? "Favorite" : "Unfavorite"}</button>
    </div>
  );
}

export default Quote;

// pass down dispatch for comments and dispatch
