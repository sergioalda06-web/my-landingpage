export type Theme = "dark" | "light";
export type Language = "es" | "en";
export type ProjectCategory = "game" | "web";
export type ProjectTag = "fangame" | "3d" | "typescript" | "react";

export interface Project {
  id: string;
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs: string;
  category: ProjectCategory;
  tags: ProjectTag[];
  image?: string;
  imageAlt: string;
  imageAltEs: string;
  url: string;
}

export type ProjectsStatus = "idle" | "loading" | "success" | "error";
