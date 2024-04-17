import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <ul className={css.navigationContainer}>
        <li>
          <NavLink to="/" className={css.headerLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={css.headerLink}>
            Campers catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={css.headerLink}>
            Campers in favorites
          </NavLink>
        </li>
      </ul>
      <address className={css.adressContainer}>
        <ul className={css.adressList}>
          <li>
            <a href="tel:+380501234567">(+38)-050-123-45-67</a>
          </li>
          <li>
            <a href="mailto:mail@gmail.com">mail@gmail.com</a>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Header;
