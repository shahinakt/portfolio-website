"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ProjectVideoPreview } from "./ProjectVideoPreview";
import { useHoverPreview } from "@/hooks/useHoverPreview";
import type { Project } from "@/types/project";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, scale: 0.9, transition: { duration: 0.3 } },
};

function openExternal(url?: string) {
  if (!url) return;
  // Explicit noopener,noreferrer: window.open with only a URL leaves the
  // opened page holding a `window.opener` reference back to this tab.
  window.open(url, "_blank", "noopener,noreferrer");
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDemo: (project: Project) => void;
}

function ProjectCardImpl({ project, index, onOpenDemo }: ProjectCardProps) {
  const { isPreviewActive, handlers } = useHoverPreview(project.video?.autoplayPreview ?? true);
  const hasDemo = !!project.video || !!project.liveUrl;

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group"
      {...handlers}
    >
      <Card className="overflow-hidden rounded-xl border border-border/30 bg-card/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <ProjectVideoPreview
            image={project.image}
            title={project.title}
            video={project.video}
            isPreviewActive={isPreviewActive}
            priority={index < 3}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="mb-3 text-lg font-semibold leading-tight text-white lg:text-xl">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border-white/30 bg-white/20 text-xs text-white backdrop-blur-sm"
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 3 && (
                <Badge
                  variant="secondary"
                  className="border-white/30 bg-white/20 text-xs text-white backdrop-blur-sm"
                >
                  +{project.tech.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <CardContent className="p-5">
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="flex gap-3 p-5 pt-0">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 rounded-lg"
            disabled={!project.github}
            onClick={() => openExternal(project.github)}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>

          <Button
            size="sm"
            className="flex-1 rounded-lg"
            disabled={!hasDemo}
            onClick={() => {
              if (project.video) onOpenDemo(project);
              else openExternal(project.liveUrl);
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {project.video ? "Watch Demo" : "View Demo"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export const ProjectCard = memo(ProjectCardImpl);