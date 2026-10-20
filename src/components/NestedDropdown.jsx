import React, { useState } from 'react';
import DynamicIcon from './DynamicIcon';
import { ChevronRight } from 'lucide-react';

export default function NestedDropdown({ menuData, onItemClick }) {
  // Default the active submenu to the first item with a submenu (e.g. About or Mobile Application)
  const defaultSubmenuItem = menuData.items.find(item => item.hasSubmenu) || menuData.items[0];
  const [activeItem, setActiveItem] = useState(defaultSubmenuItem);

  return (
    <div className="dropdown-menu-wrapper" role="menu" aria-label={`${menuData.label} menu`}>
      <div className="dropdown-card nested-dropdown-card">
        {/* Left Primary Column */}
        <div className="dropdown-col-main">
          <div className="dropdown-header-banner">
            <span className="dropdown-header-title">{menuData.label} Overview</span>
          </div>

          {menuData.items.map((item) => {
            const isHovered = activeItem?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`dropdown-item-btn ${isHovered ? 'is-selected' : ''}`}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => {
                  if (!item.hasSubmenu) {
                    onItemClick(item, menuData);
                  }
                }}
                role="menuitem"
                aria-haspopup={item.hasSubmenu ? 'true' : 'false'}
              >
                <div className="dropdown-item-content">
                  {item.icon && (
                    <div className="dropdown-item-icon">
                      <DynamicIcon name={item.icon} size={16} />
                    </div>
                  )}
                  <span className="dropdown-item-title">{item.label}</span>
                  {item.badge && (
                    <span className="dropdown-item-badge">{item.badge}</span>
                  )}
                </div>

                {item.hasSubmenu && (
                  <ChevronRight size={15} className="submenu-arrow-icon" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Flyout / Submenu Column */}
        <div className="dropdown-col-sub">
          {activeItem?.hasSubmenu ? (
            <>
              <div className="sub-header">
                <div className="sub-header-title">{activeItem.label} Solutions</div>
                <div className="sub-header-desc">{activeItem.description}</div>
              </div>

              <div className="submenu-items-list">
                {activeItem.submenu.map((subItem) => (
                  <button
                    key={subItem.id}
                    type="button"
                    className="sub-item-link"
                    onClick={() => onItemClick(subItem, activeItem)}
                    role="menuitem"
                  >
                    <div className="sub-item-icon">
                      <DynamicIcon name={subItem.icon} size={16} />
                    </div>
                    <div>
                      <div className="sub-item-title">{subItem.label}</div>
                      <div className="sub-item-desc">{subItem.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="active-item-preview">
              <div className="sub-header">
                <div className="sub-header-title">{activeItem?.label}</div>
                <div className="sub-header-desc">{activeItem?.description}</div>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '14px',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.825rem',
                  color: '#475569',
                  lineHeight: '1.45'
                }}>
                  Explore Rohil Technologies' specialized capabilities and enterprise insights in {activeItem?.label}.
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  style={{ alignSelf: 'flex-start', marginTop: '4px' }}
                  onClick={() => onItemClick(activeItem, menuData)}
                >
                  View Full Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
