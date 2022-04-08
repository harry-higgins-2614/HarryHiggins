<template>
  <div class="md:my-32 my-32 space-y-3">
    <h1 class="transition-colors duration-100">{{greeting}}</h1>
    <p class="font-semibold">
      I'm Harry, a full-stack software engineer with a focus on delivering perfect, polished products.
    </p>
    <p>
     I've officially been working in tech for a couple of years, but have been tinkering and learning web development since I was about ten - which means I've been around long enough to remember what a marquee is:
    </p>
    <marquee class="md:w-1/4 w-1/3">Look at me!</marquee>
    <p>
    I'm passionate about all aspects of development, although I have an affinity for front-end work. There's something about taking a design and turning it into functional code that excites me.
    </p>
    <p>
    Currently, I'm Product Lead at Prezzybox.com
    </p>
  </div>

<main class="md:space-y-48 space-y-12 md:mb-48 mb-24">
  <Work/>
  <Skills/>
<!-- 
  <Prism language="css" :code="'color: red;'"></Prism> -->
</main>
</template>

<style>
</style>

<script setup>
import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";
import Prism from "@/components/Prism.vue"

import Work from "@/components/Home/Sections/Work.vue"
import Skills from "@/components/Home/Sections/Skills.vue"
import { ref, onMounted } from "vue";

const greeting = ref(null);

onMounted(() => { 

    const hours = new Date().getHours();

    console.log(hours);

    if (hours < 6) { 
        greeting.value =  "Early riser or late sleeper? Either way, probably going to need a coffee soon."
    }
    else if (hours < 12) { 
        greeting.value = "Good Morning!"
    }
    else if (hours < 18) { 
        greeting.value = "Good Afternoon!"
    }
    else if (hours <= 23) { 
        greeting.value = "Good Evening -  Hope you've had a good day."
    }
    console.log(greeting.value)

    return { 
        greeting
    }
})



</script>
