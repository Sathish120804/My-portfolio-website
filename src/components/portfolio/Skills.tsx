import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Dart", "Python", "C", "C++"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "State Management", "Local Storage", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "Firebase", "SQL"],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  },
  {
    title: "Libraries & ML (Academic)",
    skills: ["TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build mobile applications and solve problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * categoryIndex }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
