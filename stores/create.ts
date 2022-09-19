import { defineStore } from "pinia";

export const useCreateStore = defineStore({
  id: "create-store",
  state: () => {
    return {
      images: [],
      cashValue: null,
      openToSelling: null,
      postDesc: null,
      postTitle: null,
      postCategory: null,
      postCategory2: null,
      condition: null,
    };
  },
});
