import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = (set) => ({
  authUser: null,
  token: null,
  newToken: null,

  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setToken: (token) => set((state) => ({ ...state, token: token })),
  setNewToken: (newToken) => set((state) => ({ ...state, newToken: newToken })),

  removeAuthUser: () =>
    set({
      authUser: null,
      token: null,
      newToken: null,
    }),
});

const useAuthStore = create(
  persist(useStore, {
    name: 'auth',
  })
);

export default useAuthStore;
