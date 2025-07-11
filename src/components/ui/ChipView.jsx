import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChipItem = ({ 
  children, 
  isSelected = false, 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3.5 py-2 rounded-full border text-base font-inter
        transition-all duration-200 whitespace-nowrap
        ${isSelected 
          ? 'bg-primary-1 text-white-1 border-primary-1/15' :'bg-transparent text-secondary-1 border-primary-1/15 hover:bg-primary-1/5'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

const ChipView = ({ 
  items = [], 
  selectedItems = [], 
  onSelectionChange,
  multiSelect = true,
  className = '' 
}) => {
  const [selected, setSelected] = useState(selectedItems);

  const handleChipClick = (item, index) => {
    let newSelected;
    
    if (multiSelect) {
      if (selected.includes(index)) {
        newSelected = selected.filter(i => i !== index);
      } else {
        newSelected = [...selected, index];
      }
    } else {
      newSelected = selected.includes(index) ? [] : [index];
    }
    
    setSelected(newSelected);
    if (onSelectionChange) {
      onSelectionChange(newSelected, newSelected.map(i => items[i]));
    }
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item, index) => (
        <ChipItem
          key={index}
          isSelected={selected.includes(index)}
          onClick={() => handleChipClick(item, index)}
        >
          {typeof item === 'string' ? item : item.label}
        </ChipItem>
      ))}
    </div>
  );
};

ChipView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any,
      })
    ])
  ),
  selectedItems: PropTypes.arrayOf(PropTypes.number),
  onSelectionChange: PropTypes.func,
  multiSelect: PropTypes.bool,
  className: PropTypes.string,
};

ChipItem.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ChipView;