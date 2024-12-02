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
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    <Router>
      <div className="bg-[rgb(7,12,21)] text-white min-h-screen flex flex-col">
        
        <main className="flex-grow">
          <MainLayout>
          <div className="relative flex flex-col px-12">
      <Header />
      </div>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceName" element={<ServicePage />} />
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
