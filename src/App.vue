<script setup>
import loader from "@/components/Loader.vue";
import HeaderComp from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();

const darkMode = localStorage.getItem('darkMode');


  if (darkMode) { 
    document.querySelector('body').classList.add('dark');
  }
</script>

<template>
  <loader></loader>
  <header-comp></header-comp>
  <transition name="slide-fade" style="transition-delay: 1s">
    <main class="my-4" v-if="!global.loading">
      <router-view />
    </main>
  </transition>


  <Footer></Footer>

  
</template>
<style lang="scss">
@import "main.scss";


.footer-content { 
  @apply flex flex-row justify-between items-center
}
.breakout { 
  margin-left: calc((100vw - 100%) / -2);
width: 100vw;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.3s;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>