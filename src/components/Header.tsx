import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2, Sparkles, ChevronDown, Layers, Cpu, Workflow, BookOpen, HelpCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const primaryNavLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#mentorship", label: "Mentorship", badge: "New" },
];

const secondaryNavLinks = [
  { href: "#skills", label: "Tech Stack", icon: Cpu, desc: "Proficiency & Tools" },
  { href: "#case-studies", label: "Case Studies", icon: Layers, desc: "Deep-Dive Architecture" },
  { href: "#process", label: "Process", icon: Workflow, desc: "7-Step Pipeline" },
  { href: "#blog", label: "Blog", icon: BookOpen, desc: "Technical Articles" },
  { href: "#faq", label: "FAQ", icon: HelpCircle, desc: "Common Questions" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const allSections = ["home", "about", "services", "projects", "case-studies", "experience", "mentorship", "skills", "process", "blog", "faq", "contact"];
      for (const section of allSections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          
          {/* Executive Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-foreground flex items-center gap-1">
                Manpreet <span className="text-primary font-bold">Singh</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Senior Full Stack & AI
              </span>
            </div>
          </button>

          {/* Clean Desktop Navigation (Only 5 primary links + 1 sleek More dropdown) */}
          <div className="hidden lg:flex items-center gap-1 bg-card/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-border/60 shadow-sm">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-400/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Sleek "More" Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-3 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1 ${
                  isDropdownOpen
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 p-2 rounded-2xl bg-card border border-border/80 shadow-2xl backdrop-blur-2xl animate-fade-in flex flex-col gap-1 z-50">
                  {secondaryNavLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full p-2.5 rounded-xl text-left flex items-center gap-3 transition-colors ${
                          isActive ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-tight">{item.label}</p>
                          <p className="text-[10px] text-muted-foreground font-normal">{item.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-full px-5 py-5 text-xs shadow-md hover:shadow-lg transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Hire Me
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-full border-border/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

        </div>

        {/* Clean Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/80 shadow-2xl flex flex-col gap-3 animate-fade-in">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 mb-1">Navigation</p>
              {primaryNavLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-500 font-bold">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-1 pt-2 border-t border-border/40">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 mb-1">More Resources</p>
              {secondaryNavLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-muted-foreground">{link.desc}</span>
                </button>
              ))}
            </div>

            <Button
              className="w-full mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold rounded-xl py-3 text-xs"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </Button>
          </div>
        )}

      </nav>
    </header>
  );
};
