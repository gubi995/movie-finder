import { ReactNode } from 'react';
import create from 'zustand';

interface State {
  term: string;
  content: ReactNode;
  updateTerm: (term: string) => void;
  setContent: (term: ReactNode) => void;
}

export const useStore = create<State>((set) => ({
  term: '',
  content: null,
  updateTerm: (term: string) => set({ term }),
  setContent: (content: ReactNode) => set({ content }),
}));
