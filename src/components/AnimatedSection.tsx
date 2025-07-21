"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getDurationClass = () => {
    if (duration === 600) return 'duration-600';
    if (duration === 800) return 'duration-800';
    if (duration === 1000) return 'duration-1000';
    return 'duration-600'; // default
  };

  const getAnimationClass = () => {
    const baseClasses = `transition-all ease-out ${getDurationClass()}`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} opacity-0 transform translate-y-8`;
        case 'down':
          return `${baseClasses} opacity-0 transform -translate-y-8`;
        case 'left':
          return `${baseClasses} opacity-0 transform translate-x-8`;
        case 'right':
          return `${baseClasses} opacity-0 transform -translate-x-8`;
        case 'fade':
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 transform translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 transform translate-x-0 translate-y-0`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection; 