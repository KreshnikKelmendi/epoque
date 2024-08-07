import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./footer/Footer";
import MenuPage from "./components/pages/MenuPage";
import MeatPage from "./components/pages/MeatPage";
import SubMenu from "./components/navbar/SubMenu";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SubMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/meat" element={<MeatPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
