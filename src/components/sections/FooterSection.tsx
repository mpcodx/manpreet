import { useState } from "react";
import { ArrowUp, Code2, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.561 7.685c-1.164 0-2.189.467-2.936 1.204-.693-1.37-1.102-2.798-1.303-3.84H11.8v6.876c0 1.604-1.013 2.768-2.58 2.768-1.555 0-2.52-1.164-2.52-2.768V5.05H4.25v6.876c0 3.047 2.204 5.133 5.017 5.133 2.812 0 4.81-2.086 4.81-5.133v-1.61c.226.694.51 1.38.852 2.02l-.9 4.674h2.406l.66-3.35c.463.083.95.13 1.466.13 2.812 0 4.94-1.852 4.94-4.605 0-2.74-2.128-4.5-4.94-4.5zm0 6.924c-1.11 0-2.012-.9-2.012-2.086 0-1.188.902-2.087 2.012-2.087 1.11 0 2.012.9 2.012 2.086 0 1.186-.902 2.086-2.012 2.086z"/>
  </svg>
);

export const FooterSection = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast.success("Subscribed to Tech Newsletter!", {
      description: "Thank you! You will receive articles on Python, Django, React, & AI architecture."
    });
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-card border-t border-border/80 pt-16 pb-12 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-xl">
                Manpreet <span className="text-primary font-bold">Singh</span>
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Senior Full Stack Engineer & Technical Coordinator with 7+ years of experience engineering web applications, real-time WebSocket systems, EdTech portals, and AI systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-emerald-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={profileData.upworkUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-emerald-500 transition-colors"
                aria-label="Upwork"
              >
                <UpworkIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-purple-600/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Navigation</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Tech Stack</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#mentorship" className="hover:text-primary transition-colors">Mentorship</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Full-Stack SaaS</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Real-Time WebSockets</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">REST API & FastAPI</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">EdTech & LMS Build</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AI & LLM Integration</a></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Tech Newsletter</h4>
            <p className="text-xs text-muted-foreground">
              Subscribe for technical insights on Django, React, Next.js, and AI development.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="rounded-xl border-border text-xs"
              />
              <Button type="submit" className="rounded-xl font-bold bg-primary text-white shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Manpreet Singh. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
