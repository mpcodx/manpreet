import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/data/portfolioData";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative bg-background">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback & Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            What founders, CTOs, and product directors say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between relative group hover:border-purple-500/50 transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-foreground/90 italic leading-relaxed mb-6 relative">
                  <Quote className="w-8 h-8 text-primary/10 absolute -top-4 -left-2 -z-10" />
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-base text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground font-semibold">
                    {item.role} • {item.company}
                  </p>
                  <span className="text-[10px] text-cyan-500 font-extrabold uppercase tracking-wider block mt-0.5">
                    Project: {item.projectType}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
