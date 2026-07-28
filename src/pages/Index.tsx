import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MouseGlow } from "@/components/MouseGlow";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Preloader & Scroll Bar */}
      <Preloader />
      <ScrollProgress />
      <MouseGlow />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections (16 Sections) */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Animated Statistics Counter */}
        <StatsSection />

        {/* 4. Categorized Tech Stack */}
        <TechStackSection />

        {/* 5. 10 Core Services */}
        <ServicesSection />

        {/* 6. Featured Production Projects */}
        <ProjectsSection />

        {/* 8. 8-Step Deep-Dive Case Studies */}
        <CaseStudiesSection />

        {/* 7. Experience Timeline */}
        <ExperienceSection />

        {/* 10. Industry Certifications Gallery */}
        <CertificationsSection />

        {/* 9. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. 7-Step Development Workflow Process */}
        <ProcessSection />

        {/* 16. Dedicated Training & Mentorship Section */}
        <TrainingSection />

        {/* 12. Technical Blog Articles */}
        <BlogSection />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Contact Form & WhatsApp Link */}
        <ContactSection />
      </main>

      {/* 15. Footer & Social Links */}
      <FooterSection />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
