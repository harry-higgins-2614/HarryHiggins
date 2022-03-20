<template>
 <observable v-slot="slotted">
    <Section
      showDetail="left"
      :visible="slotted.visible"
    >
      <template v-slot:header><span>Work</span></template>
      <div class="content space-y-2">
        <p class="mt-4">
          <span class="font-semibold">Product Lead</span> at
          <a href="https://www.prezzybox.com"
          class="link"
          target="_new" 
          >Prezzybox.com</a>
        </p>
        <p>
        Status: Working with an amazing group of talented people to create moments of happiness by delivering the extraordinary.
        </p>
        <p>
        As a software engineer, this means providing the highest-quality shopping experience possible for our customers.
        </p>
        <p>
        As product lead, I'm always on the look out both for areas we need to improve upon, as well as new features that will make Prezzybox.com a destination renowned for its amazing online experience.
        </p>
      </div>
    </Section>
  </observable>

  
  <Observable v-slot="slotted">
  <div class="w-full max-w-full h-32 flex flex-row justify-around items-center" :visible="slotted.visible">
      
    <div class="flex flex-col justify-center items-center h-full">
          <img src="@/assets/Prezzybox_Logo.svg" class="md:h-full h-12"/>
          <h1 class="text-slate-800 md:text-xl text-lg">Product Lead</h1>
      </div>
      <span class="text-5xl md:block hidden font-display">+</span>
    <div class="flex flex-col justify-center items-center h-full">
          <img src="@/assets/Prezzybox_Logo.svg" class="md:h-full h-12"/>
          <h1 class="text-slate-800 w-max-content md:text-xl text-lg" >Software Engineer</h1>
    </div>

  </div>
  </Observable>
</template>
<script setup>
import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";
</script>