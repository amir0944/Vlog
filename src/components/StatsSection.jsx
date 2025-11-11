import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const stats = [
    { count: 50, label: "Projects" },
    { count: 100, label: "Awake" },
    { count: 20, label: "Awards" },
    { count: 70, label: "Skill" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounts((prev) => {
              const newCounts = prev.map((val, i) => {
                if (val < stats[i].count) {
                  return val + 1;
                }
                return val;
              });
              if (newCounts.every((val, i) => val === stats[i].count)) {
                clearInterval(interval);
              }
              return newCounts;
            });
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="backImage2 py-5 grid justify-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-0"
    >
      {stats.map((stat, index) => (
        <div key={index} className="divItemChart">
          <div>
            <h1 className="divTitle">{counts[index]}</h1>
            <p className="text-[#ff0066] text-xl">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
