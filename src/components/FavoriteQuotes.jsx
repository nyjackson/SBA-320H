import Quote from './Quote'
function FavoriteQuotes({ state, dispatch }) {
  const favorites = state.favorites?.map((f) => 
    <Quote q = {f} state={state} dispatch = {dispatch} favorites = {state.favorites}/>);
  return (
    <>
      <h1>Favorite Quotes Page</h1>
      {favorites}
    </>
  );
}

export default FavoriteQuotes;
