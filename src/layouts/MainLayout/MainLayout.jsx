import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={css.mainContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
