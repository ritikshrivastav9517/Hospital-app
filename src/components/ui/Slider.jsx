import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ 
  children, 
  className = '',
  showControls = true,
  autoPlay = false,
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out overflow-hidden"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && totalSlides > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="bg-secondary-1 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous slide"
          >
            <img src="/images/img_arrow_left.svg" alt="previous" className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="bg-secondary-1 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next slide"
          >
            <img src="/images/img_arrow_right.svg" alt="next" className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-accent' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showControls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
};

export default Slider;