"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { normalizeAssetPath } from "@/lib/projects";
import type { ProjectVideo } from "@/types/project";
import { cn } from "./ui/utils";

interface ProjectVideoPreviewProps {
  image: string;
  title: string;
  video: ProjectVideo | null;
  isPreviewActive: boolean;
  /** Pass true for above-the-fold cards (first row) to skip lazy-loading the poster. */
  priority?: boolean;
}

export function ProjectVideoPreview({
  image,
  title,
  video,
  isPreviewActive,
  priority = false,
}: ProjectVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const canPreview = isPreviewActive && !!video;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (canPreview) {
      el.currentTime = 0;
      // Autoplay can be blocked by the browser (e.g. data-saver mode); if it
      // fails we simply keep showing the poster instead of throwing.
      el.play().catch(() => {});
    } else {
      el.pause();
      setIsVideoReady(false);
    }
  }, [canPreview]);

  const previewSrc = video ? normalizeAssetPath(video.preview ?? video.src) : "";

  return (
    <div className="relative w-full h-56 overflow-hidden bg-muted">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className={cn(
          "object-cover transition-[opacity,transform] duration-700 group-hover:scale-110",
          canPreview && isVideoReady ? "opacity-0" : "opacity-100",
        )}
      />
      {video && canPreview && (
        <video
          ref={videoRef}
          key={previewSrc}
          src={previewSrc}
          muted={video.muted ?? true}
          loop={video.loop ?? true}
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setIsVideoReady(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isVideoReady ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}