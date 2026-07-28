import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { profileData } from "@/data/portfolioData";
import emailjs from "@emailjs/browser";

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.561 7.685c-1.164 0-2.189.467-2.936 1.204-.693-1.37-1.102-2.798-1.303-3.84H11.8v6.876c0 1.604-1.013 2.768-2.58 2.768-1.555 0-2.52-1.164-2.52-2.768V5.05H4.25v6.876c0 3.047 2.204 5.133 5.017 5.133 2.812 0 4.81-2.086 4.81-5.133v-1.61c.226.694.51 1.38.852 2.02l-.9 4.674h2.406l.66-3.35c.463.083.95.13 1.466.13 2.812 0 4.94-1.852 4.94-4.605 0-2.74-2.128-4.5-4.94-4.5zm0 6.924c-1.11 0-2.012-.9-2.012-2.086 0-1.188.902-2.087 2.012-2.087 1.11 0 2.012.9 2.012 2.086 0 1.186-.902 2.086-2.012 2.086z"/>
  </svg>
);

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "SaaS Development",
    budget: "$1k - $5k",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = "manpreetsingh70.it@gmail.com";
    const formSubmitHash = "88aeb9484a1213b3f8f2bc9b2dd2755c";
    let sentSuccessfully = false;

    // 1. Try EmailJS if env keys are present
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && formRef.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        sentSuccessfully = true;
      } catch (err) {
        console.warn("EmailJS error, falling back to simple email API...", err);
      }
    }

    // 2. Fallback to FormSubmit simple clean email service
    if (!sentSuccessfully) {
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${formSubmitHash}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "Client Name": formData.name,
            "Client Email": formData.email,
            "Service Requested": formData.service,
            "Estimated Budget": formData.budget,
            "Subject": formData.subject || `Portfolio Query from ${formData.name}`,
            "Project Message": formData.message,
            "_subject": `📥 New Portfolio Inquiry: ${formData.subject || formData.name}`,
            "_replyto": formData.email,
            "_template": "table",
            "_captcha": "false"
          })
        });

        if (response.ok) {
          sentSuccessfully = true;
        }
      } catch (err) {
        console.warn("FormSubmit endpoint error, opening mail client...", err);
      }
    }

    if (sentSuccessfully) {
      toast.success("Query Sent Successfully!", {
        description: "Your inquiry has been emailed directly to manpreetsingh70.it@gmail.com. Manpreet will reply to your email shortly!"
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        service: "SaaS Development",
        budget: "$1k - $5k",
        message: ""
      });
    } else {
      // 3. Simple mailto fallback
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      toast.info("Opening Mail Client...", {
        description: "Pre-filled query ready to send to manpreetsingh70.it@gmail.com."
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Submit your query below. All messages are emailed directly to <strong className="text-foreground">manpreetsingh70.it@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Availability Box */}
            <div className="glass-card p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <h3 className="font-bold text-base text-foreground">Current Availability</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Accepting new projects, freelance contracts, enterprise consulting, and mentorship bookings. Fast response guaranteed under 24 hrs.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Direct Email</p>
                  <a href={`mailto:${profileData.email}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Direct Phone / WhatsApp</p>
                  <a href={profileData.whatsappUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-500 hover:underline">
                    Chat on WhatsApp (+91 97838 70541)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Location & Remote</p>
                  <p className="text-sm font-bold text-foreground">{profileData.location}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-card p-6">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                Connect Across Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-card border border-border flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-card border border-border flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-card border border-border flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={profileData.upworkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-card border border-border flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                >
                  <UpworkIcon className="w-4 h-4" />
                  <span>Upwork</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 relative overflow-hidden"
          >
            <h3 className="font-bold text-2xl mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Submit Your Project Query
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              When submitted, a simple summary email will be sent directly to <strong className="text-foreground">manpreetsingh70.it@gmail.com</strong>.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Your Name *</label>
                  <Input
                    name="user_name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border text-xs py-5"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Your Email *</label>
                  <Input
                    name="user_email"
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border text-xs py-5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-border bg-card text-xs font-semibold text-foreground focus:ring-primary"
                  >
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Real-Time & WebSockets">Real-Time & WebSockets</option>
                    <option value="AI Application Development">AI Application Development</option>
                    <option value="Custom Web Applications">Custom Web Applications</option>
                    <option value="REST API & Backend">REST API & Backend</option>
                    <option value="Startup MVP Package">Startup MVP Package</option>
                    <option value="Training & Mentorship">Training & Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Estimated Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-border bg-card text-xs font-semibold text-foreground focus:ring-primary"
                  >
                    <option value="< $1,000">&lt; $1,000</option>
                    <option value="$1k - $5k">$1,000 - $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k+">$15,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Subject *</label>
                <Input
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-xl border-border text-xs py-5"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1.5 block">Message *</label>
                <Textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border text-xs"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-xl text-sm py-6 shadow-xl hover:opacity-95 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending Query Email..." : "Submit Query Email"}
                </Button>

                <a
                  href={`mailto:manpreetsingh70.it@gmail.com?subject=Project Inquiry&body=Hi Manpreet,`}
                  className="inline-flex items-center justify-center"
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto rounded-xl py-6 border-border font-bold text-xs"
                  >
                    <Mail className="w-4 h-4 mr-2 text-purple-500" />
                    Open Email App
                  </Button>
                </a>
              </div>
            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
