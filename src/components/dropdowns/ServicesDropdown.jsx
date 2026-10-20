import React from 'react';
import TreeNestedList from './TreeNestedList';
import FeaturedCard from './FeaturedCard';
import './MegaMenu.css';

/**
 * Services Mega-Menu Dropdown
 * Follows HCLTech multi-column layout with tree connector lines for Mobile Application
 * and an enterprise capability featured card on the right.
 */
export default function ServicesDropdown({ onItemClick }) {
  const mobileSubmenuItems = [
    { id: 'android-dev', label: 'Android Development' },
    { id: 'ios-dev', label: 'IOS Development' },
    { id: 'flutter-dev', label: 'Flutter App Development' },
    { id: 'pwa-dev', label: 'Progressive Web Applications' }
  ];

  const appAndWebItems = [
    { id: 'web-dev', label: 'Website Development' },
    { id: 'software-dev', label: 'Software Development' }
  ];

  const cloudAndAiItems = [
    { id: 'cloud', label: 'Cloud' },
    { id: 'cybersecurity', label: 'Cyber Security' },
    { id: 'ai-data', label: 'Artificial Intelligence and Data Analyst' },
    { id: 'chatbot-dev', label: 'Chat Bot Development' }
  ];

  const enterpriseItems = [
    { id: 'enterprise-solutions', label: 'Enterprise Solutions' },
    { id: 'custom-apps', label: 'Custom Applications' },
    { id: 'bps', label: 'Business Process Services' }
  ];

  return (
    <div className="mega-menu-panel" role="menu" aria-label="Services Mega Menu">
      <div className="mega-menu-grid mega-grid-4-cols">
        {/* Column 1: Mobile & Web Engineering */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <button
              type="button"
              className="mega-category-heading-button"
              onClick={() => onItemClick({ id: 'mobile-app', label: 'Mobile Application' }, { label: 'Services' })}
            >
              <span>Mobile Application</span>
            </button>

            {/* HCLTech-style Tree Connector Lines */}
            <TreeNestedList
              items={mobileSubmenuItems}
              parentLabel="Mobile Application"
              onItemClick={onItemClick}
            />

            <div className="mega-items-list">
              {appAndWebItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Services' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Cloud & Intelligent Systems */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Cloud &amp; Intelligence</h4>
            <div className="mega-items-list">
              {cloudAndAiItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Services' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Enterprise Solutions */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Enterprise Platforms</h4>
            <div className="mega-items-list">
              {enterpriseItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Services' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 4: Featured Capability Card */}
        <div className="mega-menu-column">
          <FeaturedCard
            tag="DIGITAL CAPABILITIES"
            title="End-to-End Enterprise Engineering"
            description="From mission-critical cloud deployments to high-velocity mobile applications, engineer resilient software built for scale."
            buttonText="Explore Capabilities"
            onClick={() => onItemClick({ id: 'mobile-app', label: 'Mobile Application' }, { label: 'Services' })}
          />
        </div>
      </div>
    </div>
  );
}
