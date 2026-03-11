
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

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

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
          background: document.documentElement.classList.contains('dark') 
            ? 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.2) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(5,150,105,0.4) 0%, rgba(13,148,136,0.3) 40%, transparent 70%)',
          filter: 'blur(20px)',
          scale: isHovering ? '1.3' : '1',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Outer cursor ring */}
      <div
        className={`fixed top-0 left-0 w-16 h-16 border-2 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out ${
          isHovering 
            ? 'scale-200 border-teal-300/60 bg-teal-400/10' 
            : 'border-emerald-300/40 bg-emerald-400/5'
        }`}
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
          mixBlendMode: 'difference',
          boxShadow: isHovering 
            ? (document.documentElement.classList.contains('dark')
                ? '0 0 30px rgba(20, 184, 166, 0.5), inset 0 0 20px rgba(16, 185, 129, 0.2)'
                : '0 0 30px rgba(5, 150, 105, 0.5), inset 0 0 20px rgba(13, 148, 136, 0.2)')
            : (document.documentElement.classList.contains('dark')
                ? '0 0 20px rgba(16, 185, 129, 0.3)'
                : '0 0 20px rgba(13, 148, 136, 0.3)')
        }}
      />
      
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out ${
          isHovering 
            ? (document.documentElement.classList.contains('dark') ? 'scale-150 bg-teal-400' : 'scale-150 bg-emerald-500')
            : (document.documentElement.classList.contains('dark') ? 'bg-teal-400' : 'bg-emerald-500')
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: 'difference',
          boxShadow: isHovering 
            ? (document.documentElement.classList.contains('dark')
                ? '0 0 25px rgba(20, 184, 166, 0.8), 0 0 50px rgba(16, 185, 129, 0.6), 0 0 75px rgba(5, 150, 105, 0.4)'
                : '0 0 25px rgba(5, 150, 105, 0.8), 0 0 50px rgba(13, 148, 136, 0.6), 0 0 75px rgba(20, 184, 166, 0.4)')
            : (document.documentElement.classList.contains('dark')
                ? '0 0 20px rgba(20, 184, 166, 0.7), 0 0 40px rgba(16, 185, 129, 0.5)'
                : '0 0 20px rgba(5, 150, 105, 0.7), 0 0 40px rgba(13, 148, 136, 0.5)')
        }}
      />
    </>
  );
};

export default CustomCursor;
