import '../Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav>
          <ul className="nav-style">
              <Link to="/" className="nav-links">
                  <li>Home</li>
              </Link>
              <Link to="/about" className="nav-links">
                <li>About</li>
              </Link>
              <Link to="/list_books" className="nav-links">
                <li>Books</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
