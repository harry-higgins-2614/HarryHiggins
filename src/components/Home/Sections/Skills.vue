<template>
 <Observable v-slot="slotted">
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
  </Observable>
</template>
<script setup>

import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";

</script>