"use client";
import { useEffect, useRef } from "react";

export default function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const tealPalette = [
        {r:20, g:145, b:140},
      { r: 28,  g: 154, b: 152 }, // #1c9a98
      { r: 12,  g: 110, b: 109 }, // #0c6e6d
      { r: 6,   g: 50,  b: 50  }, // #063232
      { r: 20,  g: 184, b: 166 }, // teal-500
      { r: 94,  g: 234, b: 212 }, // teal-300
      { r: 13,  g: 148, b: 136 }, // teal-600
    ];

    type Wave = {
      y: number;
      amplitude: number;
      frequency: number;
      speed: number;
      color: { r: number; g: number; b: number };
      alpha: number;
      offset: number;
    };

    const waves: Wave[] = Array.from({ length: 6 }, (_, i) => ({
      y: window.innerHeight * (0.3 + i * 0.12),
      amplitude: 30 + Math.random() * 40,
      frequency: 0.003 + Math.random() * 0.004,
      speed: 0.003 + Math.random() * 0.004,
      color: tealPalette[i % tealPalette.length],
      alpha: 0.04 + Math.random() * 0.06,
      offset: Math.random() * Math.PI * 2,
    }));

    let time = 0;
    let animFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + time * wave.speed + wave.offset) *
              wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.7) *
              (wave.amplitude * 0.4);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const { r, g, b } = wave.color;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${wave.alpha})`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}