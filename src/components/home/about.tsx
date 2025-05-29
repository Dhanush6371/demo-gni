import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import aboutImage from '../../assets/images/about us.jpg';
import { motion } from 'framer-motion';

// Temporary fallback components if imports fail
const Container = ({ children, ...props }) => <div {...props}>{children}</div>;
const Section = ({ children, ...props }) => <div {...props}>{children}</div>;

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/about');
  };

  return (
    <motion.section
      id="about"
      className="bg-blue-950 py-12 md:py-20 cursor-pointer hover:bg-blue-900 transition-colors duration-300 px-4 sm:px-6"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image with lazy loading */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={aboutImage} 
              alt="About G-NI" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Content with animation */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 md:mb-8 text-left">
              <h2 className="text-white uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-3 md:mb-4">
                About 
              </h2>
              <div className="w-16 md:w-24 h-1 bg-blue-500 mt-4 md:mt-6"></div>
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
              G-NI is evolving into a mobility-tech platform that personalizes international transitions. Combining human expertise with technology, we simplify cross-border movements through our upcoming app, offering proactive solutions for students, professionals, and travelers turning complex processes into seamless journeys.
            </p>

            <motion.div 
              className="mt-4 text-white font-medium flex items-center hover:text-blue-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              Learn More
              <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default AboutSection;