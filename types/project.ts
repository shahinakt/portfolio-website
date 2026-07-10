export interface ProjectVideo {
  /** Full demo video, played in the modal. Relative to /public, e.g. "/videos/demo.mp4". */
  src: string;
  /**
   * Short muted loop used for the hover preview on the card.
   * Falls back to `src` when omitted — but a dedicated short clip loads far faster on hover.
   */
  preview?: string;
  /** Poster frame shown before playback. Falls back to the project's `image` when omitted. */
  poster?: string;
  /** Human-readable duration, e.g. "1:42". Optional, shown in the modal if present. */
  duration?: string;
  /** Whether the card should autoplay `preview` on hover (desktop only, see useHoverPreview). */
  autoplayPreview?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Thumbnail / fallback poster image, relative to /public. */
  image: string;
  tech: string[];
  category: string[];
  github?: string;
  /** External link for projects with no video (e.g. a live site). */
  liveUrl?: string;
  /** Null when no demo video exists yet for this project. */
  video: ProjectVideo | null;
}