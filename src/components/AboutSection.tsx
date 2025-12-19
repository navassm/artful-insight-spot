import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Design Systems", level: 90 },
    { name: "User Research", level: 85 },
    { name: "Prototyping", level: 92 },
    { name: "Figma", level: 98 },
    { name: "Web Development", level: 75 },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              UI/UX Lead with a Passion for{" "}
              <span className="text-gradient">Crafting Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over a decade of experience in digital product design, I lead teams 
              in creating intuitive, beautiful, and user-centered experiences. My approach 
              combines strategic thinking with creative execution to deliver designs that 
              not only look stunning but also drive real business results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a UI/UX Lead, I bridge the gap between user needs and business objectives, 
              ensuring every pixel serves a purpose and every interaction delights users.
            </p>

            {/* Skills */}
            <div className="mt-10 space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-primary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-card rounded-3xl -rotate-3 border border-border/50" />
              
              {/* Main Card */}
              <div className="absolute inset-4 bg-card rounded-2xl border border-border/50 p-8 flex flex-col justify-center shadow-card">
                <div className="space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-glow">
                    N
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Design Philosophy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      "Great design is invisible. It guides users seamlessly toward their 
                      goals while creating moments of delight along the way."
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {["Figma", "Sketch", "Adobe XD", "Framer"].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
