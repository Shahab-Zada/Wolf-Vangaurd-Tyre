"use client";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  // Scroll to Products section
  const goToProducts = () => {
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Framer motion animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Carousel fade interval={4000}>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 hero-slide"
          src="/images/slide3.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption
          className="hero-caption text-center"
          style={{ top: "65%" }} // slightly lower than center
        >
          <motion.h1
            className="fw-bold text-danger"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Premium Tyres for Your Car
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Drive Safe. Drive Powerful.
          </motion.p>
          <motion.button
            className="btn btn-danger btn-lg mt-3"
            onClick={goToProducts}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 hero-slide"
          src="/images/slide2.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption className="hero-caption text-center" style={{ top: "65%" }}>
          <motion.h1
            className="fw-bold text-danger"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            SUV Tyres for Any Terrain
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experience Comfort & Durability.
          </motion.p>
          <motion.button
            className="btn btn-danger btn-lg mt-3"
            onClick={goToProducts}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Tyres
          </motion.button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 hero-slide"
          src="/images/slide3.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption className="hero-caption text-center" style={{ top: "65%" }}>
          <motion.h1
            className="fw-bold text-danger"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Performance Tyres for Speed
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Boost Your Driving Experience.
          </motion.p>
          <motion.button
            className="btn btn-danger btn-lg mt-3"
            onClick={goToProducts}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}