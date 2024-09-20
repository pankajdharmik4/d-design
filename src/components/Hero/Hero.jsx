import React from "react";
import HeroImg from "../../assets/hero.jpg";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <div className="relative md:h-screen h-[70vh] w-full">
        {/* brand info */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-16 xl:pl-40 py-14 md:py-0 z-10 px-8">
          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-orange-600 uppercase font-semibold"
          >
            Get the Perfect Smile with Invisalign
          </motion.p>
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold md:text-5xl !leading-tight"
          >
            Clear, Comfortable, and Convenient!
          </motion.h1>
          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
          >
            Straighten Your Teeth Discreetly and Effectively with Our Expert Invisalign Treatment
          </motion.p>
          {/* button section */}
          <motion.div
            variants={SlideRight(1.0)}
            initial="hidden"
            animate="visible"
            className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
          >
            <button className="primary-btn">Book a free Consultation</button>
          </motion.div>
        </div>
        {/* Hero image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }} // Starts scaled up, giving the "coming from back" effect
          animate={{ opacity: 1, scale: 1 }} // Animates to normal size and opacity
          transition={{ type: "spring", stiffness: 10, delay: 0.4 }}
          src={HeroImg}
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

      </div>
    </>
  );
};

export default Hero;
