import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, PenTool, Lightbulb, Users, Code } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UI Design",
    description:
      "Creating visually stunning interfaces that captivate users and elevate brands with pixel-perfect precision.",
  },
  {
    icon: Users,
    title: "UX Research",
    description:
      "Deep user research and testing to uncover insights that drive design decisions and improve experiences.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Building scalable, consistent design systems that empower teams and ensure brand coherence across products.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Crafting memorable brand identities that tell your story and resonate with your target audience.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description:
      "Strategic design consulting to align business objectives with user needs and market opportunities.",
  },
  {
    icon: Code,
    title: "Prototyping",
    description:
      "Interactive prototypes that bring concepts to life, enabling faster iteration and stakeholder buy-in.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive design services that transform ideas into exceptional digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-glow hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
