"use client";
import { motion } from "framer-motion";

const services = [
  {
    name: "Tyre Replacement",
    description:
      "Expert tyre replacement using premium quality tyres for optimal safety and performance.",
    img: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Wheel Alignment",
    description:
      "Precise wheel alignment service to ensure straight driving and longer tyre life.",
    img: "https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Tyre Balancing",
    description:
      "Professional tyre balancing for vibration‑free rides and smooth handling.",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09lXbST1Ponx1WuVOUVGMm1SsPQP83vWpcw&s"

  },
  {
    name: "Car Inspection",
    description:
      "Comprehensive car inspection including brakes, suspension, and tyre health check.",
   img: "https://images.pexels.com/photos/4489703/pexels-photo-4489703.jpeg?auto=compress&cs=tinysrgb&w=1200"  
  }
];

export default function Services() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section bg-dark text-white py-5 text-center">
      <h2 className="text-center red mb-5 display-5 fw-bold">
        Our Premium Services
      </h2>

      <div className="container">
        <div className="row g-4">

          {services.map((service, i) => (
            <motion.div
              className="col-12 col-sm-6 col-md-3"
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div
                className="card text-white border-0 shadow"
                style={{
                  height: "350px",
                  backgroundImage: `url(${service.img || "https://via.placeholder.com/400x350?text=Service"})`,
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
                    borderRadius: "10px",
                  }}
                >
                  {/* Title */}
                  <h4 className="fw-bold text-danger mb-2 text-center">
                    {service.name}
                  </h4>

                  {/* Description */}
                  <p className="mb-3 text-center" style={{ fontSize: "0.95rem" }}>
                    {service.description}
                  </p>

                  {/* Contact Button */}
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