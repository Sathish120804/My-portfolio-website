import { motion } from "framer-motion";
import { ExternalLink, Github, Newspaper, CheckSquare, Quote, DollarSign, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NewzApp",
    description: "A feature-rich Flutter news application with SQLite local storage for offline reading, bookmark functionality, and category-wise news filtering.",
    tech: ["Flutter", "Dart", "SQLite", "REST API"],
    icon: Newspaper,
    github: "https://github.com",
  },
  {
    title: "Todo List App",
    description: "A clean and intuitive task management app built with Flutter featuring complete CRUD operations, task prioritization, and local persistence.",
    tech: ["Flutter", "Dart", "SQLite"],
    icon: CheckSquare,
    github: "https://github.com",
  },
  {
    title: "Random Quote Generator",
    description: "An elegant Flutter application that fetches and displays inspiring quotes with share functionality and favorite saving capabilities.",
    tech: ["Flutter", "Dart", "API Integration"],
    icon: Quote,
    github: "https://github.com",
  },
  {
    title: "Currency Converter App",
    description: "A real-time currency converter built with Flutter that fetches live exchange rates from external APIs with support for multiple currencies.",
    tech: ["Flutter", "Dart", "REST API"],
    icon: DollarSign,
    github: "https://github.com",
  },
  {
    title: "ML Healthcare System",
    description: "An innovative machine learning-based healthcare monitoring system designed for quadriplegic patients, featuring predictive analytics and real-time monitoring.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "ML"],
    icon: HeartPulse,
    github: "https://github.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in Flutter development and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
