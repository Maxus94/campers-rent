import { NavLink } from "react-router-dom";
import CampersCatalog from "../CampersCatalog/CampersCatalog";

const Home = () => {
  return (
    <div>
      <div>
        <nav>
          Camper rent{" "}
          <ul>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
        <address>
          <ul>
            <li>+380501234567</li>
            <li>mail@gmail.com</li>
          </ul>
        </address>
      </div>
    </div>
  );
};

export default Home;
