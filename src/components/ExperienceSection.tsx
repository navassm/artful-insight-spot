import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "2020 - Present",
    role: "UI/UX Lead",
    company: "Tech Innovation Corp",
    description:
      "Leading a team of 8 designers, establishing design systems, and driving product strategy for B2B SaaS products.",
    type: "work",
  },
  {
    period: "2017 - 2020",
    role: "Senior UX Designer",
    company: "Digital Agency X",
    description:
      "Spearheaded UX research initiatives and delivered high-impact designs for Fortune 500 clients.",
    type: "work",
  },
  {
    period: "2014 - 2017",
    role: "UI/UX Designer",
    company: "Startup Studio",
    description:
      "Designed end-to-end experiences for early-stage startups, from concept to launch.",
    type: "work",
  },
  {
    period: "2012 - 2014",
    role: "Junior Designer",
    company: "Creative Works",
    description:
      "Started my design journey creating web interfaces and marketing materials.",
    type: "work",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Over a decade of crafting digital experiences and leading design teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Briefcase size={20} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-primary text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
