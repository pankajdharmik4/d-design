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
    image: image1, // Replace with image path
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Comfortable Fit",
    desc: "Our tutors are always available to respond as quick as possible for you",
    image: image2,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Comfortable Fit",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
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

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-12">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase text-3xl font-semibold text-orange-600">
            Why Choose Us
          </h1>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* image section */}
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
  );
};

export default WhyChooseUs;
