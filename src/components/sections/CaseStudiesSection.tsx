import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";
import { caseStudiesData, CaseStudyItem } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { CaseStudyModal } from "@/components/modals/CaseStudyModal";

export const CaseStudiesSection = () => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyItem | null>(null);

  return (
    <section id="case-studies" className="py-20 relative bg-muted/20">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Deep Dive Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Detailed <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            In-depth breakdown of architectural decisions, research, problem solving, performance tuning, and measurable business outcomes.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudiesData.map((cs: CaseStudyItem, idx: number) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div>
                {/* Hero Header */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-52 sm:h-60 border border-border/60">
                  <img
                    src={cs.heroImage}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 uppercase tracking-wider w-max mb-2">
                      {cs.industry}
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl leading-snug">{cs.title}</h3>
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-card border border-border/60 mb-6 text-center">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-display font-extrabold text-sm sm:text-base gradient-text block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-semibold block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Problem & Outcome Teaser */}
                <div className="space-y-3 mb-6 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Challenge: </strong>
                    {cs.problem}
                  </p>
                  <p>
                    <strong className="text-emerald-500">Business Outcome: </strong>
                    {cs.outcome}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/40">
                  {cs.techUsed.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => setActiveModalStudy(cs)}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-xl text-xs py-5 shadow-md hover:opacity-95 transition-opacity"
                >
                  <span>Explore Full 8-Step Breakdown</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <CaseStudyModal
          caseStudy={activeModalStudy}
          onClose={() => setActiveModalStudy(null)}
        />

      </div>
    </section>
  );
};
