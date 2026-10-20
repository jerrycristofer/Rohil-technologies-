import React from 'react';
import DynamicIcon from './DynamicIcon';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MegaMenuDropdown({ menuData, onItemClick }) {
  return (
    <div className="dropdown-menu-wrapper" role="menu" aria-label={`${menuData.label} mega menu`}>
      <div className="dropdown-card mega-menu-card">
        {/* Mega Menu Top Header */}
        <div className="mega-menu-header">
          <div>
            <h3 className="mega-menu-title">ROHIL TECHNOLOGIES {menuData.label}</h3>
            <p className="mega-menu-subtitle">{menuData.description}</p>
          </div>
          <div className="mega-menu-tag">
            <Sparkles size={13} />
            <span>{menuData.items.length} Specialized Offerings</span>
          </div>
        </div>

        {/* 3-Column Balanced Grid */}
        <div className="mega-menu-grid">
          {menuData.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="mega-item-card"
              onClick={() => onItemClick(item, menuData)}
              role="menuitem"
            >
              <div className="mega-item-icon">
                <DynamicIcon name={item.icon} size={18} />
              </div>
              <div className="mega-item-content">
                <span className="mega-item-name">{item.label}</span>
                <span className="mega-item-desc">{item.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
