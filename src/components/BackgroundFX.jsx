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

    // Dynamic constellation nodes
    const nodeCount = Math.min(Math.floor(width / 26), 55);
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.6 ? '#6366f1' : Math.random() > 0.3 ? '#38bdf8' : '#a855f7',
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    // Upward floating cosmic dust
    const dustCount = 35;
    const dust = [];
    for (let i = 0; i < dustCount; i++) {
      dust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -0.2 - Math.random() * 0.3,
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // 1. Deep Pitch Black Canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // 2. Cinematic Horizon Backlight Glow (Slow breathing pulse)
      const centerX = width / 2;
      const horizonY = 30;
      const pulse = Math.sin(time * 0.7) * 0.06 + 1;

      const horizonGrad = ctx.createRadialGradient(
        centerX,
        horizonY,
        15,
        centerX,
        horizonY,
        Math.min(width * 0.65, 850) * pulse
      );
      horizonGrad.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
      horizonGrad.addColorStop(0.2, 'rgba(200, 210, 255, 0.11)');
      horizonGrad.addColorStop(0.42, 'rgba(120, 110, 255, 0.06)');
      horizonGrad.addColorStop(0.7, 'rgba(60, 50, 180, 0.02)');
      horizonGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = horizonGrad;
      ctx.beginPath();
      ctx.ellipse(centerX, horizonY, width * 0.8, 460 * pulse, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3. Subtle Architectural Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 56;
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

      // 4. Update & Draw Constellation Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Subtle mouse repulsion / attraction
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const force = (130 - dist) / 130;
          n.x -= (dx / dist) * force * 1.8;
          n.y -= (dy / dist) * force * 1.8;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.alpha * (0.7 + Math.sin(time + i) * 0.3);
        ctx.fill();
      }

      // 5. Connecting Lines Between Nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = '#818cf8';
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.stroke();
          }
        }
      }

      // 6. Upward Drifting Dust
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.y += d.vy;
        if (d.y < 0) {
          d.y = height;
          d.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = d.alpha * (0.6 + Math.sin(time * 2 + i) * 0.4);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
