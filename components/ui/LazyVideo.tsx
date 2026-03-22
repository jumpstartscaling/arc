"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  poster?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LazyVideo({
  src,
  poster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%23050505' width='16' height='9'/%3E%3C/svg%3E",
  ariaLabel = "Video",
  className = "",
  children,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            video.src = src;
            video.load();
            setIsLoaded(true);
            video.play().catch(() => {
              // Handle autoplay restrictions
            });
            observer.unobserve(video);
          }
        });
      },
      { rootMargin: "150px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, isLoaded]);

  return (
    <div className={`rounded-2xl overflow-hidden aspect-video bg-black/20 relative ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        aria-label={ariaLabel}
      />
      {children}
    </div>
  );
}
