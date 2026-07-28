import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Server, Database, Cloud, Box, Brain, CheckSquare, Search,
  Terminal, Globe, Layers, Zap, Cpu, HardDrive, Shield, GitBranch, Sparkles, Bot, Monitor, FileCode, Layout, FileText
} from "lucide-react";
import { techSkills, TechSkill } from "@/data/portfolioData";
import { Input } from "@/components/ui/input";

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "AI", "Tools"] as const;

// Helper to map icon names to Lucide icon components
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "Code2": return Code2;
    case "Globe": return Globe;
    case "FileCode": return FileCode;
    case "Layout": return Layout;
    case "FileText": return FileText;
    case "Terminal": return Terminal;
    case "Server": return Server;
    case "Zap": return Zap;
    case "Layers": return Layers;
    case "Database": return Database;
    case "Cpu": return Cpu;
    case "HardDrive": return HardDrive;
    case "Cloud": return Cloud;
    case "Box": return Box;
    case "Shield": return Shield;
    case "GitBranch": return GitBranch;
    case "Brain": return Brain;
    case "Sparkles": return Sparkles;
    case "Bot": return Bot;
    case "CheckSquare": return CheckSquare;
    case "Monitor": return Monitor;
    default: return Code2;
  }
};

export const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSkills = techSkills.filter((skill) => {
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative bg-muted/20">
      <div className="section-container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tech Stack & <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A comprehensive overview of my core technology stack, years of production experience, and skill mastery.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-md"
                    : "bg-card hover:bg-muted text-muted-foreground border border-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skill (e.g. Django, Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border-border/80 text-xs focus:ring-primary"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = getSkillIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card p-5 relative flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground">{skill.name}</h3>
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-extrabold border border-primary/20">
                      {skill.yearsOfExperience} Yrs Exp
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Proficiency Bar */}
                <div className="space-y-1.5 pt-2 border-t border-border/40">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-muted-foreground">Proficiency</span>
                    <span className="font-bold text-foreground">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No technologies found matching &quot;{searchQuery}&quot;.
          </div>
        )}

      </div>
    </section>
  );
};
