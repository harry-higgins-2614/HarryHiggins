import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { loading: true }
  },
  actions: {
    loaded() {
      this.loading = false
    },
  },
})