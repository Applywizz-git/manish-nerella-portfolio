import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter = ({ end, label, suffix = "", duration = 2 }: AnimatedCounterProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
        {hasStarted ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          '0'
        )}
      </div>
      <div className="text-sm lg:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};