import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavItem } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
}

// Navbar items (excluding Privacy Policy)
const navbarItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/#services' },
  { title: 'About', path: '/about' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Contact Us', path: '/contact' },
];

// Footer items (including Privacy Policy)
const footerItems: NavItem[] = [
  ...navbarItems,
  { title: 'Privacy Policy', path: '/privacy-policy' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f]">
      <Navbar navItems={navbarItems} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer navItems={footerItems} />
    </div>
  );
};

export default Layout;
