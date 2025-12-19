import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  color: string;
  image: string;
  url: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "Complete redesign of a financial analytics platform with focus on data visualization.",
    fullDescription: "Led the complete redesign of a financial analytics platform, focusing on creating intuitive data visualizations that make complex financial data accessible to users. The project involved extensive user research, prototyping, and iterative design to achieve a 60% improvement in user task completion rates.",
    tags: ["Dashboard", "Finance", "Data Viz"],
    color: "from-blue-500/20 to-cyan-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    url: "https://example.com/fintech",
    role: "Lead UI/UX Designer - Responsible for end-to-end design process including user research, wireframing, prototyping, visual design, and design system creation.",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Product Design",
    description: "End-to-end shopping experience redesign increasing conversion by 45%.",
    fullDescription: "Redesigned the complete e-commerce journey from product discovery to checkout, resulting in a 45% increase in conversion rates. Implemented personalized recommendations, streamlined checkout flow, and mobile-first responsive design that significantly improved user engagement.",
    tags: ["E-commerce", "Mobile", "Conversion"],
    color: "from-orange-500/20 to-red-500/20",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    url: "https://example.com/ecommerce",
    role: "Product Designer - Led design strategy, conducted A/B testing, created responsive designs, and collaborated with development team for seamless implementation.",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    category: "Mobile App",
    description: "Award-winning health tracking app with intuitive habit-building features.",
    fullDescription: "Designed an award-winning health and wellness mobile application that helps users build healthy habits through gamification and personalized tracking. The app features intuitive onboarding, daily check-ins, progress visualization, and social accountability features.",
    tags: ["Health", "iOS", "UX Research"],
    color: "from-green-500/20 to-emerald-500/20",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    url: "https://example.com/health-app",
    role: "UX Lead - Conducted user research, designed information architecture, created interactive prototypes, and established design patterns for the mobile experience.",
  },
  {
    id: 4,
    title: "Enterprise Design System",
    category: "Design System",
    description: "Scalable component library serving 12 product teams across the organization.",
    fullDescription: "Built a comprehensive enterprise design system from the ground up, serving 12 product teams across the organization. The system includes 200+ components, detailed documentation, accessibility guidelines, and design tokens that ensure consistency across all products.",
    tags: ["Design System", "Components", "Documentation"],
    color: "from-purple-500/20 to-pink-500/20",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    url: "https://example.com/design-system",
    role: "Design System Lead - Architected the component library, established design principles, created documentation, and led cross-team adoption workshops.",
  },
  {
    id: 5,
    title: "SaaS Platform Redesign",
    category: "Web App",
    description: "B2B platform transformation improving user onboarding and reducing churn.",
    fullDescription: "Transformed a B2B SaaS platform's user experience, focusing on simplifying the onboarding process and improving feature discoverability. The redesign resulted in 35% faster onboarding completion and 25% reduction in customer churn rate.",
    tags: ["SaaS", "B2B", "Onboarding"],
    color: "from-yellow-500/20 to-orange-500/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    url: "https://example.com/saas",
    role: "Senior UX Designer - Redesigned core user flows, created onboarding experiences, conducted usability testing, and worked closely with product and engineering teams.",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    category: "UI/UX Design",
    description: "Seamless travel booking experience with personalized recommendations.",
    fullDescription: "Designed a modern travel booking platform that combines AI-powered recommendations with an intuitive booking flow. The platform features smart search, personalized itineraries, and a seamless mobile experience that increased booking completion by 40%.",
    tags: ["Travel", "Booking", "Personalization"],
    color: "from-teal-500/20 to-blue-500/20",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    url: "https://example.com/travel",
    role: "UI/UX Designer - Designed the booking flow, search experience, and personalization features while ensuring accessibility and cross-platform consistency.",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated selection of projects showcasing strategic design thinking and creative execution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-glow">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <motion.div
                      animate={{ 
                        rotate: hoveredId === project.id ? 45 : 0,
                        scale: hoveredId === project.id ? 1.1 : 1
                      }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                    >
                      <ArrowUpRight 
                        size={18} 
                        className="text-primary group-hover:text-primary-foreground transition-colors" 
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all">
            View All Projects
            <ExternalLink size={18} />
          </button>
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border/50">
          {selectedProject && (
            <>
              {/* Project Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-30`} />
              </div>

              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                    {selectedProject.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold font-display">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Project URL */}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm mt-2"
              >
                <ExternalLink size={16} />
                {selectedProject.url}
              </a>

              {/* Project Description */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Project Overview
                </h4>
                <DialogDescription className="text-foreground/80 text-base leading-relaxed">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </div>

              {/* My Role */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-card border border-border/50">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  My Role
                </h4>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {selectedProject.role}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 flex gap-3">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={() => window.open(selectedProject.url, '_blank')}
                >
                  View Live Project
                  <ExternalLink size={16} className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
