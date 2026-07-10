import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

// JSON import is cast once, here, so the rest of the app works against the
// typed `Project` shape instead of `any`.
export const projects: Project[] = projectsData as Project[];

/**
 * All categories in use across the project list, "All" first, no duplicates,
 * derived from the data instead of hand-maintained — adding a project with a
 * new category automatically surfaces it in the filter bar.
 */
export const projectCategories: string[] = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.category))).sort(),
];

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category.includes(category));
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Normalizes a public-relative asset path the same way the old inline
 * `normalizeAssetPath` in Projects.tsx did: passes absolute URLs through,
 * strips leading slashes, then re-adds exactly one and URI-encodes the rest
 * (so filenames with spaces, like the portfolio screenshot, resolve correctly).
 */
export function normalizeAssetPath(path?: string | null): string {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return "/" + encodeURI(path.replace(/^\/+/, ""));
}