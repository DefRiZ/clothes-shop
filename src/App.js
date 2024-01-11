import "./App.css";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Main from "./pages/Main";
import Cart from "./pages/Cart/Cart";

import { Route, Routes } from "react-router";

import { useSelector } from "react-redux/es/hooks/useSelector";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  const { isOpenDrawer } = useSelector((state) => state.filter);
  return (
    <div>
      <div className="App">
        <Header />
        {isOpenDrawer && <Drawer />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/items/:id" element={<SinglePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
