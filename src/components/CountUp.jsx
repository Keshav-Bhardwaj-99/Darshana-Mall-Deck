import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

const CountUp = ({ to, prefix = "", suffix = "", decimals = 0, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayValue(value.toFixed(decimals));
      }
    });
    return () => controls.stop();
  }, [to, decimals, duration]);

  return (
    <span>{prefix}{Number(displayValue).toLocaleString()}{suffix}</span>
  );
};

export default CountUp;
