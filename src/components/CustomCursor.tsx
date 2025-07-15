
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
      {/* Gradient background around cursor */}
      <div
        className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-30 opacity-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.3) 30%, rgba(37,99,235,0.2) 50%, transparent 70%)',
          filter: 'blur(12px)',
          scale: isHovering ? '1.2' : '1',
        }}
      />
      
      {/* Outer cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out ${
          isHovering 
            ? 'scale-150 border-cyan-300/80 bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-purple-500/20' 
            : 'border-blue-400/50 bg-gradient-to-r from-blue-600/10 via-blue-400/20 to-purple-600/10'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: 'screen',
          boxShadow: isHovering 
            ? '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(147, 51, 234, 0.3)' 
            : '0 0 15px rgba(59, 130, 246, 0.4)'
        }}
      />
      
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out ${
          isHovering 
            ? 'scale-150 bg-cyan-300 shadow-lg shadow-cyan-400/70' 
            : 'bg-blue-400 shadow-lg shadow-blue-400/60'
        }`}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          mixBlendMode: 'screen',
          boxShadow: isHovering 
            ? '0 0 25px rgba(34, 211, 238, 0.8), 0 0 50px rgba(59, 130, 246, 0.4)' 
            : '0 0 20px rgba(59, 130, 246, 0.7), 0 0 40px rgba(59, 130, 246, 0.3)'
        }}
      />
    </>
  );
};

export default CustomCursor;
