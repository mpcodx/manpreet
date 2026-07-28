import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, Mail, MessageCircle, Sparkles, CheckCircle2, Code2, ShieldCheck, Terminal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolioData";
import portraitImg from "/manpreet-singh.png";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold w-max mx-auto lg:mx-0 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{profileData.availabilityStatus}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              Building Enterprise <br />
              <span className="gradient-text">Full-Stack SaaS & AI Solutions</span>
            </h1>

            {/* Sub-headline / Role */}
            <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap text-lg sm:text-xl text-muted-foreground font-medium">
              <span className="text-foreground font-semibold flex items-center gap-1.5">
                <Terminal className="w-5 h-5 text-blue-500" />
                Manpreet Singh
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-foreground">{profileData.yearsExperience} Experience</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-cyan-500 font-semibold">Python, React & AI Specialist</span>
            </div>

            {/* Short Bio Copywriting */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Senior Full Stack Engineer & Technical Coordinator crafting resilient web architectures, real-time WebSocket platforms, and enterprise software. Delivered 150+ applications including Play Quiz Now, Banking Quest (500k+ learners), and Allen & Unwin.
            </p>

            {/* 4 CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Hire Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="rounded-full px-7 py-6 border-border font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2 text-cyan-500" />
                View Projects
              </Button>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 py-6 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-emerald-500" />
                  WhatsApp Me
                </Button>
              </a>

              <a
                href="/Manpreet_Singh_Resume.pdf"
                download="Manpreet_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-5 py-6 text-muted-foreground hover:text-foreground font-semibold"
                >
                  <Download className="w-5 h-5 mr-2 text-purple-500" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Micro Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border/50 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Django & DRF</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>React & Next.js</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-Time WebSockets</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Photo Frame & Floating Skill Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              {/* Outer Animated Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 blur-xl opacity-60 animate-pulse" />
              
              {/* Image Container Card */}
              <div className="relative w-full h-full rounded-3xl bg-card border-2 border-border/80 p-3 shadow-2xl overflow-hidden group">
                <img
                  src={portraitImg}
                  alt="Manpreet Singh - Senior Full Stack Engineer"
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                  }}
                />

                {/* Glassmorphic Overlay Gradient */}
                <div className="absolute inset-x-3 bottom-3 p-4 bg-slate-950/80 backdrop-blur-md rounded-xl text-white border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm">Manpreet Singh</p>
                      <p className="text-[11px] text-cyan-300 font-medium">Technical Coordinator & Full Stack</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                      7+ YOE
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Architecture</p>
                  <p className="text-xs font-bold text-foreground">Python & Django</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">React & Next.js</p>
                  <p className="text-xs font-bold text-foreground">Full Stack Apps</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
