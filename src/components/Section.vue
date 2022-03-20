<template>
    <div class="w-100 h-fit relative">
      <div
        class="border-detail" v-if="visible"></div>
      <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.border-detail {
  width: 2px;
  transform-origin: top;
  content: "";
  position: absolute;
  top: 1rem;
  bottom: 0;
  @apply bg-zinc-700;
  animation: slideFromTop 1.8s ease-in-out;
}

@keyframes slideFromTop {
  0% {
    transform: scaleY(0);
    opacity: 0.2;
  }

  10% {
    opacity: 1;
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
<script setup>
import { useGlobalStore } from "@/stores/global";
import { onMounted, ref } from "vue";

const props = defineProps({
  showDetail: String,
  visible: Boolean
});

const global = useGlobalStore();



</script>