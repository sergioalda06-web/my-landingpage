import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  Language,
  Project,
  ProjectCategory,
  ProjectTag,
  ProjectsStatus,
  Theme,
} from "./types";

interface PortfolioState {
  theme: Theme;
  language: Language;
  search: string;
  selectedCategories: Array<ProjectCategory | ProjectTag>;
  projects: Project[];
  projectsStatus: ProjectsStatus;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  setSearch: (search: string) => void;
  toggleCategory: (category: ProjectCategory | ProjectTag) => void;
  clearFilters: () => void;
  loadProjects: () => Promise<void>;
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      theme: "dark",
      language: "es",
      search: "",
      selectedCategories: [],
      projects: [],
      projectsStatus: "idle",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "es" ? "en" : "es" })),
      setSearch: (search) => set({ search }),
      toggleCategory: (category) =>
        set((state) => ({
          selectedCategories: state.selectedCategories.includes(category)
            ? state.selectedCategories.filter((item) => item !== category)
            : [...state.selectedCategories, category],
        })),
      clearFilters: () => set({ search: "", selectedCategories: [] }),
      loadProjects: async () => {
        set({ projectsStatus: "loading" });
        try {
          const response = await fetch(`${import.meta.env.BASE_URL}projects.json`);
          if (!response.ok) {
            throw new Error(`Project request failed with status ${response.status}`);
          }

          const data: unknown = await response.json();
          if (!isProjectArray(data)) {
            throw new Error("Project data has an invalid format");
          }

          set({ projects: data, projectsStatus: "success" });
        } catch (error: unknown) {
          console.error("Unable to load portfolio projects.", error);
          set({ projects: [], projectsStatus: "error" });
        }
      },
    }),
    {
      name: "sergio-portfolio-settings",
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    },
  ),
);

function isProjectArray(value: unknown): value is Project[] {
  return (
    Array.isArray(value) &&
    value.every((project: unknown) => {
      if (typeof project !== "object" || project === null) return false;
      const item = project as Record<string, unknown>;
      return (
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        (item.titleEs === undefined || typeof item.titleEs === "string") &&
        typeof item.description === "string" &&
        typeof item.descriptionEs === "string" &&
        (item.category === "game" || item.category === "web") &&
        Array.isArray(item.tags) &&
        item.tags.every(
          (tag: unknown) =>
            tag === "fangame" || tag === "3d" || tag === "typescript" || tag === "react",
        ) &&
        (item.image === undefined || typeof item.image === "string") &&
        typeof item.imageAlt === "string" &&
        typeof item.imageAltEs === "string" &&
        typeof item.url === "string"
      );
    })
  );
}
