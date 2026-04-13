import { Route, Routes } from "react-router";
import Footer from "./components/layout/Footer/Footer";
import MainHeader from "./components/layout/Header/MainHeader";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
