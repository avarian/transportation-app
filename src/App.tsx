import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Kai from "./pages/Kai";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/kai" element={<Kai />} />
          <Route path="*" element={<Navigate to="/kai" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
