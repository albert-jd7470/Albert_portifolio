import { useEffect, useRef, useState } from 'react';
import './CharacterCanvas.css';

const TOTAL_FRAMES = 64;
// Configurable constants
const FRAME_ANGLE_OFFSET = Math.PI / 2; // Adjust this to calibrate the starting direction
const FRAME_DIRECTION = 1; // 1 for clockwise, -1 for counter-clockwise
const INTERPOLATION_FACTOR = 0.26;
const DEADZONE_RADIUS_PCT = 0.12;

export default function CharacterCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Keep rapidly changing values in refs to prevent React re-renders
  const state = useRef({
    frames: [],
    centerFrame: null,
    imagesLoaded: 0,
    isFullyLoaded: false,
    currentAngle: 0,
    targetAngle: 0,
    mouseX: 0,
    mouseY: 0,
    inDeadzone: true
  });

  useEffect(() => {
    // 1. Preload images
    const loadImages = () => {
      let loadedCount = 0;
      const totalToLoad = TOTAL_FRAMES + 1; // 64 + center

      const checkLoaded = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalToLoad) * 100));
        if (loadedCount === totalToLoad) {
          state.current.isFullyLoaded = true;
          setIsLoading(false);
        }
      };

      // Load center
      const centerImg = new Image();
      centerImg.src = '/frames/center.webp';
      centerImg.onload = checkLoaded;
      centerImg.onerror = checkLoaded; // Handle gracefully
      state.current.centerFrame = centerImg;

      // Load 64 frames
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, '0');
        img.src = `/frames/frame_${frameIndex}.webp`;
        img.onload = checkLoaded;
        img.onerror = checkLoaded;
        state.current.frames.push(img);
      }
    };
    
    loadImages();

    // 2. Setup canvas & animation loop
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
    
    // Set initial size
    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Use devicePixelRatio for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Utility for shortest angular distance interpolation
    const lerpAngle = (current, target, factor) => {
      const PI2 = Math.PI * 2;
      let diff = (target - current) % PI2;
      // Handle the wrapping boundary (-PI to PI)
      if (diff > Math.PI) diff -= PI2;
      if (diff < -Math.PI) diff += PI2;
      return current + diff * factor;
    };

    let animationFrameId;

    const render = () => {
      if (!state.current.isFullyLoaded || !ctx || !canvas) {
        if (ctx && canvas) {
          // Fill canvas with yellow during load to prevent any black flickering
          ctx.fillStyle = '#f7bd25';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance and direction
      const dx = state.current.mouseX - centerX;
      const dy = state.current.mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const deadzoneRadius = Math.min(rect.width, rect.height) * DEADZONE_RADIUS_PCT;

      if (distance < deadzoneRadius) {
        state.current.inDeadzone = true;
      } else {
        state.current.inDeadzone = false;
        // atan2 is usually -PI to PI. We want to map this to the circle.
        let rawAngle = Math.atan2(dy, dx);
        state.current.targetAngle = rawAngle + FRAME_ANGLE_OFFSET;
      }

      let frameToDraw;

      if (state.current.inDeadzone) {
        frameToDraw = state.current.centerFrame;
        // Also reset target/current angle so when we leave deadzone it doesn't spin wildly
        state.current.currentAngle = state.current.targetAngle;
      } else {
        // Interpolate angle
        state.current.currentAngle = lerpAngle(state.current.currentAngle, state.current.targetAngle, INTERPOLATION_FACTOR);
        
        // Map current angle to 0-63 frame index
        // Normalize angle to 0 - 2PI
        let normalizedAngle = state.current.currentAngle % (Math.PI * 2);
        if (normalizedAngle < 0) normalizedAngle += Math.PI * 2;
        
        // Apply direction mapping
        let mappedAngle = FRAME_DIRECTION === 1 ? normalizedAngle : (Math.PI * 2 - normalizedAngle);
        
        const frameIndex = Math.round((mappedAngle / (Math.PI * 2)) * (TOTAL_FRAMES - 1));
        // Clamp safely
        const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
        frameToDraw = state.current.frames[safeIndex];
      }

      // Draw the image to fit/cover the canvas
      if (frameToDraw && frameToDraw.complete && frameToDraw.naturalWidth > 0) {
        // We want to simulate 'object-fit: cover'
        const imgRatio = frameToDraw.naturalWidth / frameToDraw.naturalHeight;
        const canvasRatio = rect.width / rect.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = rect.width;
          drawHeight = rect.width / imgRatio;
          offsetX = 0;
          offsetY = (rect.height - drawHeight) / 2;
        } else {
          drawHeight = rect.height;
          drawWidth = rect.height * imgRatio;
          offsetX = (rect.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(frameToDraw, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        // Fill with background color to prevent flicker before draw
        ctx.fillStyle = '#f7bd25'; // Fallback to our var
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      // Keep track of cursor globally
      state.current.mouseX = e.clientX;
      state.current.mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Support basic touch direction
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        state.current.mouseX = e.touches[0].clientX;
        state.current.mouseY = e.touches[0].clientY;
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="character-canvas-container" ref={containerRef}>
      {isLoading && (
        <div className="canvas-loader">
          <div className="loader-spinner"></div>
          <span className="loader-text">Loading {loadingProgress}%</span>
        </div>
      )}
      <canvas ref={canvasRef} className="character-canvas" />
    </div>
  );
}
