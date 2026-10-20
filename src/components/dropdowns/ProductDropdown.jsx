import React from 'react';
import FeaturedCard from './FeaturedCard';
import './MegaMenu.css';

/**
 * Product Mega-Menu Dropdown
 * Balanced multi-column enterprise layout with 13 ready-to-deploy products
 * and a right-side turnkey platforms featured card.
 */
export default function ProductDropdown({ onItemClick }) {
  const onDemandProducts = [
    { id: 'food-delivery', label: 'Food Delivery App' },
    { id: 'grocery-app', label: 'Grocery App' },
    { id: 'ecommerce-app', label: 'E-Commerce App' },
    { id: 'taxi-booking', label: 'Taxi Booking App' },
    { id: 'packers-movers', label: 'Packers-Movers' }
  ];

  const bookingAndRealEstate = [
    { id: 'booking-appointment', label: 'Booking & Appointment' },
    { id: 'room-booking', label: 'Room Booking & Rental' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'pharmacy', label: 'Pharmacy' }
  ];

  const enterpriseAndLearning = [
    { id: 'learning-app', label: 'Learning App' },
    { id: 'institution-mgmt', label: 'Institution Management' },
    { id: 'employee-mgmt', label: 'Employee Management' },
    { id: 'project-mgmt', label: 'Project Management' }
  ];

  return (
    <div className="mega-menu-panel" role="menu" aria-label="Product Mega Menu">
      <div className="mega-menu-grid mega-grid-4-cols">
        {/* Column 1: On-Demand & Mobility */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">On-Demand &amp; Mobility</h4>
            <div className="mega-items-list">
              {onDemandProducts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Product' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Booking & Real Estate */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Booking &amp; Services</h4>
            <div className="mega-items-list">
              {bookingAndRealEstate.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Product' })}
                  role="menuitem"
                >
                  <span className="mega-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Enterprise & Learning */}
        <div className="mega-menu-column">
          <div className="mega-category-block">
            <h4 className="mega-category-heading">Enterprise &amp; Education</h4>
            <div className="mega-items-list">
              {enterpriseAndLearning.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="mega-item-link"
                  onClick={() => onItemClick(item, { label: 'Product' })}
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
            tag="TURNKEY PLATFORMS"
            title="Accelerate Time-to-Market"
            description="Battle-tested SaaS and mobile application engines built for white-label customization and rapid enterprise launch."
            buttonText="Request Live Demo"
            onClick={() => onItemClick(onDemandProducts[0], { label: 'Product' })}
          />
        </div>
      </div>
    </div>
  );
}
