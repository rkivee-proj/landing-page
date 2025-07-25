// In your Next.js project, create this file at:
// app/components/PixelatedReveal.tsx

"use client";

import { COMPANY_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import ScrollIndicator from './ScrollIndicator';
import WaitlistForm from './WaitlistForm';

// --- Configuration ---
// You can easily change these values to customize the effect

// URL of the image to be revealed
// const IMAGE_URL = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop';
const IMAGE_URL = '/revel.png';
// The color of the overlay that hides the image
// const MASK_COLOR = '#1A4314';
// The URL of the mask image that hides the main image
const MASK_IMAGE_URL = '/bg.png';
// The size of the square "pixels" in pixels (e.g., 10x10 blocks)
const PIXEL_SIZE = 5;
// The radius of the main revealed circle area
const REVEAL_RADIUS = 80;
// How far out the "noisy" edge extends from the main circle
const NOISE_RANGE = 5;
// Controls the density of revealed pixels in the noisy edge. 0.5 is 50% chance.
const NOISE_DENSITY = 0.7;

export default function PixelatedReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const maskImageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Use a ref for mouse position to avoid re-renders inside the high-frequency animation loop
  const mousePos = useRef({ x: -999, y: -999 });

  // State to track if the image and mask have loaded successfully
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMaskLoaded, setIsMaskLoaded] = useState(false);
  // State to show a loading/error message to the user
  const [statusMessage, setStatusMessage] = useState('Loading asset...');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use { willReadFrequently: true } for performance with getImageData/putImageData
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) {
      setStatusMessage('Could not get canvas context.');
      return;
    }

    // Load the main image
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Necessary for using images from other domains in canvas
    img.src = IMAGE_URL;
    imageRef.current = img;

    img.onload = () => {
      setIsImageLoaded(true);
      setStatusMessage((msg) => isMaskLoaded ? '' : 'Loading mask...');
    };
    img.onerror = () => {
      setIsImageLoaded(false);
      setStatusMessage('Error: Failed to load image. Check URL and CORS policy.');
      console.error("Failed to load image from URL:", IMAGE_URL);
    };
    // Load the mask image
    const maskImg = new Image();
    maskImg.crossOrigin = "Anonymous";
    maskImg.src = MASK_IMAGE_URL;
    maskImageRef.current = maskImg;
    maskImg.onload = () => {
      setIsMaskLoaded(true);
      setStatusMessage((msg) => isImageLoaded ? '' : 'Loading main image...');
    };
    maskImg.onerror = () => {
      setIsMaskLoaded(false);
      setStatusMessage('Error: Failed to load mask image. Check URL and CORS policy.');
      console.error("Failed to load mask image from URL:", MASK_IMAGE_URL);
    };

    // This function sets up the canvas size and draws the initial state
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
      context.scale(dpr, dpr);
      // Draw the mask image over the entire canvas initially
      if (maskImageRef.current && isMaskLoaded) {
        context.drawImage(maskImageRef.current, 0, 0, rect.width, rect.height);
      }
    };

    // The core animation loop function
    const draw = () => {
      
      if (!isImageLoaded || !isMaskLoaded || !imageRef.current || !maskImageRef.current) {
        animationFrameId.current = requestAnimationFrame(draw);
        return;
      }

      const { width, height } = canvas.getBoundingClientRect();      
      const { x: mouseX, y: mouseY } = mousePos.current;

      // Draw the mask image as the base
      context.drawImage(maskImageRef.current, 0, 0, width, height);
      // Calculate scale factors for the revealed image
      const img = imageRef.current;
      const scaleX = img.naturalWidth / width;
      const scaleY = img.naturalHeight / height;
      for (let y = 0; y < height; y += PIXEL_SIZE) {
        for (let x = 0; x < width; x += PIXEL_SIZE) {
          const distance = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
          // Calculate the corresponding region in the image
          const srcX = x * scaleX;
          const srcY = y * scaleY;
          const srcW = PIXEL_SIZE * scaleX;
          const srcH = PIXEL_SIZE * scaleY;
          // 1. Inside the main circle: always reveal the image
          if (distance < REVEAL_RADIUS) {
            context.save();
            context.globalAlpha = 0.4; // Set desired opacity (e.g., 0.85)
            context.drawImage(img, srcX, srcY, srcW, srcH, x, y, PIXEL_SIZE, PIXEL_SIZE);
            context.restore();
          }
          // 2. In the "noisy" zone: randomly decide to reveal or hide
          else if (distance < REVEAL_RADIUS + NOISE_RANGE) {
            if (Math.random() < NOISE_DENSITY) {
              context.save();
              context.globalAlpha = 0.1; // Set desired opacity (e.g., 0.85)
              context.drawImage(img, srcX, srcY, srcW, srcH, x, y, PIXEL_SIZE, PIXEL_SIZE);
              context.restore();
            }
            // else: leave the mask image as is
          }
          // 3. Outside the noisy zone: always show the mask image (already drawn)
        }
      }

      // Request the next frame to create the continuous animation
      setTimeout(() => {
        animationFrameId.current = requestAnimationFrame(draw);
      }, 0);
    };

    setupCanvas();
    // Start the animation loop once everything is set up
    draw();
    

    // Add a resize listener to make the canvas responsive
    window.addEventListener('resize', setupCanvas);

    // Cleanup function to stop the loop and remove listener when the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', setupCanvas);
    };
  }, [isImageLoaded, isMaskLoaded]); // Rerun the effect if the image loading status changes

  // Update the mouse position ref when the mouse moves over the canvas
  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    setTimeout(() => {
    if (rect) {
      mousePos.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        };
      }
    }, 150);
  };

  // When the mouse leaves, move the position way off-screen to hide the reveal effect
  const handleMouseLeave = () => {
    mousePos.current = { x: -9999, y: -9999 };
  }

  return (
    <div className="relative w-full h-screen sm:h-screen bg-black flex items-center justify-center font-sans"
    onMouseMove={handleMouseMove}
    // onMouseLeave={handleMouseLeave}
    >
      {/* Status message is shown while loading or on error */}
      {statusMessage && (
        <div className="absolute text-white z-10">{statusMessage}</div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-none absolute top-0 left-0"
      />
      <div className="relative w-full h-full z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12 py-32 max-w-7xl ">
        <div className="max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span
              className="px-6 py-3 backdrop-blur-sm rounded-full text-sm inline-block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                // border: '1px solid rgba(245, 245, 240, 0.2)',
                color: '#F5F5F0'
              }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Alpha Release V2
              </motion.span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl lg:text-8xl mb-4 font-bold leading-[1] text-dark-text"
          >
            {/* {COMPANY_INFO.tagline} */}
            Edit. Collaborate. 
            <span className='line-through'> Archive.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl max-w-3xl leading-relaxed"
          >
            <div className="opacity-70">
              {COMPANY_INFO.description}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=""
          >
            <WaitlistForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-start gap-8 text-sm text-dark-text-subtle"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Star size={18} className="text-white" />
              <span className="text-dark-text">{COMPANY_INFO.earlyAccess}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Users size={18} className="text-white" />
              <span className="text-dark-text">{COMPANY_INFO.signupCount}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - Centered */}
        <ScrollIndicator />

      </div>
    </div>
  );
}
