import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CampersCatalog from "./pages/CampersCatalog/CampersCatalog";
import CampersFavorites from "./pages/CampersFavorites/CampersFavorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<CampersCatalog />} />
      <Route path="/favorites" element={<CampersFavorites />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
export default App;
