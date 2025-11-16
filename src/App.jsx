import { useReducer } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AllCats from './components/AllCats'
import AllDogs from './components/AllDogs'
import Favorites from './components/Favorites'
// /search?limit=10&page=1

export const catApiURL = "https://api.thecatapi.com/v1/images/search?limit=10&page=1"
export const dogApiURL = "https://api.thedogapi.com/v1/images/search?limit=10&page=1"

function App() {
  const [state, dispatch] = useReducer(reducer, {pics: [], favorites:[]})

  function reducer(state, action) {
  switch(action?.type) {
    case "INIT":
      return { pics: [], favorites: [] }
    case "SHOW_ALL":
      return { ...state, pics: action.payload }
    case "RAND":
      return { ...state, pics: action.payload }
    case "FAVE":
      const isFavorited = state.favorites.some(fav => fav._id == action.payload._id)
      if (isFavorited) {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav._id != action.payload._id)
        }
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}
 return (
    <>
      <div id = "app">
        <NavBar />
        <Routes>
          <Route path = "/cats" element = {<AllCats state = {state} dispatch = {dispatch}/>}/>
          <Route path = "/dogs" element = {<AllDogs state = {state} dispatch = {dispatch}/>}/>
          <Route path = "/favorites" element = {<Favorites state = {state} dispatch = {dispatch}/>}></Route>
        {/* }/>
        <Route path = "/random" element = {<RandomQuote state = {state} dispatch = {dispatch}/>}/>
        <Route path = "/favorites" element = {<FavoriteQuotes state = {state} dispatch = {dispatch}/>}></Route> */}
        {/* <Route path = "/discussions" element = {<Discussion/>}></Route>
        <Route path = "/account" element = {<Account/>}></Route> */}
        {/* <Route path = "/random" element = {<Animal state = {state} dispatch = {dispatch}/>}/> */}
        <Route path = "*" element = {<Home/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
