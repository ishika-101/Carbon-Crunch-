import React, { useState } from "react";
import { motion } from "framer-motion";
import abstractbg from "../assets/abstractbg.png";
import greenframe from "../assets/greenframe.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.7) * 20; // Adjust tilt sensitivity
    const y = (e.clientY / innerHeight - 0.7) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="relative w-full min-h-screen flex justify-center items-center px-4 md:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <img
          src={abstractbg}
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Green Frame with Smooth Cursor-Based Movement */}
      <motion.div
        className="relative z-10 w-full max-w-5xl px-4"
        animate={{
          rotateX: mousePosition.y,
          rotateY: -mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <img
          src={greenframe}
          alt="Green Frame with Content"
          className="w-full h-auto mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
