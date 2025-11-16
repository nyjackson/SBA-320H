import Quote from './Quote'
function FavoriteQuotes({ state, dispatch }) {
  const favorites = state.favorites?.map((f) => 
    <Quote q = {f} dispatch = {dispatch} favorites = {state.favorites}/>);
  return (
    <>
     {favorites.length > 0 ?
     <div><h1>Favorite Quotes</h1> {favorites}</div> : <h1>Favorite A Quote to Get Started!</h1>}
    </>
  );
}

export default FavoriteQuotes;
