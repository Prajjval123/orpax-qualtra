import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // If you enable ReCAPTCHA:
  // const [verified, setVerified] = useState(false);

  const form = useRef();
  const navigate = useNavigate();

  // GSAP references
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const detailRefs = useRef([]); // array of references for each detail box

  // Animate on mount
  useEffect(() => {
    // Timeline for heading + form
    const tl = gsap.timeline();

    // Heading fade in from below
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Form fade in from below (slightly after heading)
    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "<0.3" // start 0.3s after heading begins
    );

    // Detail boxes scroll-trigger animation
    detailRefs.current.forEach((detailBox, i) => {
      if (!detailBox) return;
      gsap.fromTo(
        detailBox,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: detailBox,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  // Send email
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          console.log("Form submitted:", formData);
          navigate("/thank-you");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  // For ReCAPTCHA, if you decide to enable it:
  // const onChange = (value) => {
  //   setVerified(!verified);
  // };
  const onChange = (value) => {
    console.log("ReCAPTCHA value:", value);
    setVerified(!verified);
  };

  return (
    <div>
      <div className="container mx-auto py-16 p-8 lg:px-0">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl lg:text-5xl font-bold text-center mb-8"
        >
          Contact Us
        </h2>
        <p className="text-md lg:text-lg text-center mb-12">
          Request a quote to get custom pricing. Please take a moment to fill in
          the form.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:mx-0 bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your Contact Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg h-40"
            />
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
              className="rounded-lg shadow-md"
              theme="dark"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-md font-medium text-lg transition-colors duration-300"
              // disabled={!verified}
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-12">
            {/* Detail Box 1 */}
            <div
              ref={(el) => (detailRefs.current[0] = el)}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Head Office (INDIA)
              </h3>
              <p>
                Contact Person:{" "}
                <span className="text-gray-400">Mr. Arnab Paul</span>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-400">
                  97-A, (FFB) Indraprastha Estate Sector-30-33, <br />
                  Faridabad, Haryana-121003
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="text-gray-400">
                  +91 9810041039, +91-9319644022
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="text-gray-400">
                  arnab.paul@orpaxqualtra.com
                </span>
              </p>
            </div>

            {/* Detail Box 2 */}
            <div
              ref={(el) => (detailRefs.current[1] = el)}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">CANADA</h3>
              <p>
                Contact Person:{" "}
                <span className="text-gray-400">Mr. Prasun Das</span>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-400">
                  11 Schooner Lane, Toronto, M1C5J3
                </span>
              </p>
              <p>
                Phone: <span className="text-gray-400">+1 647-771-4348</span>
              </p>
              <p>
                Email:{" "}
                <span className="text-gray-400 flex-wrap text-wrap">
                  prasun.das@orpaxqualtra.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
