"use client";

import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Products from '@/Components/Products';
import Contact from '@/Components/Contact';
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Sections */}
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="products"><Products /></section>
      <section id="contact"><Contact /></section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923199001379"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp size={28} />
      
      </a>

      <style jsx>{`
        /* Floating WhatsApp Button */
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          padding: 10px 15px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .floating-whatsapp:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .number {
          display: none; /* hidden on small screens */
        }

        @media (min-width: 576px) {
          .number {
            display: inline; /* show number on larger screens */
          }
        }
      `}</style>
    </>
  );
}