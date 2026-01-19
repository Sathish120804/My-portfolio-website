import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const certifications = [
  "Flutter App Development",
  "Python Programming",
  "Machine Learning Fundamentals",
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground text-lg">
                  B.E. Electronics and Communication Engineering
                </h4>
                <p className="text-primary font-medium">
                  Government College of Engineering, Srirangam
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2022 – 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    CGPA: 7.67
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h5 className="font-medium text-foreground mb-2">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "OOP", "Database Systems", "Computer Networks"].map(
                    (course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {course}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card rounded-xl p-6 border border-border card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Continuously learning and adding new certifications to stay updated with 
                the latest technologies in mobile development and software engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
