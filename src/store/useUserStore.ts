import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUser, TUserCriterias, TUserFavourites } from "../types/user.spec";
import { TTravel } from "../types/travel.spec";

interface UserState {
  user: TUser | null;
  userFavourites: TUserFavourites;
  userCriterias: TUserCriterias | null;
  setUser: (user: TUser) => void;
  addUserFavourite: (favourite: TTravel) => void;
  removeUserFavourite: (favouriteId: string) => void;
  setUserCriterias: (criterias: TUserCriterias) => void;
  clearUserState: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      userFavourites: [],
      userCriterias: {
        departureDate: null,
        returnDate: null,
        departureCity: "Lille",
        passengers: 2,
        destination: "Europe",
        budget: 300,
      },
      setUser: (user) => set(() => ({ user })),
      addUserFavourite(favourite) {
        set((state) => ({
          userFavourites: [...state.userFavourites, favourite],
        }));
      },
      removeUserFavourite: (favouriteId) =>
        set((state) => ({
          userFavourites: state.userFavourites?.filter(
            (favourite) => favourite.id !== favouriteId
          ),
        })),
      setUserCriterias: (criterias) =>
        set(() => ({ userCriterias: criterias })),
      clearUserState: () => set(() => ({ user: null })),
    }),
    { name: "username-storage" }
  )
);

export { useUserStore };
