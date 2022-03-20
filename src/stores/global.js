import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { 
      loading: true,
      isMenuOpen: false
    }
  },
  actions: {
    loaded() {
      this.loading = false
    },
    toggleMenuOpen() { 
      document.querySelector('body').classList.toggle('no-scroll');
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
})