import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/catalog">Campers catalog</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">Campers in favorites</NavLink>
      </li>
    </ul>
  );
};

export default Header;
