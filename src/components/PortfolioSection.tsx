import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "Complete redesign of a financial analytics platform with focus on data visualization.",
    tags: ["Dashboard", "Finance", "Data Viz"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Product Design",
    description: "End-to-end shopping experience redesign increasing conversion by 45%.",
    tags: ["E-commerce", "Mobile", "Conversion"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    category: "Mobile App",
    description: "Award-winning health tracking app with intuitive habit-building features.",
    tags: ["Health", "iOS", "UX Research"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Enterprise Design System",
    category: "Design System",
    description: "Scalable component library serving 12 product teams across the organization.",
    tags: ["Design System", "Components", "Documentation"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "SaaS Platform Redesign",
    category: "Web App",
    description: "B2B platform transformation improving user onboarding and reducing churn.",
    tags: ["SaaS", "B2B", "Onboarding"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    category: "UI/UX Design",
    description: "Seamless travel booking experience with personalized recommendations.",
    tags: ["Travel", "Booking", "Personalization"],
    color: "from-teal-500/20 to-blue-500/20",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    </section>
  );
};

export default PortfolioSection;
