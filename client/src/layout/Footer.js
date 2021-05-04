import '../Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
      <footer className="footer-container">
        <div className="delivery-container">
          <Link className="information-link" to="/delivery_information">
            <p>Szállítási információ</p>
          </Link>
        </div>
        <div className="social-container">
          <h3>Közösségi média</h3>
          <div className="social-icons">
            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="contact-container">
          <p>Kapcsolat</p>
          <p id="email-phone">
            Email: admin@admin.hu<br/>
            Telefon: 136756788
          </p>
        </div>
      </footer>
  );
}

export default Footer;
