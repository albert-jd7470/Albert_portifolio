import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };
    
    // Check for interactive elements to expand cursor
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, select, .interactive')) {
        ring?.classList.add('hovering');
      } else {
        ring?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Smooth animation for the ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      
      requestAnimationFrame(render);
    };
    
    const animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef}></div>
      <div className="custom-cursor-ring" ref={ringRef}></div>
    </>
  );
}
