import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Stat {
  id: number;
  value?: number;
  suffix?: string;
  label: string;
  display?: string;
}

const stats: Stat[] = [
  { id: 1, value: 7, suffix: '+', label: 'Years of Combined Experience' },
  { id: 2, display: 'B2B + B2C', label: 'Markets Served' },
  { id: 3, value: 8, suffix: '', label: 'Digital Service Areas' },
  { id: 4, display: 'End-to-end', label: 'Build to Ongoing Support' },
];

const StatsBanner = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  return (
    <section 
      ref={ref} 
      className="bg-primary-600 py-12 md:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem 
              key={stat.id} 
              stat={stat} 
              inView={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  stat: Stat;
  inView: boolean;
}

const StatItem = ({ stat, inView }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = stat.value ?? 0;
  
  useEffect(() => {
    if (inView && !stat.display) {
      // Start counter animation when in view
      const duration = 2000; // ms
      const interval = 20; // ms
      const step = target / (duration / interval);
      
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current > target) {
          current = target;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(current));
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView, target, stat.display]);
  
  return (
    <div className="text-center">
      <div className="text-white font-bold text-4xl md:text-5xl">
        {stat.display
          ? stat.display
          : `${inView ? displayValue : 0}${stat.suffix ?? ''}`}
      </div>
      <div className="mt-2 text-primary-100 text-lg font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsBanner;