import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex items-center gap-5 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <a 
              href={item.href}
              className={`text-base font-medium font-inter transition-colors duration-200 ${
                index === items.length - 1 
                  ? 'text-primary-accent' :'text-white-1 hover:text-primary-accent'
              }`}
            >
              {item.label}
            </a>
          ) : (
            <span 
              className={`text-base font-medium font-inter ${
                index === items.length - 1 
                  ? 'text-primary-accent' :'text-white-1'
              }`}
            >
              {item.label}
            </span>
          )}
          
          {index < items.length - 1 && (
            <span className="text-white-1/60 text-base font-inter">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

export default BreadCrumb;