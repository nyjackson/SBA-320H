import Animal from './Animal'
import Information from './Information';

function FavoritePictures({ state, dispatch }) {
  const favorites = state.favorites?.map((a) => <div key = {a.id}>
  <Animal  p = {a} dispatch = {dispatch} favorites = {state.favorites}/>
  <Information p = {a} dispatch = {dispatch} favorites = {state.favorites}/>
  </div>
    );
  return (
    <div id = "favorites">
     {favorites.length > 0 ?
     <div><h1>Favorites</h1> {favorites}</div> : <h1>Favorite A Cat or Dog And View Them Here!</h1>}
    </div>
  );
}

export default FavoritePictures;
