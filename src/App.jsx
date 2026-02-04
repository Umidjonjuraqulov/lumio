import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Teachers from "./pages/Teachers"


export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("lumio_theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("lumio_theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
