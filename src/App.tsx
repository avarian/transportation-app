import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Kai from "./pages/Kai";

function App() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kai/:trainSlug" element={<Kai />} />
            <Route path="/kai" element={<Navigate to="/kai/serayu" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
