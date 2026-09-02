import React, { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cosmic dust particles drifting upward in the backlight beam
    const dustCount = Math.min(Math.floor(width / 24), 50);
    const particles = [];
    for (let i = 0; i < dustCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -0.2 - Math.random() * 0.4, // slowly drifting upwards
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Pure Pitch Black Base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // 2. Cinematic Horizon Backlight Glow (Simulating Sun/Eclipse Corona rising behind the top)
      const centerX = width / 2;
      const horizonY = 40; // Top horizon
      const pulse = Math.sin(time * 0.8) * 0.08 + 1; // Subtle breathing light pulse

      // Primary Dramatic Corona Glow Arch
      const coronaGrad = ctx.createRadialGradient(
        centerX,
        horizonY,
        10,
        centerX,
        horizonY,
        Math.min(width * 0.65, 800) * pulse
      );
      coronaGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      coronaGrad.addColorStop(0.18, 'rgba(220, 225, 255, 0.14)');
      coronaGrad.addColorStop(0.38, 'rgba(140, 130, 255, 0.08)');
      coronaGrad.addColorStop(0.65, 'rgba(99, 102, 241, 0.03)');
      coronaGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.ellipse(centerX, horizonY, width * 0.75, 480 * pulse, 0, 0, Math.PI * 2);
      ctx.fill();

      // Secondary Subtle Mid-Page Backlight Flare
      const midGrad = ctx.createRadialGradient(
        centerX,
        height * 0.45,
        20,
        centerX,
        height * 0.45,
        500
      );
      midGrad.addColorStop(0, 'rgba(180, 190, 255, 0.04)');
      midGrad.addColorStop(0.5, 'rgba(120, 130, 220, 0.02)');
      midGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = midGrad;
      ctx.beginPath();
      ctx.arc(centerX, height * 0.45, 500, 0, Math.PI * 2);
      ctx.fill();

      // 3. Subtle Fine Architectural Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 64;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 4. Floating Atmospheric Dust Particles in the Backlight
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time + i) * 0.4);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
