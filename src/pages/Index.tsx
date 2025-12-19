import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowRight, Code2, Zap, Shield, Rocket, Target, Lightbulb, TrendingUp, Users,
  Globe, Server, Database, Cloud, Workflow, Mail, Phone, MapPin, Send,
  MessageCircle, Linkedin, Github, Building2, Calendar, CheckCircle2, Brain
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MouseGlow } from "@/components/MouseGlow";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
];

const highlights = [
  { icon: Code2, text: "Clean Code Architecture" },
  { icon: Zap, text: "Performance Optimized" },
  { icon: Shield, text: "Security First" },
  { icon: Rocket, text: "Scalable Solutions" },
];

const values = [
  {
    icon: Target,
    title: "Problem Solving",
    description: "I don't just code—I solve problems. Every line of code I write is purposeful, addressing real business challenges.",
  },
  {
    icon: Lightbulb,
    title: "System Architecture",
    description: "Building systems that scale is my specialty. I design architectures that grow with your business.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Speed matters. I obsess over performance, ensuring your applications load fast and run smoothly.",
  },
  {
    icon: Users,
    title: "Business-Driven Solutions",
    description: "Technology should serve business goals. I translate requirements into solutions that deliver ROI.",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Python", "Django", "FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Linux"],
  },
  {
    title: "APIs & Security",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    skills: ["REST APIs", "WebSockets", "OAuth/JWT", "API Security"],
  },
  {
    title: "Tools",
    icon: Workflow,
    color: "from-indigo-500 to-violet-500",
    skills: ["Git", "Agile/Scrum", "TDD", "System Design"],
  },
];

const projects = [
  {
    title: "Allen & Unwin – Online Bookstore Platform",
    category: "Publishing / E-Commerce",
    problem:
      "Allen & Unwin needed a modern, high-performance frontend to showcase and sell books with advanced discovery features.",
    solution:
      "Built a responsive, scalable frontend with advanced search, filtering, optimized product pages, and smooth checkout, seamlessly integrated with existing catalog and backend systems.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "HTML5", "Python"],
    results: [
      "Improved user engagement",
      "Faster browsing & checkout experience",
      "Scalable frontend architecture",
    ],
    color: "from-blue-500 to-indigo-500",
  },

  {
    title: "Australian Copyright Council (ACC)",
    category: "Legal / Education Platform",
    problem:
      "Creators and institutions required an accessible, fast, and reliable platform for copyright guidance and resources.",
    solution:
      "Developed a modern, responsive website with searchable fact sheets, legal tools, and educational resources, optimized for accessibility and performance.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "Python"],
    results: [
      "Improved accessibility compliance",
      "Faster content discovery",
      "Enhanced user experience across devices",
    ],
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Banking Quest – EdTech Platform",
    category: "EdTech / FinTech",
    problem:
      "Banking professionals needed a reliable online platform for certification-focused learning and assessments.",
    solution:
      "Built an IIBF-accredited learning platform with structured courses, interactive assessments, and scalable backend architecture.",
    techStack: ["Django", "Django REST Framework", "Next.js", "Python"],
    results: [
      "500,000+ learners served",
      "High platform reliability",
      "Scalable learning infrastructure",
    ],
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "DiMO – Publishing Management System",
    category: "Enterprise SaaS / Publishing",
    problem:
      "Publishing teams struggled with duplicated work, unclear responsibilities, and disconnected systems.",
    solution:
      "Developed a cloud-based, fully integrated publishing management platform syncing schedules, title data, and distribution workflows in real time.",
    techStack: ["Django", "Python", "Docker", "Ansible", "HTML5"],
    results: [
      "Reduced manual errors",
      "Real-time data synchronization",
      "Improved operational efficiency",
    ],
    color: "from-orange-500 to-red-500",
  },

  {
    title: "Murdoch Books – Publishing E-Commerce",
    category: "Publishing / E-Commerce",
    problem:
      "Murdoch Books required a premium digital experience to showcase and sell lifestyle and illustrated books globally.",
    solution:
      "Built a modern, elegant frontend with advanced search, rich product pages, performance optimization, and backend integration.",
    techStack: ["Django", "Django REST Framework", "Vue.js", "Python", "Docker"],
    results: [
      "Premium UI/UX experience",
      "Improved content discoverability",
      "High-performance storefront",
    ],
    color: "from-cyan-500 to-blue-600",
  },

  {
    title: "Play Quiz Now – Real-Time Quiz Platform",
    category: "Gaming / Real-Time Systems",
    problem:
      "Users needed an engaging, real-time quiz platform supporting multiple play modes with live interactions.",
    solution:
      "Built a full-stack real-time quiz system with WebSockets, live scoring, team play, role-based access, analytics, and monetization features.",
    techStack: [
      "Django",
      "Django REST Framework",
      "Python",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    results: [
      "Real-time multiplayer experience",
      "Scalable WebSocket architecture",
      "Advanced admin & analytics dashboard",
    ],
    color: "from-fuchsia-500 to-rose-500",
  },
];


const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern frameworks and best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "API & Backend Development",
    description: "Robust, scalable backend systems and RESTful APIs that power your applications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    description: "Transform your ideas into market-ready products. Fast iteration, scalable architecture.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "Integrate cutting-edge AI capabilities into your applications.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensure your applications meet industry security standards and requirements.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your applications faster and more efficient for better business.",
    color: "from-indigo-500 to-violet-500",
  },
];

