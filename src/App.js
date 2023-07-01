import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        {/* <Main /> */}
        <Catalog />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
