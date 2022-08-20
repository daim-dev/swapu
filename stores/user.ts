import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user-store",
  state: () => {
    return { user: null, profile: null };
  },
});
