'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

type MotionProps = {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'up' | 'down' | 'fade' | 'zoom';
  delay?: number;
  duration?: number;
  className?: 'string' | '';
  threshold?: number;
};

const Motion = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.3,
}: MotionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });
  const base = 'transition-all duration-1200 ease-in-out will-change-transform';

  const variants = {
    left: inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
    right: inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
    up: inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    down: inView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0',
    fade: inView ? 'opacity-100' : 'opacity-0',
    zoom: inView ? 'scale-105 opacity-100' : 'scale-95 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`${base} ${variants[direction]}${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Motion;
