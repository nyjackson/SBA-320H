function Quote({q, dispatch, favorites}) {
  // Check if this quote is already favorited
  const isFavorited = favorites?.some(fav => fav._id == q._id) || false

  function handleFavorite() {
    dispatch({type: "FAVE", payload: q})
  }
  
  return (
    <div className="quote">
      <h2>{q.content}</h2>
      <h3>- {q.author}</h3>
      {q.tags?.length > 0 && <p className="tag">Tags: {q.tags.join(", ")}</p>}
      <button onClick={handleFavorite}>
        {isFavorited ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  )
}

export default Quote;

// pass down dispatch for comments and dispatch
