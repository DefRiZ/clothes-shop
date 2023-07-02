import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Main from "./pages/Main";

import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
