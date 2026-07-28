import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, Users, Rocket, Star } from "lucide-react";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience", subtext: "Full-Stack & Cloud Engineering", icon: Trophy, color: "text-amber-500" },
  { value: 100, suffix: "+", label: "Projects Delivered", subtext: "Clean, Production-Ready Code", icon: Code2, color: "text-blue-500" },
  { value: 20, suffix: "+", label: "Happy Clients", subtext: "Global Startups & Enterprises", icon: Users, color: "text-purple-500" },
  { value: 10, suffix: "+", label: "SaaS Applications", subtext: "Multi-tenant & Microservices", icon: Rocket, color: "text-cyan-500" },
  { value: 99, suffix: "%", label: "Client Satisfaction", subtext: "On-time & On-budget SLA", icon: Star, color: "text-emerald-500" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-background">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center relative group hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-muted/60 flex items-center justify-center mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="gradient-text mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="font-bold text-sm text-foreground mb-1">
                  {stat.label}
                </h3>
                
                <p className="text-[11px] text-muted-foreground font-medium">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
