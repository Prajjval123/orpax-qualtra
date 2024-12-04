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
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    <Router>
      <div className="bg-[rgb(7,12,21)] text-white min-h-screen flex flex-col">
        <main className="flex-grow">
          <MainLayout>
            <div className="relative flex flex-col px-12 z-100">
              <Header />
            </div>
            <Routes>
              <Route
                path="/home"
                element={<div className="animate-fade-in"><Home /></div>}
              />
              <Route
                path="/about"
                element={<div className="animate-zoom-in"><About /></div>}
              />
              <Route
                path="/services"
                element={<div className="animate-slide-left"><Services /></div>}
              />
              <Route
                path="/services/:serviceName"
                element={<div className="animate-zoom-in"><ServicePage /></div>}
              />
              <Route
                path="/products"
                element={<div className="animate-zoom-in"><Products /></div>}
              />
              <Route
                path="/projects"
                element={<div className="animate-slide-left"><Projects /></div>}
              />
              <Route
                path="/clients"
                element={<div className="animate-zoom-in"><Clients /></div>}
              />
              <Route
                path="/testimonials"
                element={<div className="animate-zoom-in"><Testimonials /></div>}
              />
              <Route
                path="/partners"
                element={<div className="animate-slide-right"><Partners /></div>}
              />
              <Route
                path="/contact"
                element={<div className="animate-fade-in-slow"><Contact /></div>}
              />
            </Routes>
          </MainLayout>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
