"use client";
import { motion } from "framer-motion";

export default function TyreAnimation() {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.img
        src="/images/tyre.png"
        alt="tyre"
        animate={{
          x: ["-10%", "110%"],
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear"
        }}
        style={{ width: "100px" }}
      />
    </div>
  );
}