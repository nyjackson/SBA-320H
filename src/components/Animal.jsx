function Animal({ p, state, dispatch, favorites }) {
  console.log("A Cat: ", p);

  const isFavorited = favorites?.some((fav) => fav._id == p._id) || false;

  function handleFavorite() {
    dispatch({ type: "FAVE", payload: p });
  }

  return (
    <div className="quote">
      <img src = {`${p.url}`}/>
      <button onClick={handleFavorite}>
        {isFavorited ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default Animal;
