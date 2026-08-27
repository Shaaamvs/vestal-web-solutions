import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.5,
  threshold = 0.01,
  once = true,
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      setIsVisible(true);
      return;
    }

    // Immediately check if already visible or top in viewport
    const checkBounding = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        setIsVisible(true);
      }
    };

    checkBounding();

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '100px 0px 100px 0px'
      }
    );

    observer.observe(element);

    // Fail-safe fallback timer so content is never permanently hidden
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(timer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  // Directional transform calculations
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      id={id}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0.05,
        transform: getTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

