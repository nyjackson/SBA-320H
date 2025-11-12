import { useState } from "react";
function NavBar() {
  const [showNavBar, setNavBarState] = useState(true);
  
  function handleNavBarVisibility(e) {
    setNavBarState(!showNavBar);
  }

  return (
    <>
      {showNavBar ? (
        <div id="nav-bar">
          <ul>
            <li>
              {" "}
              <button onClick={handleNavBarVisibility}>
                {showNavBar ? "Collapse" : "Expand"}
              </button>
            </li>
            <li>Home</li>
            <li>Quotes</li>
            <li>Favorites</li>
            <li>Discussion</li>
            <li>Wikipedia</li>
            <li>Account</li>
          </ul>
        </div>
      ) : (
        <ul>
          <li>
            {" "}
            <button onClick={handleNavBarVisibility}>
              {showNavBar ? "Collapse" : "Expand"}
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default NavBar;
