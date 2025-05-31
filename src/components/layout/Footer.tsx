import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { NavItem } from '../../types';
import '../../styles/fonts.css';
import logo from '../../assets/images/ER.jpg';

interface FooterProps {
  navItems: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-blue-950 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Gütten', serif" }}>g-ni</h3>
            <p className="text-white mb-4">
              A Global concierge relocation service designed to facilitate seamless transitions for international
              travelers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="text-white transition-colors hover:text-blue-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-white space-y-2">
              <p>Email: contact@gniapp.com</p>
              <p>Phone: +1 605 605 1233</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Waitlist</h4>
            <p className="text-white mb-4">
              Be the first to know when we launch our services.
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <div className="mb-2">
            <a 
              href="https://www.evanriosprojects.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-white transition-colors"
            >
              <img 
                src={logo} 
                alt="Evan Rios Projects Logo" 
                className="h-6 w-6"
              />
              <span className="font-medium text-white group-hover:text-[#9b111e]/90 transition-colors">
                Evan Rios Projects
              </span>
            </a>
          </div>

          <p 
            className="text-white cursor-pointer hover:underline"
            onClick={() => navigate('/copyright')}
          >
            &copy; {new Date().getFullYear()} G-NI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;