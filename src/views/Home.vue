<template>
  <div class="mb-4 space-y-2">
    <h1 class="">{{greeting}}</h1>

    <p class="font-semibold">
      I'm Harry, a software engineer with a focus on delivering perfectly
      polished products.
    </p>
    <p>
      Learn
      <router-link to="/about" class="link">about</router-link>
      me here, or carry on scrolling.
    </p>
  </div>

<main class="space-y-32">
  <observable v-slot="slotted">
    <Section
      showDetail="left"
      :visible="slotted.visible"
    >
      <template v-slot:header>Work</template>
      <div class="content space-y-2">
        <p class="mt-4">
          I'm currently <span class="font-semibold">Product Lead</span> at
          Prezzybox.com, working with an amazing team of talented people.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          fuga, ad alias accusantium porro ducimus vitae assumenda distinctio
          dignissimos rem, ut sint quis vero sed? Dolorem, autem. Animi,
          voluptate rerum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          cumque quos ducimus beatae sapiente a itaque atque non distinctio nemo
          molestiae iusto maxime consectetur error est temporibus. Maxime, aut
          fugiat. Dicta eos, exercitationem esse a excepturi, quas nihil magni
          inventore sequi quis molestiae illo deleniti architecto, veritatis
          recusandae fugiat reiciendis repudiandae culpa dolorem minima
          similique! Maxime quam facere deserunt pariatur? Dicta rerum cum
          provident assumenda dolor ex vitae corporis, voluptas nulla tempora
          aut, molestiae eaque odit maxime harum error laboriosam. Voluptatem
          temporibus nam, quam velit beatae ex soluta accusamus porro.
          Doloremque tenetur quas iusto voluptates beatae at hic ratione
          nesciunt quis mollitia incidunt praesentium itaque perferendis,
          voluptate illo? Reiciendis alias minima earum sint debitis dignissimos
          facilis aperiam quibusdam. Perferendis, laboriosam?
        </p>
      </div>
    </Section>
  </observable>

  <div class="w-full max-w-full h-32 flex flex-row justify-around items-center">
      
    <div class="flex flex-col justify-center items-center h-full">
          <img src="@/assets/Prezzybox_Logo.svg" class="h-full"/>
          <h1 class="text-slate-800 tracking-wider">Product Lead</h1>
      </div>
      <span class="text-5xl">+</span>
    <div class="flex flex-col justify-center items-center h-full">
          <img src="@/assets/Prezzybox_Logo.svg" class="h-full"/>
          <h1>Software Engineer</h1>
    </div>

  </div>

  <observable v-slot="slotted">
    <Section
      showDetail="right"
      :visible="slotted.visible"
    >
      <template v-slot:header>Skills</template>
      <div class="content space-y-2">
        <p class="mt-4">
          I'm currently <span class="font-semibold">Product Lead</span> at
          Prezzybox.com, working with an amazing team of talented people.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          fuga, ad alias accusantium porro ducimus vitae assumenda distinctio
          dignissimos rem, ut sint quis vero sed? Dolorem, autem. Animi,
          voluptate rerum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          cumque quos ducimus beatae sapiente a itaque atque non distinctio nemo
          molestiae iusto maxime consectetur error est temporibus. Maxime, aut
          fugiat. Dicta eos, exercitationem esse a excepturi, quas nihil magni
          inventore sequi quis molestiae illo deleniti architecto, veritatis
          recusandae fugiat reiciendis repudiandae culpa dolorem minima
          similique! Maxime quam facere deserunt pariatur? Dicta rerum cum
          provident assumenda dolor ex vitae corporis, voluptas nulla tempora
          aut, molestiae eaque odit maxime harum error laboriosam. Voluptatem
          temporibus nam, quam velit beatae ex soluta accusamus porro.
          Doloremque tenetur quas iusto voluptates beatae at hic ratione
          nesciunt quis mollitia incidunt praesentium itaque perferendis,
          voluptate illo? Reiciendis alias minima earum sint debitis dignissimos
          facilis aperiam quibusdam. Perferendis, laboriosam?
        </p>
      </div>
    </Section>
  </observable>
  </main>
</template>

<style>
</style>

<script setup>
import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";
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
