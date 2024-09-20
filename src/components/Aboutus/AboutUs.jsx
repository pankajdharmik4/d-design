import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImage from '../../assets/002.jpg';
import afterImage from '../../assets/001.jpg';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { SlideLeft } from "../../utility/animation";

const About = (props) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Start moving the slider only when visible
      intervalRef.current = setInterval(() => {
        setPosition((prev) => {
          if (prev < 50) {
            return prev + 1; // Increment position
          } else {
            clearInterval(intervalRef.current); // Clear interval when reaching 50%
            return prev; // Stop at 50%
          }
        });
      }, 30); // Adjust speed of movement
    } else {
      // Reset position when not visible
      setPosition(0);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="about" className="pt-8 md:pt-15 bg-white md:pb-20 pb-4 md:px-5">
      <div className="max-w-screen mx-auto flex justify-center">
        <div style={{ borderRadius: '50px' }} className="bg-[#13192d] shadow-lg w-[90%] px-8 md:px-24 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              {/* Before-After Slider */}
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
                position={position} // Set the position based on the state
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={SlideLeft(1.1)}
              initial="hidden"
              whileInView={"visible"}
            >
              <div>
                <h2 className="relative mb-8 pb-2 text-4xl font-bold text-white">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
                </h2>
                <p className="text-white mb-4 text-sm">
                  {props.data ? props.data.paragraph : "loading..."}
                </p>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Why Choose Rothley Lodge for Invisalign?
                </h3>
                <ul className="space-y-2">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`} className="flex text-sm items-center text-white">
                          <DoneAllIcon className="text-[#5ca9fb] text-sm mr-2" />
                          <span>{d}</span>
                        </li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
