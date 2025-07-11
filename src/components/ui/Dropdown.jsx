import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  placeholder = 'Select option',
  options = [],
  value,
  onChange,
  rightImage,
  className = '',
  disabled = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);

  return (
    <div className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full bg-secondary-light rounded-lg px-4 py-3.5 text-left
          flex items-center justify-between
          text-base font-poppins
          ${selectedValue ? 'text-primary-1' : 'text-secondary-1'}
          ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-secondary-light/80'}
          transition-colors duration-200
        `}
        {...props}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        {rightImage && (
          <img 
            src={rightImage.src} 
            alt="dropdown arrow" 
            className={`w-2.5 h-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-secondary-1 border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-3 text-left text-base font-poppins text-primary-1 hover:bg-secondary-light transition-colors duration-200"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  rightImage: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Dropdown;