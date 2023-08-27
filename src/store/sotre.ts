import { create } from "zustand";

import { Superhero } from "../types";
import { fetchSuperheroes } from "../api";

type State = {
  heros?: Superhero[];
  isLoading: boolean;
  herosIdsToCompare: string[];
};

type Actions = {
  resetState: () => void;
  getHeroesByName: (name: string) => void;
  updateCompareList: (id: any) => void;
  clearCompareList: () => void;
};

const initialState: State = {
  heros: undefined,
  isLoading: false,
  herosIdsToCompare: [],
};

export const useHerosStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  resetState: () => set(initialState),
  getHeroesByName: async (name) => {
    set({isLoading: true});
    const res = await fetchSuperheroes(name);
    set({ heros: res.results || [], isLoading: false });
  },
  updateCompareList: (id: any) => {
    const currentSelectedHerosIds = get().herosIdsToCompare;
    const isHeroSelected = currentSelectedHerosIds.includes(id);
    if (isHeroSelected) {
      set({
        herosIdsToCompare: currentSelectedHerosIds.filter(
          (selectedId) => selectedId !== id
        ),
      });
    } else {
      set({
        herosIdsToCompare: [...currentSelectedHerosIds, id],
      });
    }
  },
  clearCompareList: () => {
    set({ herosIdsToCompare: [] });
  },
}));
