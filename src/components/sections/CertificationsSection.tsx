import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2, FileBadge, Sparkles } from "lucide-react";
import { certificationsData, CertificationItem } from "@/data/portfolioData";

export const CertificationsSection = () => {
  return (
    <section className="py-20 relative bg-muted/20">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <FileBadge className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Licenses & <span className="gradient-text">certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Verified Simplilearn professional certifications in Prompt Engineering, AI Prompting, Docker, GitHub, and DevOps.
          </p>
        </div>

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert: CertificationItem, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-7 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Simplilearn Branding Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      S
                    </div>
                    <div>
                      <span className="font-bold text-xs text-foreground block">{cert.issuer}</span>
                      <span className="text-[10px] text-muted-foreground font-semibold">Verified Issuer</span>
                    </div>
                  </div>

                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Issued {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Credential ID if present */}
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground font-semibold mb-4">
                    Credential ID: <code className="bg-muted px-2 py-0.5 rounded text-foreground">{cert.credentialId}</code>
                  </p>
                )}

                {/* Skills tags */}
                {cert.skills && (
                  <div className="space-y-1.5 mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Skills Validated
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Verify on Simplilearn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Sparkles className="w-4 h-4 text-cyan-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
