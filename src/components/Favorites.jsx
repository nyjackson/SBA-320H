import Animal from './Animal'
function FavoritePictures({ state, dispatch }) {
  const favorites = state.favorites?.map((a) => 
    <Animal key = {a.id} p = {a} dispatch = {dispatch} favorites = {state.favorites}/>);
  return (
    <>
     {favorites.length > 0 ?
     <div><h1>Favorite Pictures</h1> {favorites}</div> : <h1>Favorite An Cat or Dog And View Them Here!</h1>}
    </>
  );
}

export default FavoritePictures;
