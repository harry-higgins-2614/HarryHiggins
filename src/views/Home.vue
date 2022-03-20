<template>
  <div class="mb-4 space-y-2">
    <h1 class="">{{greeting}}</h1>

    <p class="font-semibold">
      I'm Harry, a software engineer with a focus on delivering perfectly
      polished products.
    </p>
    <!-- <p>
      Learn
      <router-link to="/about" class="link">about</router-link>
      me here, or carry on scrolling.
    </p> -->
  </div>

<main class="md:space-y-32 space-y-12">
 <work></work>
<skills></skills>

 
  </main>
</template>

<style>
</style>

<script setup>
import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";

import work from "@/components/Home/Sections/Work.vue"
import skills from "@/components/Home/Sections/Skills.vue"
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
