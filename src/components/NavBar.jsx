import { useState } from "react";
//import {Routes, Route} from 'react-router'
function NavBar() {
  const [showNavBar, setNavBarState] = useState(true);


  return (
   <div id="nav-bar">
          <ul>
            <li>Home</li>
            <li>Quotes</li>
            <li>Favorites</li>
            <li>Discussion</li>
            <li>Wikipedia</li>
            <li>Account</li>
          </ul>
        </div>   
  );
}

export default NavBar;

{/* <div id="nav-bar">
          <ul>
            <li>Home</li>
            <li>Quotes</li>
            <li>Favorites</li>
            <li>Discussion</li>
            <li>Wikipedia</li>
            <li>Account</li>
          </ul>
        </div> */}


    //      <Routes>
    //     <Route path = "/" element =>Home</Route>
    //     <Route path = "/">Home</Route>
    //     <Route path = "/">Home</Route>
    //     <Route path = "/">Home</Route>
    // </Routes>