import { ReactNode } from 'react';
import create from 'zustand';

interface State {
  searchTerm: string;
  modalContent: ReactNode;
  updateSearchTerm: (term: string) => void;
  setModalContent: (term: ReactNode) => void;
}

export const useStore = create<State>((set) => ({
  searchTerm: '',
  modalContent: null,
  updateSearchTerm: (term: string) => set({ searchTerm: term }),
  setModalContent: (content: ReactNode) => set({ modalContent: content }),
}));
