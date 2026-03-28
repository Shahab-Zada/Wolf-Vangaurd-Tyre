"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="text-white">

      {/* HERO ABOUT */}
      <section
        className="py-5 text-center"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 100%)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold text-danger mb-3"
        >
          About TyreX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="lead mx-auto"
          style={{ maxWidth: "700px" }}
        >
          At Wolf Vanguard Tyre, we combine innovation, precision engineering, and unmatched passion to deliver tyres
          that guarantee safety, performance, and durability. Our commitment is to make every drive smooth, secure, 
          and exhilarating.
        </motion.p>
      </section>

      {/* WHAT WE DO */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.img
              src="/images/tyre.jpeg"
              alt="High Performance Tyres"
              className="img-fluid rounded shadow"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="col-md-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="fw-bold text-danger mb-3"
            >
              Our Expertise in Tyres
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-3"
            >
              With over a decade of experience, TyreX has mastered the art of tyre technology. We focus
              on high-quality materials, rigorous testing, and advanced manufacturing to ensure every tyre
              meets the highest standards of performance.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="list-unstyled"
            >
              <li className="mb-2">✅ Tyres engineered for all vehicles – Cars, SUVs, Performance cars</li>
              <li className="mb-2">✅ Advanced grip and durability for any terrain</li>
              <li className="mb-2">✅ Safety-first approach with rigorous quality control</li>
              <li className="mb-2">✅ Expert advice and customer-first service</li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* MISSION, VISION */}
      <section className="bg-dark py-5 text-center">
        <div className="container">
          <motion.h2
            className="fw-bold text-danger mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Mission & Vision
          </motion.h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <motion.div
                className="p-4 border rounded border-danger h-100"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-danger mb-3">Our Mission</h4>
                <p>
                  To deliver high-performance tyres that enhance driving experience,
                  ensuring safety, reliability, and durability in every journey.
                  We innovate continuously to meet the evolving demands of modern vehicles.
                </p>
              </motion.div>
            </div>
            <div className="col-md-6 mb-3">
              <motion.div
                className="p-4 border rounded border-danger h-100"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-danger mb-3">Our Vision</h4>
                <p>
                  To become the most trusted tyre brand worldwide,
                  recognized for innovation, excellence, and uncompromising commitment
                  to customer satisfaction and safety on the road.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-5">
        <motion.h2
          className="text-center fw-bold text-danger mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose TyreX
        </motion.h2>

        <div className="row text-center">
          <motion.div
            className="col-md-4 mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="text-danger mb-3">Premium Quality</h5>
            <p>
              Our tyres undergo strict quality control and are engineered
              with the finest materials to ensure maximum safety and performance.
            </p>
          </motion.div>

          <motion.div
            className="col-md-4 mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h5 className="text-danger mb-3">Innovation & Performance</h5>
            <p>
              Cutting-edge designs, high-performance tread patterns,
              and advanced technology deliver superior grip and durability.
            </p>
          </motion.div>

          <motion.div
            className="col-md-4 mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h5 className="text-danger mb-3">Customer Satisfaction</h5>
            <p>
              We prioritize our customers, offering expert advice,
              fast delivery, and support to ensure every client drives away happy.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}