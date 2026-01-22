import { create } from "zustand";

type UIState = {
  isFiltersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  isFiltersOpen: false,
  setFiltersOpen: (open) => set({ isFiltersOpen: open }),
}));
