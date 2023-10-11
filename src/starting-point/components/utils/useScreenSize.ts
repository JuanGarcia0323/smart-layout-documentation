import { useState, useEffect } from 'react';

interface ScreenSize {
  width: number;
  height: number;
}

function getWindowSize(): ScreenSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setScreenSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
