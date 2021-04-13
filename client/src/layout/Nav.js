import '../Nav.css';
import { Link } from 'react-router-dom';
import book from '../book-icon.svg';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={book} alt="Book Icon"/>
      </Link>
      <ul className="nav-style">
        <Link className="nav-links" to="/">
          <li>
            Home
          </li>
        </Link>
        <Link className="nav-links" to="/books">
          <li>
            Books
          </li>
        </Link>
        <Link className="nav-links" to="/about">
          <li>
            About
          </li>
        </Link>
        <Link className="nav-links" to="/sing_up">
          <li>
            Sing up
          </li>
        </Link>
        <Link className="nav-links" to="/sing_in">
          <li>
            Sing in
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
