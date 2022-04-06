import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { 
      loading: true,
      isMenuOpen: false,
      darkMode: localStorage.getItem('darkMode') !== null,
      isLightBoxOpen: false,
      lightBoxSource: null
    }
  },
  actions: {
    loaded() {
      this.loading = false
    },
    toggleMenuOpen() { 
      document.querySelector('body').classList.toggle('no-scroll');
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDarkMode() { 
      this.darkMode = !this.darkMode;
    }

  },
})