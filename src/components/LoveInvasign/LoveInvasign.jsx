import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import image1 from "../../assets/features/c1.png"; // Import your images
import image2 from "../../assets/features/c2.png";
import image3 from "../../assets/features/c3.png";
import image4 from "../../assets/features/c4.png";

const WhyChooseData = [
  {
    id: 1,
    title: "Improve Your Smile",
    desc: "All of our special education experts have a degree in special education.",
    image: image1,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Comfortable Fit",
    desc: "Our tutors are always available to respond as quick as possible for you.",
    image: image2,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Digital Whiteboard",
    desc: "Our digital whiteboard is equipped with audio and video chat features.",
    image: image3,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    image: image4,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

const LoveInvasign = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-12">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Title and Description */}
          <div className="flex flex-col justify-center text-center md:text-left p-6">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView={"visible"}
              className="uppercase text-3xl font-semibold text-orange-600 mb-4"
            >
              Why We Love Invisalign
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.4)}
              initial="hidden"
              whileInView={"visible"}
              className="text-lg text-gray-700"
            >
              Discover the benefits of Invisalign – the clear alternative to braces that fits seamlessly into your lifestyle.
            </motion.p>
          </div>

          {/* Right Section: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {WhyChooseData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                >
                  {/* Image Section */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveInvasign;
