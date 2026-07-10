"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ProjectCard } from "./ProjectCard";
import { ProjectDemoModal } from "./ProjectDemoModal";
import { projectCategories, getProjectsByCategory } from "@/lib/projects";
import type { Project } from "@/types/project";

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.05 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const filteredProjects = getProjectsByCategory(activeCategory);

  const handleOpenDemo = (project: Project) => {
    setDemoProject(project);
    setIsDemoOpen(true);
  };

  return (
    <section className="flex min-h-screen items-center bg-background py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="mb-12 text-center lg:mb-16"
        >
          <h2 className="mb-3 text-2xl sm:text-3xl lg:mb-4 lg:text-4xl xl:text-5xl">
            Featured Projects
          </h2>
          <motion.p
            variants={titleVariants}
            className="mx-auto max-w-3xl px-4 text-lg text-muted-foreground lg:text-xl"
          >
            A showcase of my work across different domains and technologies
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={filterVariants}
          className="mb-8 flex flex-wrap justify-center gap-2 px-4 lg:mb-12 lg:gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
            <motion.div
              key={category}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-4 py-2 text-xs transition-all duration-300 lg:px-6 lg:text-sm"
                size="sm"
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid - Mobile: 1, Tablet: 2, Desktop: 3 */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeCategory}-${project.id}`}
                project={project}
                index={index}
                onOpenDemo={handleOpenDemo}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectDemoModal
          project={demoProject}
          open={isDemoOpen}
          onOpenChange={(open) => {
            setIsDemoOpen(open);
            if (!open) setDemoProject(null);
          }}
        />

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center"
          >
            <p className="text-lg text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}