import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronRight, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export default function MobileNavigation({
  isOpen,
  onClose,
  navData,
  currentRoute,
  onNavigate,
  onOpenItemModal
}) {
  // Accordion state for top-level menus (Company, Services, Industries, Product)
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Accordion state for second-level menus (e.g., 'about' inside Company, 'mobile-app' inside Services)
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedMenu(null);
      setExpandedSubmenu(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleMenu = (menuId) => {
    setExpandedMenu((prev) => (prev === menuId ? null : menuId));
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (subId) => {
    setExpandedSubmenu((prev) => (prev === subId ? null : subId));
  };

  const handleLinkSelect = (path) => {
    onClose();
    onNavigate(path);
  };

  const handleItemSelect = (item, parent) => {
    onClose();
    onOpenItemModal(item, parent);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header with Official Logo & Close Button */}
        <div className="mobile-drawer-header">
          <img
            src="/rohil-logo-navbar.png"
            alt="ROHIL TECHNOLOGIES"
            className="mobile-drawer-logo"
          />
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Vertical Accordion Menu */}
        <div className="mobile-nav-content">
          {navData.map((item) => {
            const isDirect = item.type === 'direct-link';
            const isExpanded = expandedMenu === item.id;
            const isActive =
              (item.id === 'home' && currentRoute === '/') ||
              (item.id === 'newsroom' && currentRoute === '/newsroom') ||
              (item.id === 'contact' && currentRoute === '/contact');

            if (isDirect) {
              return (
                <div key={item.id} className="mobile-accordion-item">
                  <button
                    type="button"
                    className={`mobile-direct-link ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleLinkSelect(item.path)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} color="var(--slate-400)" />
                  </button>
                </div>
              );
            }

            return (
              <div key={item.id} className="mobile-accordion-item">
                <button
                  type="button"
                  className={`mobile-accordion-btn ${isExpanded ? 'is-expanded' : ''}`}
                  onClick={() => toggleMenu(item.id)}
                  aria-expanded={isExpanded}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={18} className="mobile-accordion-icon" />
                </button>

                {/* Level 1 Accordion Collapse */}
                {isExpanded && (
                  <div className="mobile-accordion-collapse">
                    {/* Nested menus: Company and Services */}
                    {item.type === 'dropdown-nested' &&
                      item.items.map((subItem) => {
                        const hasSub = subItem.hasSubmenu;
                        const isSubExpanded = expandedSubmenu === subItem.id;

                        if (hasSub) {
                          return (
                            <div key={subItem.id} style={{ marginBottom: '6px' }}>
                              <button
                                type="button"
                                className={`mobile-sub-btn ${isSubExpanded ? 'is-sub-expanded' : ''}`}
                                onClick={() => toggleSubmenu(subItem.id)}
                                aria-expanded={isSubExpanded}
                              >
                                <span style={{ fontWeight: 600 }}>{subItem.label}</span>
                                <ChevronDown
                                  size={16}
                                  style={{
                                    transform: isSubExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                  }}
                                />
                              </button>

                              {/* Level 2 Accordion (About -> Vision, Mission... or Mobile -> Android, iOS...) */}
                              {isSubExpanded && (
                                <div className="mobile-nested-collapse">
                                  {subItem.submenu.map((nested) => (
                                    <button
                                      key={nested.id}
                                      type="button"
                                      className="mobile-nested-link"
                                      onClick={() => handleItemSelect(nested, subItem)}
                                    >
                                      <span>{nested.label}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        return (
                          <button
                            key={subItem.id}
                            type="button"
                            className="mobile-sub-btn"
                            onClick={() => handleItemSelect(subItem, item)}
                          >
                            <span>{subItem.label}</span>
                          </button>
                        );
                      })}

                    {/* Mega menus: Industries and Product list */}
                    {item.type === 'mega-menu' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {item.items.map((megaItem) => (
                          <button
                            key={megaItem.id}
                            type="button"
                            className="mobile-sub-btn"
                            onClick={() => handleItemSelect(megaItem, item)}
                          >
                            <span>{megaItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer with Quick Contact & CTA */}
        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="mobile-footer-cta"
            onClick={() => handleLinkSelect('/contact')}
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </button>

          <div className="mobile-drawer-contact-info">
            <div className="mobile-drawer-contact-item" style={{ alignItems: 'flex-start' }}>
              <MapPin size={15} color="var(--brand-blue-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ lineHeight: '1.4' }}>1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar - 626001. | UAE</span>
            </div>
            <div className="mobile-drawer-contact-item">
              <Phone size={14} color="var(--brand-blue-600)" style={{ flexShrink: 0 }} />
              <span>+91 78249 28339 / +91 97518 67879</span>
            </div>
            <div className="mobile-drawer-contact-item">
              <Mail size={14} color="var(--brand-blue-600)" style={{ flexShrink: 0 }} />
              <span>admin@rohiltechnologies.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
