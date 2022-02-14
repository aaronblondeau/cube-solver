import { defineStore } from "pinia";

export const useCubeStore = defineStore({
  id: "cube",
  state: () => ({
    counter: 0,
    easyMode: true,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
