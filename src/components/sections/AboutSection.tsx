import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, Building2, Cpu, Zap, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-muted/30">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About <span className="gradient-text">Manpreet Singh</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            7+ years of engineering enterprise software, scalable APIs, AI pipelines, and multi-tenant SaaS products.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Professional Summary & Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                Engineering Philosophy & Expertise
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {profileData.aboutSummary}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My approach to software engineering centers around long-term maintainability, clean design patterns, robust database indexing, and seamless end-user experience. Whether building high-throughput REST microservices or integrating complex Generative AI workflows, I ensure your application scales reliably as your user base grows.
              </p>
            </div>

            {/* Career Highlights Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                Career Highlights & Key Impact
              </h3>

              <div className="flex flex-col gap-4">
                {profileData.careerHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/60">
                    <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {index + 1}
                    </div>
                    <p className="text-sm text-foreground/90 font-medium leading-normal">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Strengths & Key Industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Industries Worked With */}
            <div className="glass-card p-7">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-500" />
                Key Industries & Domains
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {profileData.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs font-semibold text-foreground hover:border-cyan-500/50 transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Technical Strengths */}
            <div className="glass-card p-7">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-500" />
                Core Technical Strengths
              </h3>

              <div className="flex flex-col gap-3">
                {profileData.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground/90">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Box Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-xl flex items-center justify-between">
              <div>
                <span className="text-3xl font-extrabold block">7+ Years</span>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-90">Enterprise Field Experience</span>
              </div>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
