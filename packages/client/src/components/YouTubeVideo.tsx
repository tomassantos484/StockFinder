'use client';

import { useEffect, useState } from 'react';

export default function YouTubeVideo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/fF6dKe6vc1A"
      title="StockFinder Demo Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
} 