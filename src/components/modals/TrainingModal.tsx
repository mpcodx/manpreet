import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Send, CheckCircle2, MessageCircle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { profileData } from "@/data/portfolioData";
import emailjs from "@emailjs/browser";

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainingModal = ({ isOpen, onClose }: TrainingModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("Full Stack Web Development");
  const [format, setFormat] = useState("1-on-1 Private Mentorship");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = "manpreetsingh70.it@gmail.com";
    const formSubmitHash = "88aeb9484a1213b3f8f2bc9b2dd2755c";
    let sentSuccessfully = false;

    // 1. Try FormSubmit AJAX endpoint
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${formSubmitHash}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Student Name": name,
          "Student Email": email,
          "Student Phone": phone,
          "Training Format": format,
          "Target Technology": topic,
          "Learning Message": message,
          "_subject": `🎓 New Training & Mentorship Request: ${name} (${topic})`,
          "_replyto": email,
          "_template": "table",
          "_captcha": "false"
        })
      });

      if (response.ok) {
        sentSuccessfully = true;
      }
    } catch (err) {
      console.warn("FormSubmit endpoint error, opening mailto...", err);
    }

    if (sentSuccessfully) {
      toast.success("Training Request Emailed!", {
        description: "Thank you for booking! Your details have been sent directly to manpreetsingh70.it@gmail.com. Manpreet will contact you shortly."
      });
      
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onClose();
    } else {
      // Fallback mailto link
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `🎓 Training Request from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFormat: ${format}\nTopic: ${topic}\n\nGoals / Message:\n${message}`
      )}`;
      
      window.location.href = mailtoUrl;

      toast.info("Opening Email App...", {
        description: "Pre-filled training booking ready to send to manpreetsingh70.it@gmail.com."
      });
      onClose();
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-card rounded-3xl border border-border shadow-2xl p-6 sm:p-8 text-foreground"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Book a Training & Mentorship Session</h2>
              <p className="text-xs text-muted-foreground">Submit details below to email your training query to manpreetsingh70.it@gmail.com.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Your Full Name *</label>
                <Input
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border-border text-xs py-5"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Email Address *</label>
                <Input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border-border text-xs py-5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Phone / WhatsApp *</label>
                <Input
                  required
                  placeholder="+91 97838 70541"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border-border text-xs py-5"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Training Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs font-semibold"
                >
                  <option value="1-on-1 Private Mentorship">1-on-1 Private Mentorship</option>
                  <option value="Live Online Classes">Live Online Classes</option>
                  <option value="Team / Corporate Training">Team / Corporate Training</option>
                  <option value="Project-Based Learning">Project-Based Learning</option>
                  <option value="Weekend Masterclass">Weekend Masterclass</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Select Technology / Goal</label>
              <Input
                placeholder="e.g. Python, Django, React, AI/LLMs, Next.js or System Design"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="rounded-xl border-border text-xs py-5"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase mb-1 block">Learning Objectives / Message *</label>
              <Textarea
                required
                rows={3}
                placeholder="Tell me about your current background and what specific goals you want to achieve..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl border-border text-xs"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-xl py-6 shadow-lg hover:opacity-95 transition-opacity"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending Request Email..." : "Submit & Send Email Request"}
              </Button>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto rounded-xl py-6 border-emerald-500/40 text-emerald-600 font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
