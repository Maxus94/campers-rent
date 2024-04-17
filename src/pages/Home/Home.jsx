import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homepageContainer}>
      <Link to="/catalog" className={css.homepageLink}>
        Book
      </Link>
    </div>
  );
};

export default Home;
