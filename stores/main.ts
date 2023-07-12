import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      token: "",
    };
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
