import "./style.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-space-between align-items-center">
        <Link to="/">
          <p className="header__logo">🐱</p>
        </Link>
        <nav className="header__nav">
          <ul className="header__list d-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/two-cats-to-love">Kitty Facemash</Link>
            </li>
            <li>
              <Link to="/kitties">Kitties</Link>
            </li>
            <li>
              <Link to="/loved-kitties">Loved Kitties</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
