"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { normalizeAssetPath } from "@/lib/projects";
import type { Project } from "@/types/project";

interface ProjectDemoModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDemoModal({ project, open, onOpenChange }: ProjectDemoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (open) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [open, project?.id]);

  // Space = play/pause, F = fullscreen. ESC-to-close and outside-click-to-close
  // are already handled by Radix's Dialog primitive, no need to duplicate them.
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video || (document.activeElement?.tagName ?? "") === "BUTTON") return;

      if (e.code === "Space") {
        e.preventDefault();
        if (video.paused) video.play().catch(() => {});
        else video.pause();
      }
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
        else video.requestFullscreen?.().catch(() => {});
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!project || !project.video) return null;

  const { video } = project;
  const src = normalizeAssetPath(video.src);
  const poster = normalizeAssetPath(video.poster ?? project.image);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="relative rounded-md overflow-hidden bg-black aspect-video">
          {isLoading && !hasError && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
              <Loader2 className="w-8 h-8 text-white animate-spin" aria-label="Loading video" />
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/70">
              This demo video couldn&apos;t be loaded. Check back soon, or view the code on
              GitHub in the meantime.
            </div>
          ) : (
            <video
              ref={videoRef}
              key={src}
              src={src}
              poster={poster}
              className="h-full w-full"
              controls
              autoPlay
              playsInline
              preload="auto"
              aria-label={`${project.title} demo video`}
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          )}
        </div>

        {video.duration && (
          <p className="text-right text-xs text-muted-foreground">Duration: {video.duration}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}