<script setup>
import { ref } from 'vue'
import Menu from '@/components/Menu.vue'



// let counter = ref(0)

// setInterval(() => {
//   counter.value++
// }, 1000)
</script>

<template>
  <div>
    <header class="flex flex-row justify-around" v-show="$route.meta.title">
      <div class=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8 md:w-1/3 ">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} 
        </h1>
      </div>
      <Menu class="flex flex-col items-center justify-center"></Menu>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
