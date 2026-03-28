"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track collapse state

  // Highlight navbar on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Scroll to section and close navbar
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsOpen(false); // Close navbar on link click
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-dark shadow-lg" : "bg-dark"
      } py-3 transition`}
    >
      <div className="container">
        <a className="navbar-brand text-danger fw-bold fs-4" href="#">
          Wolf Vanguard Tyre
        </a>

        {/* Toggle button */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Collapse */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li className="nav-item mx-2" key={item.id}>
                <button
                  className={`nav-link btn btn-link fw-semibold ${
                    active === item.id ? "text-danger" : "text-white"
                  }`}
                  onClick={() => handleScroll(item.id)}
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar-toggler {
          outline: none !important;
        }
        .transition {
          transition: all 0.4s ease;
        }
        .nav-link:hover {
          color: #ff4d4d !important;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}