"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Drives the "play a muted preview video on hover" behavior for a project card.
 *
 * Hover preview is enabled only when:
 *  - the project opts in (`autoplayPreview`)
 *  - the device has real mouse hover + a fine pointer (excludes touch, regardless
 *    of viewport width — a tablet in landscape is still "mobile" for this purpose)
 *  - the user hasn't requested reduced motion
 */
export function useHoverPreview(autoplayPreview: boolean = true) {
  const [isHovering, setIsHovering] = useState(false);
  const [supportsHoverPreview, setSupportsHoverPreview] = useState(false);

  useEffect(() => {
    if (!autoplayPreview || typeof window === "undefined") return;

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setSupportsHoverPreview(hoverQuery.matches && !motionQuery.matches);
    };
    update();

    hoverQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      hoverQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, [autoplayPreview]);

  const onMouseEnter = useCallback(() => setIsHovering(true), []);
  const onMouseLeave = useCallback(() => setIsHovering(false), []);

  return {
    /** Whether the preview video should actually be mounted and playing right now. */
    isPreviewActive: supportsHoverPreview && isHovering,
    handlers: { onMouseEnter, onMouseLeave },
  };
}