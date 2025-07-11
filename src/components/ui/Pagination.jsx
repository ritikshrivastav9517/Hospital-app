import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ 
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPrevNext = true,
  className = '' 
}) => {
  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            text-sm font-medium transition-colors duration-200
            ${i === currentPage 
              ? 'bg-primary-accent text-white-1' :'bg-secondary-1 text-primary-1 hover:bg-secondary-light'
            }
          `}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {showPrevNext && (
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            bg-secondary-1 rounded-full p-3 shadow-lg transition-all duration-200
            ${currentPage === 1 
              ? 'opacity-50 cursor-not-allowed' :'hover:shadow-xl cursor-pointer'
            }
          `}
          aria-label="Previous page"
        >
          <img src="/images/img_arrow_left.svg" alt="previous" className="w-5 h-5" />
        </button>
      )}

      <div className="flex items-center gap-1">
        {renderPageNumbers()}
      </div>

      {showPrevNext && (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            bg-secondary-1 rounded-full p-3 shadow-lg transition-all duration-200
            ${currentPage === totalPages 
              ? 'opacity-50 cursor-not-allowed' :'hover:shadow-xl cursor-pointer'
            }
          `}
          aria-label="Next page"
        >
          <img src="/images/img_arrow_right.svg" alt="next" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  showPrevNext: PropTypes.bool,
  className: PropTypes.string,
};

export default Pagination;