import React, { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { NAVIGATION_DATA } from '../data/navigationData';
import './Navbar.css';

export default function Navbar({
  currentRoute,
  onNavigate,
  onOpenItemModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll direction and offset to slide navbar up on scroll down, return on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when near the very top of the page
      if (currentScrollY <= 25) {
        setIsHidden(false);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);

        const diff = currentScrollY - lastScrollY;
        // Sensitivity threshold: ignore micro movements (< 6px) to avoid jitter
        if (Math.abs(diff) > 6) {
          if (diff > 0 && currentScrollY > 80) {
            // Scrolling down (wheel up to down) -> hide navbar by translating up
            setIsHidden(true);
          } else if (diff < 0) {
            // Scrolling up (wheel down to up) -> show navbar by returning to place
            setIsHidden(false);
          }
        }
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHidden && !isMobileMenuOpen ? 'nav-hidden' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Official ROHIL TECHNOLOGIES Logo */}
        <a
          href="/"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          aria-label="ROHIL TECHNOLOGIES Home"
        >
          <img
            src="/rohil-logo-navbar.png"
            alt="ROHIL TECHNOLOGIES"
            className="navbar-logo-img"
          />
        </a>

        {/* Center: Desktop Navigation Items */}
        <DesktopNavigation
          navData={NAVIGATION_DATA}
          currentRoute={currentRoute}
          onNavigate={onNavigate}
          onOpenItemModal={onOpenItemModal}
        />

        {/* Far Right: Utility Icons and Mobile Menu Toggle */}
        <div className="navbar-actions">
          <button
            type="button"
            className="nav-icon-btn"
            onClick={() => onNavigate('/contact')}
            title="Search & Inquiries"
            aria-label="Search and Inquiries"
          >
            <Search size={16} />
          </button>

          {/* Hamburger button for Tablet & Mobile screens */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navData={NAVIGATION_DATA}
        currentRoute={currentRoute}
        onNavigate={onNavigate}
        onOpenItemModal={onOpenItemModal}
      />
    </header>
  );
}
