import { useState } from "react";
import {Link} from 'react-router'
import logo from '../assets/react.svg'
function NavBar() {
  const [showNavBar, setNavBarState] = useState(true);


  return (
   <div id= "nav-bar">
    <h2 id = "logo">Q</h2>
          <Link to = "/" className = "link">Home</Link>
          <Link to = "/all" className = "link">All Quotes</Link>
          <Link to = "/favorites" className = "link">Favorites</Link>
          <Link to = "/discussions" className = "link">Discussions</Link>
          <Link to = "/account" className = "link">Account</Link>

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