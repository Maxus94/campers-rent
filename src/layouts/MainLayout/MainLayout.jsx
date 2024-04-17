// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={css.mainContainer}>
      <Header />
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default MainLayout;
