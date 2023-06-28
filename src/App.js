import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
