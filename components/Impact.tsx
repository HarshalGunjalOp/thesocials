"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
  suffix: string;
};

const stats: Stat[] = [
  {
    value: 182,
    label: "Increase in Engagement",
    suffix: "%",
  },
  {
    value: 371,
    label: "Increase in Followers",
    suffix: "%",
  },
  {
    value: 4900,
    label: "Increase in Reach",
    suffix: "%",
  },
  {
    value: 115,
    label: "Increase in Profile Visits",
    suffix: "%",
  },
  {
    value: 1,
    label: "Profile Visits Generated",
    suffix: "M",
  },
  {
    value: 9,
    label: "Reach achieved till date",
    suffix: "M",
  },
];

// Separate component for each stat card that uses the hook
const StatCard = ({ value, label, suffix }: Stat) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = countRef.current;
    let animationFrame: number;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      const currentCount = Math.floor(
        startValue + (value - startValue) * easedProgress
      );

      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center space-y-2 border border-gray-400 bg-blue-100 rounded-lg p-8 transition-all hover:border-primary"
    >
      <div className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-sm font-medium text-muted-foreground md:text-base">
        {label}
      </p>
    </div>
  );
};

export function OurImpact() {
  return (
    <section
      id="impact"
      className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="pt-16 sm:tracking-wide text-xl max-w-[300px] sm:max-w-[600px] md:max-w-[700px] sm:text-3xl font-bold text-center mb-3">
              Our Impact
            </h2>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurImpact;
