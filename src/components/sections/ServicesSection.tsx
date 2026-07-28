import { motion } from "framer-motion";
import { 
  Rocket, Brain, Code2, Server, Zap, Cloud, TrendingUp, Shield, Globe, Layout, CheckCircle2, ArrowRight
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "Rocket": return Rocket;
    case "Brain": return Brain;
    case "Code2": return Code2;
    case "Server": return Server;
    case "Zap": return Zap;
    case "Cloud": return Cloud;
    case "TrendingUp": return TrendingUp;
    case "Shield": return Shield;
    case "Globe": return Globe;
    case "Layout": return Layout;
    default: return Code2;
  }
};

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>High-Value Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Services & <span className="gradient-text">Offerings</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            End-to-end full-stack software development tailored to turn your vision into scalable enterprise applications.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card p-7 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 font-extrabold border border-cyan-500/30 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Key Deliverables
                    </p>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/50">
                    {service.popularTech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary/10 hover:bg-primary hover:text-white text-primary border border-primary/20 font-bold rounded-xl text-xs py-5 transition-all group/btn"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
