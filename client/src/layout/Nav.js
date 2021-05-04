import '../Nav.css';
import { Link } from 'react-router-dom';
import book from '../book-icon.svg';
import ListCategories from '../components/ListCategories';

function Nav({isAuthenticated, setAuth}) {
  
  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("address");
    localStorage.removeItem("gender");
    localStorage.removeItem("name");
    localStorage.removeItem("phone_number");
    localStorage.removeItem("user_name");
    setAuth(false);
  }

  return (
    <nav>
      <Link to="/">
        <img src={book} alt="Book Icon"/>
      </Link>
      <ul className="nav-style">
        <Link className="nav-links" to="/list_books">
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
        {
          isAuthenticated ? 
          <a href="/" onClick={e => logout(e)}>Kilépés</a>
          :
          <>
            <Link className="nav-links" to="/Register">
            <li>
              Sign up
            </li>
            </Link>
            <Link className="nav-links" to="/sing_in">
            <li>
              Sign in
            </li>
            </Link>
          </>
        }
      </ul>
    </nav>
  );
}

export default Nav;
