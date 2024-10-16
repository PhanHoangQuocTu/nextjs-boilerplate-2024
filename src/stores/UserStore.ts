import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IUser {}

export interface IMeQueryStore {
  status: 'waiting' | 'ready';
  user: IUser | undefined;
  accessToken: string;
  refreshToken: string;
  setUser: (data: IUser) => void;
  setAccessToken: (data: string) => void;
  setRefreshToken: (data: string) => void;
  logout: () => void;
}

const useBaseUserStore = create<IMeQueryStore>()(
  persist(
    (set) => ({
      status: 'waiting',
      accessToken: '',
      refreshToken: '',
      user: {} as IUser,
      setUser: (data) => set((state) => ({ ...state, user: data })),
      setAccessToken: (data) => set((state) => ({ ...state, accessToken: data })),
      setRefreshToken: (data) => set((state) => ({ ...state, refreshToken: data })),
      logout: () =>
        set(() => ({
          accessToken: '',
          refreshToken: '',
          user: undefined,
        })),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.status = 'ready';
      },
    }
  )
);

export const useUserStore = createSelectorFunctions(useBaseUserStore);
