import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homepageContainer}>
      <h1 className={css.title}>The best campers</h1>
      <p className={css.description}>
        We propose you service of search and rent of campers all around Ukraine.
        Campers for vacations, weekends and business trips, for small and big
        companies or families.
      </p>
      <Link to="/catalog" className={css.homepageLink}>
        Book
      </Link>
    </div>
  );
};

export default Home;
