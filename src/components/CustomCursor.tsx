
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
      {/* Blurred radial gradient trail */}
      <div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-20 opacity-60 transition-all duration-500 ease-out"
        style={{
          transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 40%, transparent 70%)',
          filter: 'blur(20px)',
          scale: isHovering ? '1.3' : '1',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Outer cursor ring */}
      <div
        className={`fixed top-0 left-0 w-16 h-16 border-2 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out ${
          isHovering 
            ? 'scale-200 border-cyan-300/60 bg-cyan-400/10' 
            : 'border-blue-300/40 bg-blue-400/5'
        }`}
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
          mixBlendMode: 'difference',
          boxShadow: isHovering 
            ? '0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.2)' 
            : '0 0 20px rgba(59, 130, 246, 0.3)'
        }}
      />
      
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out ${
          isHovering 
            ? 'scale-150 bg-cyan-400' 
            : 'bg-cyan-400'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: 'difference',
          boxShadow: isHovering 
            ? '0 0 25px rgba(34, 211, 238, 0.8), 0 0 50px rgba(59, 130, 246, 0.6), 0 0 75px rgba(147, 51, 234, 0.4)' 
            : '0 0 20px rgba(34, 211, 238, 0.7), 0 0 40px rgba(59, 130, 246, 0.5)'
        }}
      />
    </>
  );
};

export default CustomCursor;
