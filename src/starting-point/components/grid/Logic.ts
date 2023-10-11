import { useState, useEffect, useRef, useCallback } from 'react';

const Logic = (title: boolean) => {
  const refContainer = useRef<HTMLDivElement>();
  const [scroll, setScroll] = useState(1);

  const handleScroll = useCallback(() => {
    const currentHeight = refContainer.current?.clientHeight ?? 1;
    const decrease = title ? -3.2 : 0;

    if (currentHeight < 250) {
      setScroll((currentHeight * (50 + decrease)) / 100);
      return;
    }
    if (currentHeight < 360) {
      setScroll((currentHeight * (65 + decrease)) / 100);
      return;
    }
    if (currentHeight < 500) {
      setScroll((currentHeight * (76 + decrease)) / 100);
      return;
    }
    if (currentHeight < 800) {
      setScroll((currentHeight * (82 + decrease)) / 100);
      return;
    }
    setScroll((currentHeight * (88 + decrease)) / 100);
  }, [title]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);

    return () => window.removeEventListener('resize', handleScroll);
  });

  return { scroll, refContainer };
};

export default Logic;
