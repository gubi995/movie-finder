import create from 'zustand';

interface State {
  term: string;
  updateTerm: (term: string) => void;
}

export const useSearchStore = create<State>((set) => ({
  term: '',
  updateTerm: (term: string) => set({ term }),
}));
