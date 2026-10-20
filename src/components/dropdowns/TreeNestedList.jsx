import React from 'react';

/**
 * TreeNestedList Component
 * Renders hierarchical child items using subtle CSS branch connector lines (├, └).
 */
export default function TreeNestedList({ items = [], parentLabel, onItemClick }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mega-tree-list" role="group" aria-label={`${parentLabel} sub-items`}>
      {items.map((child) => (
        <div key={child.id} className="mega-tree-item">
          <button
            type="button"
            className="mega-tree-link"
            onClick={() => onItemClick(child, { label: parentLabel })}
          >
            <span className="mega-item-label">{child.label}</span>
            {child.badge && (
              <span className="mega-item-tag">{child.badge}</span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
