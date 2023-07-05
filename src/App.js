import "./App.css";
import Drawer from "./components/Drawer/Drawer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Main from "./pages/Main";

import { Route, Routes } from "react-router";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

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
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
