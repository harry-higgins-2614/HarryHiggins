<script setup>
import loader from "@/components/Loader.vue";
import HeaderComp from "@/components/Header.vue"
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
</script>

<template>
  <loader></loader>
  <header-comp></header-comp>
  <transition name="slide-fade" style="transition-delay: 1s">
    <main class="my-8" v-if="!global.loading">
      <router-view />
    </main>
  </transition>


  <footer class="breakout">
    <div class="footer-separator space-y-[0.1rem]">
      <div class="h-[0.1rem] bg-zinc-700 w-screen"></div>
      <div class="h-[0.1rem] bg-zinc-700 w-screen"></div>
    </div>
    <div class="lg:mx-72 lg:my-8 sm:mx-12 mx-4 my-4">
      <div class="footer-content">
        <a href="mailto:higgins.harry95@gmail.com" target="_new" class="font-display">Contact</a>
        <div>
          <router-link to="/">
             <span class="character-box">H</span>
          </router-link>
        </div>
      </div>
    </div>
  </footer>

  
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

.character-box {
  @apply bg-zinc-900
              h-12
              w-12
              text-2xl text-purple-100
              inline-flex flex-col
              justify-around
              text-center
              flex-wrap
              font-display;

  &:hover {

    @apply border-2 border-zinc-900 text-zinc-900 bg-transparent transition-colors duration-500;
  }
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