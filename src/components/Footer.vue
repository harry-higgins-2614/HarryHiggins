<template>
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
             <Character-Box character="H"/>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import CharacterBox from "@/components/CharacterBox.vue"

</script>