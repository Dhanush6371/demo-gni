import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import '../../styles/fonts.css';
import image from "../../assets/images/about us.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <Container className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-7xl md:text-5xl lg:text-8xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Gütten', serif" }}>
            g-ni <br />
            <span className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Gütten', serif" }}>Gateway of New International.</span>
          </h1>

          <p className="text-lg md:text-xl text-white opacity-90 mb-8 md:mb-10 font-sans">
            A Global concierge 
            relocation service designed to facilitate seamless transitions for international
            travelers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;