import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./footer/Footer";
import MenuPage from "./components/pages/MenuPage";
import MeatPage from "./components/pages/MeatPage";
import SubMenu from "./components/navbar/SubMenu";
import BreakfastPage from "./components/pages/BreakfastPage";
import AppetiserPage from "./components/pages/AppetiserPage";
import Sallata from "./components/pages/Sallata";
import BurgersPage from "./components/pages/BurgersPage";
import Pasta from "./components/pages/Pasta";
import EpoqueDishesPage from "./components/pages/EpoqueDishesPage";
import ContactPage from "./components/pages/ContactPage";
import Coffe from "./components/pages/Coffe";
import Koktej from "./components/pages/Koktej";
import ScrollToTopButton from "./components/navbar/ScrollToTopButton";



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
            <Route path="/caffe" element={<Coffe />} />
            <Route path="/koktej" element={<Koktej />} />
            <Route path="/breakfast" element={<BreakfastPage />} />
            <Route path="/starters" element={<AppetiserPage />} />
            <Route path="/sallata" element={<Sallata />} />
            <Route path="/burgers-sandwiches" element={<BurgersPage />} />
            <Route path="/pasta" element={<Pasta />} />
            <Route path="/epoque-dishes" element={<EpoqueDishesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
