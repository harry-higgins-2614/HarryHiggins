<script setup>
import loader from "@/components/Loader.vue";
import HeaderComp from "@/components/Header.vue"
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
console.log(global.loading);
</script>

<template>
  <loader></loader>
  <header-comp></header-comp>
  <transition name="slide-fade" style="transition-delay: 1s">
    <main class="my-8" v-if="!global.loading">
      <router-view />
    </main>
  </transition>
</template>
<style lang="scss">
@import "main.scss";

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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>