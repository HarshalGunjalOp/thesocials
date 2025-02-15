"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
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

const useCountAnimation = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const elementRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = countRef.current;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(
        startValue + (end - startValue) * easedProgress,
      );
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isInView]);

  return { count, ref: elementRef };
};

export function OurImpact() {
  return (
    <section
      id="impact"
      className="w-screen flex justify-center items-center py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="pt-[4rem] sm:tracking-wide text-xl max-w-[300px] sm:max-w-[600px] md:max-w-[700px] sm:text-3xl font-bold text-center mb-3">
              Our Impact
            </h2>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl">
          {stats.map((stat, index) => {
            const { count, ref } = useCountAnimation(stat.value);
            return (
              <div
                key={index}
                ref={ref}
                className="flex flex-col items-center justify-center space-y-2 border border-gray-400 bg-blue-100 rounded-lg p-8 transition-all hover:border-primary"
              >
                <div className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  {count.toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="text-sm font-medium text-muted-foreground md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
