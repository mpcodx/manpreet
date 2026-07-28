import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight, Layers, AlertCircle, Award } from "lucide-react";
import { featuredProjects, ProjectItem, caseStudiesData, CaseStudyItem } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { CaseStudyModal } from "@/components/modals/CaseStudyModal";

export const ProjectsSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "AI/LLM", "SaaS", "Full Stack"];

  const filteredProjects = featuredProjects.filter((p) => {
    return activeTab === "All" || p.category === activeTab;
  });

  const handleOpenCaseStudy = (csId?: string) => {
    if (!csId) {
      // Default to first case study if not linked
      setSelectedCaseStudy(caseStudiesData[0]);
      return;
    }
    const found = caseStudiesData.find((c) => c.id === csId);
    if (found) {
      setSelectedCaseStudy(found);
    } else {
      setSelectedCaseStudy(caseStudiesData[0]);
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-muted/30">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Production <span className="gradient-text">Projects & Case Studies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Explore scalable SaaS applications, generative AI tools, and full-stack solutions built for global startups and enterprise clients.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                activeTab === cat
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-md"
                  : "bg-card hover:bg-muted text-muted-foreground border border-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              <div>
                {/* Hero Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-56 sm:h-64 border border-border/60 group-hover:shadow-xl transition-shadow">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-400 font-extrabold border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Actions Overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-bold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-semibold mb-4">
                  {project.subtitle}
                </p>

                {/* Problem & Solution Accordion-style summary */}
                <div className="space-y-3 mb-6 p-4 rounded-xl bg-card border border-border/60 text-xs">
                  <div>
                    <span className="font-bold text-red-500 block mb-1">Problem Statement:</span>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-border/40">
                    <span className="font-bold text-emerald-500 block mb-1">Engineered Solution:</span>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx}>
                      <span className="font-display font-extrabold text-sm sm:text-base text-primary block">
                        {res.metric}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-semibold block">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Key Features
                  </p>
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/50">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Trigger Button */}
                <Button
                  onClick={() => handleOpenCaseStudy(project.caseStudyId)}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-xl text-xs py-5 shadow-md hover:opacity-95 transition-opacity"
                >
                  <span>Read Full Engineering Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />

      </div>
    </section>
  );
};
