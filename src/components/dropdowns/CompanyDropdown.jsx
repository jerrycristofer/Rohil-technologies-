import React from 'react';
import TreeNestedList from './TreeNestedList';
import FeaturedCard from './FeaturedCard';
import './MegaMenu.css';

/**
 * Company Mega-Menu Dropdown
 * Follows HCLTech layout with organized columns, subtle tree hierarchy lines,
 * and a featured enterprise card on the right.
 */
export default function CompanyDropdown({ onItemClick }) {
  const aboutSubmenuItems = [
    { id: 'vision', label: 'Our Vision', desc: 'Shaping the digital frontier with scalable enterprise tech.' },
    { id: 'mission', label: 'Mission', desc: 'Accelerating transformation with mission-critical velocity.' },
    { id: 'point-of-view', label: 'Our Point Of View', desc: 'Thought leadership on cloud, AI, and resilient architecture.' },
    { id: 'events', label: 'Events', desc: 'Global technology symposiums and corporate hackathons.' }
  ];

  const companyEcosystemItems = [
    { id: 'testimonials', label: 'Client Testimonial' },
    { id: 'career', label: 'Career' },
    { id: 'case-studies', label: 'Case Study' },
    { id: 'internship', label: 'Internship' }
  ];

  return (
    <div className="mega-menu-panel" role="menu" aria-label="Company Mega Menu">
      <div className="mega-menu-grid mega-grid-3-cols">
        {/* Column 1: About with Tree Hierarchy */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <button
              type="button"
              className="mega-category-heading-button"
              onClick={() => onItemClick({ id: 'about', label: 'About' }, { label: 'Company' })}
            >
              <span>About</span>
            </button>

            {/* HCLTech-style Tree Connector Lines */}
            <TreeNestedList
              items={aboutSubmenuItems}
              parentLabel="About"
              onItemClick={onItemClick}
            />
          </div>
        </div>

        {/* Column 2: Additional Company Items */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Ecosystem &amp; Insights</h4>
            <div className="mega-items-list">
              {companyEcosystemItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Company' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Featured Enterprise Card */}
        <div className="mega-menu-column">
          <FeaturedCard
            tag="WHO WE ARE"
            title="Rohil Technologies | Fostering Growth"
            description="Over Eight years of experience delivering innovative, scalable web and mobile software solutions for startups and enterprises worldwide."
            buttonText="Explore Our Story"
            onClick={() => onItemClick({ id: 'about', label: 'About' }, { label: 'Company' })}
          />
        </div>
      </div>
    </div>
  );
}
