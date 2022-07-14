import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: ''
  }),
  getters: {},
  actions: {
    reset() {
      this.name = '';
    },
    setName(userName: string) {
      this.userName = userName
    }
  }
})