import '../Nav.css';
import { Link } from 'react-router-dom';
import book from '../book-icon.svg';
import ListCategories from '../components/ListCategories';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={book} alt="Book Icon"/>
      </Link>
      <ul className="nav-style">
        <Link className="nav-links" to="/books">
          <li id="dropdown">
            Books
            <div class="dropdown-content">
              <ListCategories/>
            </div>
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
