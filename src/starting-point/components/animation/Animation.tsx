import { IAnimationProps } from 'starting-point/interfaces';
import { useState, useEffect } from 'react';

const Animation = ({
  animationIn,
  animationOut,
  children,
  className,
  show,
  delayIn = 0,
  delayOut = 0,
}: IAnimationProps) => {
  const [showDelay, setShowDelay] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowDelay(show);
      }, delayIn);
      return;
    }
    setTimeout(() => {
      setShowDelay(show);
    }, delayOut);
  }, [delayIn, delayOut, show]);

  return (
    <div
      className={`${
        show ? animationIn : animationOut
      } duration-500 ease-in-out transition-all ${className}`}
    >
      {showDelay && children}
    </div>
  );
};

export default Animation;
