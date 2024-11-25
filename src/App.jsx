import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <MainLayout>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
