import React from 'react';
import FeaturedCard from './FeaturedCard';
import './MegaMenu.css';

/**
 * Industries Mega-Menu Dropdown
 * Balanced multi-column enterprise layout with 13 domain sectors
 * and a right-side domain expertise featured card.
 */
export default function IndustriesDropdown({ onItemClick }) {
  const consumerSectors = [
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'food-industries', label: 'Food Industries' },
    { id: 'retail-textile', label: 'Retail / Textile / Whole Sales' },
    { id: 'hospitality', label: 'Hospitality & Services' }
  ];

  const industrialSectors = [
    { id: 'travel-logistics', label: 'Travel & Logistics' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'constructions', label: 'Constructions' },
    { id: 'manufacturing', label: 'Manufacturing' }
  ];

  const techSectors = [
    { id: 'info-services', label: 'Information Services' },
    { id: 'prof-services', label: 'Professional Services' },
    { id: 'network-edge', label: 'Network & Edge Providers' },
    { id: 'hi-tech', label: 'Hi-Tech' }
  ];

  return (
    <div className="mega-menu-panel" role="menu" aria-label="Industries Mega Menu">
      <div className="mega-menu-grid mega-grid-4-cols">
        {/* Column 1: Consumer & Essential Sectors */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Consumer &amp; Essential</h4>
            <div className="mega-items-list">
              {consumerSectors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Industries' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Supply Chain & Industrial */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Supply Chain &amp; Industrial</h4>
            <div className="mega-items-list">
              {industrialSectors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Industries' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Technology & Enterprise */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Technology &amp; Enterprise</h4>
            <div className="mega-items-list">
              {techSectors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Industries' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 4: Featured Card */}
        <div className="mega-menu-column">
          <FeaturedCard
            tag="DOMAIN EXPERTISE"
            title="Powering 13 Critical Sectors"
            description="Deep domain expertise delivering compliant, secure, and hyper-reliable digital platforms conforming to stringent sector guidelines."
            buttonText="Consult Domain Experts"
            onClick={() => onItemClick(techSectors[0], { label: 'Industries' })}
          />
        </div>
      </div>
    </div>
  );
}
