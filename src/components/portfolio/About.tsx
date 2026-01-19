import { motion } from "framer-motion";
import { Code2, Smartphone, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building cross-platform apps with Flutter and Dart",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experience with GitHub workflows and team projects",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Adapting to new technologies and frameworks",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a results-oriented junior software developer with strong hands-on 
              experience in Flutter and Dart. Currently pursuing my B.E. in Electronics 
              and Communication Engineering at Government College of Engineering, Srirangam, 
              graduating in 2026.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in building mobile applications using REST APIs, SQLite local 
              storage, Firebase, and state management. My passion lies in writing clean code, 
              solving problems, and creating real-world applications that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With internship experience at Vish Gyana Technology Solution and Codsoft, 
              I have developed practical skills in Flutter development and collaborative 
              GitHub workflows. I am eager to contribute to innovative projects and grow 
              as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 bg-card rounded-xl border border-border card-hover"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
