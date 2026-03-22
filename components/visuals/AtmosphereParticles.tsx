"use client";

// src/components/visuals/AtmosphereParticles.tsx
// Optimized particle effect for performance
import { useEffect, useRef } from 'react';

interface Props {
    variant?: 'subtle' | 'intense' | 'nebula' | 'sparkle';
}

export default function AtmosphereParticles({ variant = 'subtle' }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);

    const config = {
        subtle: { count: 40, speed: 0.2, maxSize: 1.5, opacity: 0.3 }, // Reduced counts for mobile performance
        intense: { count: 80, speed: 0.5, maxSize: 2.5, opacity: 0.6 },
        nebula: { count: 60, speed: 0.1, maxSize: 3, opacity: 0.4 },
        sparkle: { count: 70, speed: 0.7, maxSize: 1.2, opacity: 0.7 },
    }[variant];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;
        
        // Use a high-quality resize that avoids repeated reflows
        const setCanvasSize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };
        setCanvasSize();

        // Create particles
        const particles = Array.from({ length: config.count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * config.speed,
            vy: (Math.random() - 0.5) * config.speed - 0.05,
            size: Math.random() * config.maxSize + 0.5,
            alpha: Math.random() * config.opacity,
            pulse: Math.random() * Math.PI * 2,
        }));

        // Optimized hex parsing
        const hexToRgb = (hex: string) => {
            const cleanHex = hex.replace('#', '');
            const bigint = parseInt(cleanHex, 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        };

        // Cache computed style once
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#C9A961';
        const rgb = hexToRgb(accentColor);

        // Debounced resize for performance
        let resizeTimer: any;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setCanvasSize, 200);
        };

        window.addEventListener('resize', handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.015;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const flickerAlpha = p.alpha * (0.4 + 0.6 * Math.sin(p.pulse));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${flickerAlpha})`;
                ctx.fill();

                if (p.size > 1.2 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${flickerAlpha * 0.1})`;
                    ctx.fill();
                }
            }

            animRef.current = requestAnimationFrame(animate);
        };

        // Delay animation slightly to prioritize LCP
        const timer = setTimeout(() => {
            animRef.current = requestAnimationFrame(animate);
        }, 100);

        return () => {
            clearTimeout(timer);
            clearTimeout(resizeTimer);
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [variant, config.count, config.maxSize, config.opacity, config.speed]);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden text-transparent" aria-hidden="true">
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.6,
                }}
            />
        </div>
    );
}
