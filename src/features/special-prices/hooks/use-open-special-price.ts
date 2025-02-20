import { create } from "zustand";

type State = {
  id: string | undefined;
  isOpen: boolean;
};

type Actions = {
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useOpenSpecialPrice = create<State & Actions>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false }),
}));
