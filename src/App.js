import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./footer/Footer";
import MenuPage from "./components/pages/MenuPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
