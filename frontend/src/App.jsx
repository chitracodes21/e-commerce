import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainHeader from "./components/layout/MainHeader";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
