<template>
<span class="character-box">{{character}}</span>
</template>

<style scoped lang="scss">
.character-box {
  @apply 
  bg-zinc-900
    dark:border-2
    dark:border-purple-100
    dark:bg-transparent
    h-12
    w-12
    text-2xl text-purple-100
    inline-flex flex-col
    justify-around
    text-center
    flex-wrap
    font-display;

  &:hover {
    @apply border-2 border-zinc-900 text-zinc-900 bg-transparent transition-colors duration-500 dark:bg-purple-100 dark:text-slate-900;
  }
}

</style>
<script setup>
defineProps(["character"]);
</script>