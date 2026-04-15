import React, { useEffect, useRef, useState } from 'react';

// Pre-gather all image URLs strictly using Vite's glob import (eager mode)
const imageModules = import.meta.glob('../../assets/images/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
});

// Extract into a sorted array of URLs
const imageUrls = Object.keys(imageModules)
  .sort()
  .map(key => imageModules[key]);

export const ProductShowcase = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameCount = imageUrls.length;

  useEffect(() => {
    if (frameCount === 0) return; // In case folder is empty

    let loadedCount = 0;
    const images = [];

    // Preload images into memory
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = imageUrls[i];

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [frameCount]);

  useEffect(() => {
    if (!imagesLoaded || frameCount === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const images = imagesRef.current;

    // Draw initial frame
    if (images[0]) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    }

    let animationFrameId;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Calculate progress based on scroll
        const { top, height } = section.getBoundingClientRect();
        // Start animation when section hits top of viewport
        // End animation when bottom of section hits bottom of viewport
        const rawProgress = -top / (height - window.innerHeight);
        // Clamp between 0 and 1
        const scrollProgress = Math.max(0, Math.min(1, rawProgress));

        let frameIndex = Math.floor(scrollProgress * (frameCount - 1));
        // Clamp index
        if (frameIndex < 0) frameIndex = 0;
        if (frameIndex > frameCount - 1) frameIndex = frameCount - 1;

        const currentImage = images[frameIndex];

        if (currentImage) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          // Slight zoom in effect (optional: zooming up to 10% near the end)
          const scale = 1 + scrollProgress * 0.1;
          const scW = canvas.width * scale;
          const scH = canvas.height * scale;
          const cx = (canvas.width - scW) / 2;
          const cy = (canvas.height - scH) / 2;

          context.drawImage(currentImage, cx, cy, scW, scH);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set correct frame on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [imagesLoaded, frameCount]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-gradient-to-b from-white to-gray-50"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            imagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            aria-label="Interactive Product 360 View"
          />
        </div>
      </div>
    </section>
  );
};
