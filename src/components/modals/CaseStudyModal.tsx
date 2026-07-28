import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Rocket, TrendingUp, Layers, Code2, Target, Search, FileText } from "lucide-react";
import { CaseStudyItem, featuredProjects } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseStudyModal = ({ caseStudy, onClose }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border/80 shadow-2xl p-6 sm:p-8 text-foreground"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center text-foreground transition-colors z-10"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-72">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 uppercase tracking-wider">
                  {caseStudy.industry}
                </span>
                <span className="text-xs text-slate-300 font-semibold">• Timeline: {caseStudy.timeline}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">{caseStudy.title}</h2>
              <p className="text-sm text-slate-300 font-medium">Role: {caseStudy.role}</p>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-muted/50 border border-border mb-8 text-center">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="font-display font-extrabold text-2xl sm:text-3xl gradient-text block">{m.value}</span>
                <span className="text-xs text-muted-foreground font-semibold">{m.label}</span>
              </div>
            ))}
          </div>

          {/* 8 Step Breakdown */}
          <div className="space-y-8">
            
            {/* 1. Problem */}
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <h3 className="font-bold text-lg text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                1. The Problem
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
            </div>

            {/* 2. Research */}
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Search className="w-5 h-5" />
                2. Research & Discovery
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.research}</p>
            </div>

            {/* 3. Planning & Architecture */}
            <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
              <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                3. System Planning & Architecture
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.planning}</p>
            </div>

            {/* 4. Development */}
            <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
              <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                4. Development & Execution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.development}</p>
            </div>

            {/* 5. Testing */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <h3 className="font-bold text-lg text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                5. Quality Assurance & Performance Testing
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.testing}</p>
            </div>

            {/* 6. Deployment */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h3 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                6. Cloud Deployment
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.deployment}</p>
            </div>

            {/* 7. Outcome */}
            <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                7. Business Outcome
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.outcome}</p>
            </div>

            {/* 8. Lessons Learned */}
            <div className="p-6 rounded-2xl bg-pink-500/5 border border-pink-500/20">
              <h3 className="font-bold text-lg text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                8. Key Takeaways & Lessons Learned
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.lessonsLearned}</p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techUsed.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-muted font-bold text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-border flex justify-end">
            <Button onClick={onClose} className="rounded-full px-6 font-bold">
              Close Case Study
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
