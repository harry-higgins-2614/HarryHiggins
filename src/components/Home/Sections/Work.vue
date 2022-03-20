<template>
 <observable v-slot="slotted">
    <Section
      showDetail="left"
      :visible="slotted.visible"
    >
      <template v-slot:header><span>Work</span></template>
      <div class="content space-y-2">
        <p class="mt-4">
          I'm currently <span class="font-semibold">Product Lead</span> at
          <a href="https://www.prezzybox.com"
          class="link"
          target="_new" 
          >Prezzybox.com</a>, working with an amazing team of talented people.
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

  
  <Observable v-slot="slotted">
  <div class="w-full max-w-full h-32 flex flex-row justify-around items-center" :visible="slotted.visible">
      
    <div class="flex flex-col justify-center items-center h-full">
          <img src="@/assets/Prezzybox_Logo.svg" class="md:h-full h-12"/>
          <h1 class="text-slate-800 md:text-xl text-lg">Product Lead</h1>
      </div>
      <span class="md:text-5xl"></span>
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