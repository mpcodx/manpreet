import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/portfolioData";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Work Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A 7+ year trajectory of engineering leadership, scalable product delivery, and technical impact.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center/Left Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp: ExperienceItem, idx: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-center gap-8"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="timeline-dot hidden md:block mt-6" />

                {/* Content Card */}
                <div className="w-full glass-card p-6 sm:p-8 relative group hover:border-primary/50 transition-all duration-300">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border/50">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold border border-emerald-500/20 uppercase tracking-wider">
                            Present Role
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold flex-wrap">
                        <span className="flex items-center gap-1 text-foreground">
                          <Building2 className="w-3.5 h-3.5 text-blue-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-foreground text-xs font-bold w-max">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                    <h4 className="text-xs font-bold text-purple-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Key Achievements
                    </h4>
                    {exp.achievements.map((ach, aIdx) => (
                      <p key={aIdx} className="text-xs text-foreground/90 font-semibold">
                        • {ach}
                      </p>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
