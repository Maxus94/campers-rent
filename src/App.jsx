import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CampersCatalog from "./pages/CampersCatalog/CampersCatalog";
import CampersFavorites from "./pages/CampersFavorites/CampersFavorites";
import { Modal } from "./Components/Modal/Modal";
import { useSelector } from "react-redux";
import { selectModal } from "./store/selectors";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  const modalIsShown = useSelector(selectModal);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CampersCatalog />} />
          <Route path="/favorites" element={<CampersFavorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {modalIsShown && <Modal />}
    </>
  );
}
export default App;
