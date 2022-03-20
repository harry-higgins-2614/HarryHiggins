<template>
  <div class="pt-2">
    <div class="w-100 h-fit relative">
      <header class="text-[20vw] md:text-[10vw] leading-[0.8] tracking-widest font-display uppercase w-max  max-w-max relative">
        <slot name="header"></slot>
        <div class="border-detail md:-left-2 md:w-[100%] w-full hidden" v-if="visible"></div>
      </header>
      <slot name="content"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.border-detail {
  height: 2px;
  transform-origin: left;
  content: "";
//   width: calc(100% + 3rem);
  position: absolute;
  
  @apply bg-zinc-700;
  transition-delay: 1.6s;
  animation: slideFromTop 1.6s ease-in-out;
}

@keyframes slideFromTop {
  0% {
    transform: scaleX(0);
    opacity: 0.2;
  }

  10% {
    opacity: 1;
  }

  100% {
    transform: scaleX(1);
  }
}
</style>
<script setup>
import { useGlobalStore } from "@/stores/global";
import { onMounted, ref } from "vue";

const props = defineProps({
  showDetail: String,
  visible: Boolean,
});

const global = useGlobalStore();
</script>