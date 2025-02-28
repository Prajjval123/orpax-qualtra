import React, { useContext, useEffect, useState } from "react";
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import PopupModal from "./components/PopupModal";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check localStorage to see if we've already shown the popup
    const hasShownPopup = localStorage.getItem("hasShownPopup");
    if (!hasShownPopup) {
      // If no flag is set, show the popup
      setShowPopup(true);
    }
  }, []);
  // Handler for closing the popup
  const handleClosePopup = () => {
    // Set a flag so we don’t show it again
    localStorage.setItem("hasShownPopup", "true");
    setShowPopup(false);
  };
  return (
    <Router>
      <GlobalProvider>
        {/* bg-[rgb(14,24,43)] */}
        <div className="bg-[hsl(219,50%,5%)] min-h-screen flex flex-col font-barlow text-white">
          {showPopup && <PopupModal onClose={handleClosePopup} />}
          <main className="flex-grow">
            <MainLayout>
              <div className="relative flex flex-col">
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
                  path="/privacy policy"
                  element={
                    <div className="animate-zoom-in">
                      <PrivacyPolicy />
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
                    <div className="">
                      <Products />
                    </div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <div className="">
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
      </GlobalProvider>
    </Router>
  );
};

export default App;
