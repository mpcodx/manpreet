import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, CheckCircle2, UserCheck, Video, Building2, FolderCode, Calendar, 
  Sparkles, MessageCircle, Mail, BookOpen, Users, Award, Code2
} from "lucide-react";
import { trainingData, profileData } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { TrainingModal } from "@/components/modals/TrainingModal";

export const TrainingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="mentorship" className="py-20 relative bg-muted/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Upskill & Learn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {trainingData.title}
          </h2>
          <p className="mt-4 text-lg font-bold text-foreground">
            {trainingData.headline}
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {trainingData.description}
          </p>
        </div>

        {/* Training Formats Cards */}
        <div className="mb-16">
          <h3 className="font-bold text-xl text-center mb-8 flex items-center justify-center gap-2">
            <Video className="w-5 h-5 text-purple-500" />
            Flexible Training Formats
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trainingData.trainingFormats.map((fmt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-5 flex flex-col justify-between text-center group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1.5">{fmt.title}</h4>
                  <p className="text-xs text-muted-foreground leading-normal">{fmt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Areas Grid */}
        <div className="glass-card p-8 sm:p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            Comprehensive Training Topics & Modules
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {trainingData.trainingAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="text-xs font-semibold text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column: Who Can Join & Why Learn From Me */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Who Can Join? */}
          <div className="glass-card p-8">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Who Can Join This Program?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainingData.targetAudience.map((aud, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border/60">
                  <h4 className="font-bold text-sm text-foreground mb-1">{aud.title}</h4>
                  <p className="text-xs text-muted-foreground">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Learn From Me? */}
          <div className="glass-card p-8">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Why Learn Modern Dev From Me?
            </h3>

            <div className="space-y-3">
              {trainingData.whyLearnFromMe.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-foreground/90">{reason}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Call To Action Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-2">
              Ready to Accelerate Your Developer Journey?
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-xl font-medium">
              Interested in learning any technology, upskilling your engineering team, or building a real-world project? Let&apos;s connect today!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-950 hover:bg-slate-100 font-extrabold rounded-full px-7 py-6 text-sm shadow-lg"
            >
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
              Book a Training Session
            </Button>

            <a href={profileData.whatsappUrl} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 border-white/40 text-white hover:bg-white/20 font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-emerald-400" />
                WhatsApp Me
              </Button>
            </a>

            <Button
              onClick={scrollToContact}
              variant="ghost"
              className="rounded-full px-5 py-6 text-white hover:bg-white/10 font-semibold"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Training Booking Modal */}
        <TrainingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </section>
  );
};
