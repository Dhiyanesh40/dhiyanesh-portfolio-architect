
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    // Add cursor tracking
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out mix-blend-difference ${
          isHovering ? 'scale-150 bg-white' : ''
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      
      {/* Outer cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-blue-500/30 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out ${
          isHovering ? 'scale-200 border-white/50' : ''
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default CustomCursor;
