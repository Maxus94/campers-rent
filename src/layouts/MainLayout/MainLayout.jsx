// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default MainLayout;
