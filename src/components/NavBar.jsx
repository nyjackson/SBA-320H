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
          <Link to = "/random" className = "link">Random</Link>
          <Link to = "/favorites" className = "link">Favorites</Link>
          <Link to = "/discussions" className = "link">Discussions</Link>
          <Link to = "/account" className = "link">Account</Link>
        </div>   
  );
}

export default NavBar;
