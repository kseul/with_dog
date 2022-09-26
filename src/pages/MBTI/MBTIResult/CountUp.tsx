import { useEffect, useRef, useState } from 'react';
import { CountTime } from './type';

export function CountUp({
  startMS,
  duration,
  step = Math.round(duration / 50),
}: CountTime) {
  const [number, setNumber] = useState<number>(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const newTime = new Date().getTime() - startMS;
    if (newTime < duration) {
      timer.current = setTimeout(() => {
        setNumber(newTime);
      }, step);
    } else {
      setNumber(duration);
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [number]);

  return number;
}
