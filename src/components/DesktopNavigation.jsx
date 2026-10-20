import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import CompanyDropdown from './dropdowns/CompanyDropdown';
import ServicesDropdown from './dropdowns/ServicesDropdown';
import IndustriesDropdown from './dropdowns/IndustriesDropdown';
import ProductDropdown from './dropdowns/ProductDropdown';

export default function DesktopNavigation({
  currentRoute,
  onNavigate,
  onOpenItemModal
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleItemClick = (item, parent) => {
    setActiveMenu(null);
    onOpenItemModal(item, parent);
  };

  const navItems = [
    { id: 'home', label: 'Home', hasDropdown: false, path: '/' },
    { id: 'company', label: 'Company', hasDropdown: true },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'industries', label: 'Industries', hasDropdown: true },
    { id: 'product', label: 'Product', hasDropdown: true },
    { id: 'newsroom', label: 'Newsroom', hasDropdown: false, path: '/newsroom' },
    { id: 'contact', label: 'Contact Us', hasDropdown: false, path: '/contact' }
  ];

  return (
    <nav
      className="desktop-navbar-nav"
      aria-label="Main Navigation"
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-items-row" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {navItems.map((item) => {
          const isOpen = activeMenu === item.id;
          const isActive =
            (item.id === 'newsroom' && currentRoute === '/newsroom') ||
            (item.id === 'contact' && currentRoute === '/contact') ||
            (item.id === 'home' && currentRoute === '/');

          if (!item.hasDropdown) {
            return (
              <div
                key={item.id}
                className="nav-link-item"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setActiveMenu(null);
                }}
              >
                <button
                  type="button"
                  className={`nav-button ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveMenu(null);
                    onNavigate(item.path);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                </button>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className="nav-link-item dropdown-parent"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onFocus={() => handleMouseEnter(item.id)}
            >
              <button
                type="button"
                className={`nav-button ${isOpen ? 'menu-open' : ''} ${isActive ? 'is-active' : ''}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setActiveMenu(isOpen ? null : item.id)}
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={13}
                  className={`nav-chevron ${isOpen ? 'rotated' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* HCLTech-Inspired Large Floating Mega-Menu Panel */}
      {activeMenu && (
        <div
          className="mega-dropdown-anchor"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {activeMenu === 'company' && (
            <CompanyDropdown onItemClick={handleItemClick} />
          )}
          {activeMenu === 'services' && (
            <ServicesDropdown onItemClick={handleItemClick} />
          )}
          {activeMenu === 'industries' && (
            <IndustriesDropdown onItemClick={handleItemClick} />
          )}
          {activeMenu === 'product' && (
            <ProductDropdown onItemClick={handleItemClick} />
          )}
        </div>
      )}
    </nav>
  );
}
