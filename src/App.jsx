import { useReducer } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllCats from "./components/AllCats";
import AllDogs from "./components/AllDogs";
import Favorites from "./components/Favorites";
import Random from "./components/Random";

export const catApiURL =
  "https://api.thecatapi.com/v1/images/search?limit=10&page=";
export const dogApiURL =
  "https://api.thedogapi.com/v1/images/search?limit=10&page=";

function App() {
  const [state, dispatch] = useReducer(reducer, { pics: [], favorites: [], info: [] });

  function reducer(state, action) {
    switch (action?.type) {
      case "INIT":
        return { pics: [], favorites: [], info: [] };
      case "SHOW_ALL":
        return { ...state, pics: action.payload };
      case "RAND":
        return { ...state, pics: action.payload };
      case "INFO":
        console.log("payload,", action.payload)
        return { ...state, info: [...state.info, action.payload] };
      case "FAVE":
        const isFavorited = state.favorites.some(
          (fav) => fav.id == action.payload.id
        );
        if (isFavorited) {
          return {
            ...state,
            favorites: state.favorites.filter(
              (fav) => fav.id != action.payload.id
            ),
          };
        }
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  }
  return (
    <>
      <div id="app">
        <NavBar />
        <Routes>
          <Route
            path="/cats"
            element={<AllCats state={state} dispatch={dispatch} />}
          />
          <Route
            path="/dogs"
            element={<AllDogs state={state} dispatch={dispatch} />}
          />
          <Route
            path="/favorites"
            element={<Favorites state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            path="/random"
            element={<Random state={state} dispatch={dispatch} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
