import { Link } from "react-router";

function NavBar() {
  return (
    <div id="nav-bar">
      <h2 id="logo">Chat || Chien</h2>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/cats" className="link">
        Cats
      </Link>
      <Link to="/dogs" className="link">
        Dogs
      </Link>
      <Link to="/random" className="link">
        Random
      </Link>
      <Link to="/favorites" className="link">
        Favorites
      </Link>
    </div>
  );
}

export default NavBar;
