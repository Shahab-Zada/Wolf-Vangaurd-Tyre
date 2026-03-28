"use client";
import { motion } from "framer-motion";

const tyres = [
  {
    name: "Car Tyres",
    description: "High-quality tyres designed for smooth city driving and fuel efficiency.",
    img: "https://images.pexels.com/photos/26727699/pexels-photo-26727699.jpeg"},
    {
    name: "SUV Tyres",
    description: "Tyres built for SUVs with excellent grip and enhanced stability.",
    img: "https://images.pexels.com/photos/33301894/pexels-photo-33301894.jpeg"
  },
  {
    name: "Performance Tyres",
    description: "Premium performance tyres for high-speed control and superior handling.",
    img: "https://images.pexels.com/photos/34357281/pexels-photo-34357281.jpeg"
  }
];

export default function Products() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section bg-dark text-white py-5">
      <h2 className="text-center red mb-5 display-5 fw-bold">
        Our Tyres
      </h2>

      <div className="container">
        <div className="row g-4">

          {tyres.map((tyre, i) => (
            <motion.div
              key={i}
              className="col-12 col-sm-6 col-md-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div
                className="card text-white border-0 shadow"
                style={{
                  height: "350px",
                  backgroundImage: `url(${tyre.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Overlay */}
                <div
                  className="w-100 h-100 d-flex flex-column justify-content-end p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 80%)",
                  }}
                >
                  {/* Title */}
                  <h4 className="fw-bold text-danger mb-2 text-center">
                    {tyre.name}
                  </h4>

                  {/* Description */}
                  <p className="mb-3 text-center" style={{ fontSize: "0.95rem" }}>
                    {tyre.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    className="btn btn-danger"
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}