import { Link } from "react-router-dom";
import { Code2, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/manpreetsingh", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/manpreetsingh", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@manpreetsingh.dev", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/919783870541?text=Hi%20Manpreet%2C%20I'd%20like%20to%20discuss%20a%20project.", label: "WhatsApp" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Manpreet<span className="gradient-text">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Senior Full-Stack Developer with 6+ years of experience crafting scalable digital experiences with clean code and smart architecture.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Manpreet Singh. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};
