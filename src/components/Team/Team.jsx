import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from "../../utility/animation";

// Sample team member data
const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://img.freepik.com/free-photo/female-doctor-lab-coat-white-isolated-confident-smile_343596-6556.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid', // Replace with actual image URL
    description: 'John is the visionary leader of our team with over 15 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://img.freepik.com/premium-photo/doctor-physician-person-concept_1194-605094.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid', // Replace with actual image URL
    description: 'Jane is responsible for our technology strategy and has a deep expertise in software development.',
  },
  {
    name: 'Emily Johnson',
    position: 'Lead Designer',
    image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-during-daily-checkup-standing-white-background_1258-107867.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid', // Replace with actual image URL
    description: 'Emily is our creative genius, ensuring everything we build looks stunning.',
  },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Team = () => {
  return (
    <section id="team" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <motion.h2 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600"
          initial="hidden"
              whileInView="visible"
          // viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We are a group of professionals dedicated to delivering the best service.
        </motion.p>
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            // variants={cardVariants}
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
          >
            <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-4"
              />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-indigo-600 font-medium">{member.position}</p>
            <p className="text-gray-600 mt-4">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
