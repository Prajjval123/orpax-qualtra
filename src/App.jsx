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
import ThankYouPage from "./pages/ThankYouPage";

const App = () => {
  return (
    <Router>
      {/* bg-[rgb(14,24,43)] */}
      <div className="bg-[#070C15] min-h-screen flex flex-col font-barlow text-white">
        <main className="flex-grow">
          <MainLayout>
            <div className="relative flex flex-col px-12 z-1000">
              <Header />
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="">
                    <Home />
                  </div>
                }
              />
              <Route
                path="/home"
                element={
                  <div className="">
                    <Home />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div className="animate-zoom-in">
                    <About />
                  </div>
                }
              />
              <Route
                path="/services"
                element={
                  <div className="animate-slide-left">
                    <Services />
                  </div>
                }
              />
              <Route
                path="/services/:serviceName"
                element={
                  <div className="animate-zoom-in">
                    <ServicePage />
                  </div>
                }
              />
              <Route
                path="/products"
                element={
                  <div className="animate-zoom-in">
                    <Products />
                  </div>
                }
              />
              <Route
                path="/projects"
                element={
                  <div className="animate-zoom-in">
                    <Projects />
                  </div>
                }
              />
              <Route
                path="/clients"
                element={
                  <div className="">
                    <Clients />
                  </div>
                }
              />
              <Route
                path="/testimonials"
                element={
                  <div className="animate-zoom-in">
                    <Testimonials />
                  </div>
                }
              />
              <Route
                path="/partners"
                element={
                  <div className="animate-slide-right">
                    <Partners />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="animate-fade-in-slow">
                    <Contact />
                  </div>
                }
              />
              <Route
                path="/thank-you"
                element={
                  <div className="animate-fade-in-slow">
                    <ThankYouPage />
                  </div>
                }
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