const experiences = [
  {
    role: "Technical Coordinator / Full-Stack Developer",
    company: "Rayon Web Solutions",
    period: "Mar 2024 - Present",
    location: "Mohali · Remote",
    achievements: [
      "Leading full-stack development for client and in-house projects using Django, DRF, React, Redux, and modern frontend stacks",
      "Designed scalable SaaS architectures and real-time systems including EdTech, publishing, and quiz platforms",
      "Collaborating directly with clients to translate business requirements into robust technical solutions",
      "Improved project delivery timelines through better code structure, reusable components, and CI/CD practices",
    ],
  },

  {
    role: "Full Stack Engineer (Freelance)",
    company: "Freelance / Contract",
    period: "Dec 2022 - Mar 2024",
    location: "Hybrid",
    achievements: [
      "Delivered multiple full-stack applications using React, JavaScript, Django, and REST APIs",
      "Built responsive, high-performance UIs and integrated them with secure backend services",
      "Worked with startups and agencies to develop MVPs, dashboards, and scalable web platforms",
      "Handled end-to-end development including deployment, optimization, and maintenance",
    ],
  },

  {
    role: "Python Developer",
    company: "Ameotech Informatics",
    period: "Jan 2021 - Dec 2022",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    achievements: [
      "Developed backend systems using Django and Django REST Framework for enterprise applications",
      "Designed and optimized APIs, improving data handling and response times",
      "Worked closely with frontend teams to deliver seamless API integrations",
      "Contributed to cloud deployments and production support",
    ],
  },

  {
    role: "Python Developer",
    company: "Vidya Pranali",
    period: "Nov 2019 - Dec 2020",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    achievements: [
      "Built and maintained Python-based backend services for web applications",
      "Worked with AWS EC2 for deployment, scaling, and server management",
      "Improved application stability and performance through debugging and optimization",
    ],
  },
];


const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "manpreetsingh70.it@gmail.com",
    href: "mailto:manpreetsingh70.it@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97838 70541",
    href: "tel:+919783870541",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide (Remote)",
    href: null,
  },
];

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919783870541?text=Hi%20Manpreet%2C%20I'd%20like%20to%20discuss%20a%20project.",
    color: "bg-[#25D366] hover:bg-[#20BD5C]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "hhttps://www.linkedin.com/in/er-manpreet-singh-0a5a7a192",
    color: "bg-[#0A66C2] hover:bg-[#004182]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mpcodx",
    color: "bg-[#333] hover:bg-[#222] dark:bg-[#444] dark:hover:bg-[#555]",
  },
];

const Index = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage("");
    setErrors({});

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Please enter your name.";
    if (!formData.email) newErrors.email = "Please enter your email.";
    if (!formData.subject) newErrors.subject = "Please enter a subject.";
    if (!formData.message) newErrors.message = "Please enter your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    emailjs
      .sendForm("service_fd5pypq", "template_zfrvqii", form, "YVhQ-69FJJ8W81fJc")
      .then(
        () => {
          setSubmitMessage("Message sent successfully!");
          setLoading(false);
          form.reset();
          setTimeout(() => setSubmitMessage(""), 3000);
        },
        () => {
          setSubmitMessage("An error occurred, please try again.");
          setLoading(false);
        }
      );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Mouse Glow Effect */}
      <MouseGlow />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          <div className="absolute inset-0 bg-hero-pattern" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="section-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-accent-foreground">Available for new projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              >
                Hi, I'm <span className="gradient-text">Manpreet Singh</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-xl mb-8"
              >
                Senior Full-Stack Developer crafting scalable digital experiences with clean code and smart architecture.{" "}
                <span className="text-foreground font-medium">6+ years</span> of building production-ready applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button variant="hero" size="xl" className="group" onClick={() => scrollToSection("contact")}>
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("projects")}>
                  View Projects
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl scale-110" />
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  {/* Placeholder for profile picture - replace src with your image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                    {/* <span className="text-6xl font-display font-bold gradient-text">MS</span> */}
                    <img src="/manpreet-singh.png" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-card border border-border rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">6+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              ABOUT ME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              Turning Complex Problems Into{" "}
              <span className="gradient-text">Elegant Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              I specialize in building high-performance web applications, scalable backend systems, 
              and SaaS products that drive business growth. From startups to enterprises, 
              I deliver solutions that are built to last.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glow-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              SKILLS & EXPERTISE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold"
            >
              Technical <span className="gradient-text">Arsenal</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glow-hover p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              FEATURED PROJECTS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold"
            >
              Work That <span className="gradient-text">Speaks</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glow-hover card-shine p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${project.color}`} />
                  <div>
                    <Badge variant="secondary" className="mb-1 text-xs">{project.category}</Badge>
                    <h3 className="text-lg font-display font-bold">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.solution}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
                <div className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              SERVICES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold"
            >
              How I Can <span className="gradient-text">Help You</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glow-hover p-6"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              EXPERIENCE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold"
            >
              Professional <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-display font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              CONTACT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold mb-4"
            >
              Let's Build Something <span className="gradient-text">Great Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Have a project in mind? I'd love to hear about it.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-medium mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg ${social.color} flex items-center justify-center text-white transition-all hover:scale-105`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={sendEmail} className="glass-card p-6 lg:p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                    disabled={loading}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                    disabled={loading}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    className={errors.subject ? "border-destructive" : ""}
                    disabled={loading}
                  />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                    disabled={loading}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={loading}>
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {submitMessage && (
                  <p className={`text-sm text-center ${submitMessage.includes("success") ? "text-green-500" : "text-destructive"}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent to-primary/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-display font-bold mb-4"
            >
              Ready to Build Something Great?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let's discuss your project and see how I can help bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" size="xl" className="group" onClick={() => scrollToSection("contact")}>
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
