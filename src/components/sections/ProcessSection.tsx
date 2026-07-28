import { motion } from "framer-motion";
import { 
  Search, FileSpreadsheet, Layout, Code2, CheckCircle2, Rocket, LifeBuoy, Workflow, ArrowRight
} from "lucide-react";
import { processStepsData, ProcessStep } from "@/data/portfolioData";

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case "Search": return Search;
    case "FileSpreadsheet": return FileSpreadsheet;
    case "Layout": return Layout;
    case "Code2": return Code2;
    case "CheckCircle2": return CheckCircle2;
    case "Rocket": return Rocket;
    case "LifeBuoy": return LifeBuoy;
    default: return Workflow;
  }
};

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Engineering Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Development <span className="gradient-text">Workflow & Process</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A proven 7-step methodology ensuring transparent communication, high code quality, and predictable on-time delivery.
          </p>
        </div>

        {/* 7-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStepsData.map((step: ProcessStep, idx: number) => {
            const Icon = getStepIcon(step.iconName);
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card p-6 flex flex-col justify-between relative group hover:border-primary/50 transition-all duration-300 ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-display font-extrabold text-muted-foreground/40 group-hover:text-primary transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Details Pills */}
                <div className="space-y-1.5 pt-3 border-t border-border/40">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-foreground/80 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
