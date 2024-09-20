import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

// Framer Motion animations for smooth transitions
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactUs = () => {
  return (
    <section id="contact" className="relative py-16 bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, // Replace with your background image URL
          opacity: 0.4,
        }}
      />

      {/* Card Container */}
      <div className="relative max-w-7xl mx-auto w-[90%] bg-white bg-opacity-90 shadow-lg rounded-lg p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have any questions? We'd love to hear from you!
            </p>

            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Message Textarea */}
            <textarea
              placeholder="Message"
              className="w-full p-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Optional Image or Additional Information */}
          <motion.div
            className="hidden md:block rounded-lg overflow-hidden"
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
