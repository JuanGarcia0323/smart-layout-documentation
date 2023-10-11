import { ReactNode } from 'react';
interface IAnimationProps {
  animationIn: string;
  animationOut: string;
  children: ReactNode;
  show: boolean;
  className?: string;
  delayIn?: number;
  delayOut?: number;
}

export type { IAnimationProps };
