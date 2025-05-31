import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import { NavItem } from '../../types';
import Button from '../ui/Button';
import '../../styles/fonts.css';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Pages where the waitlist button should be hidden
  const restrictedPaths = ['/privacy-policy', '/copyright'];
  const showWaitlistButton = !restrictedPaths.includes(location.pathname);
  
  // Filter out the "Services" item if needed
  const filteredNavItems = navItems;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      } ${!isScrolled && !isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-950' : 'text-transparent'}`} style={{ fontFamily: "'Gütten', serif" }}>
            g-ni
          </span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {filteredNavItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className={`font-medium ${isScrolled ? 'text-blue-950 hover:text-blue-700' : 'text-transparent'} transition-colors`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            {showWaitlistButton && (
              <a href="#join-waitlist">
                <Button variant="primary" className={isScrolled ? '' : 'opacity-0 pointer-events-none'}>
                  Join Waitlist
                </Button>
              </a>
            )}
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-blue-950' : 'text-white'} hover:text-blue-700`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fadeIn">
            <ul className="flex flex-col space-y-4 mb-4">
              {filteredNavItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="block font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            {showWaitlistButton && (
              <a href="#join-waitlist" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-blue text-white hover:bg-white">Join Waitlist</Button>
              </a>
            )}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;