<template>
 <Observable v-slot="slotted">
    <Section
      showDetail="right"
      :visible="slotted.visible"
    >
      <template v-slot:header >Skills</template>
      <p class="mt-4">I'm not really one for blowing my own <span role="img" aria-label="trumpet">🎺</span> but here we are. Below is a list of technologies I've used at work or on personal projects. Listed in no particular order.</p>
      <div class="content space-y-2 ml-4 mt-2">
        <ul class="list-disc ml-2">
          <li>JavaScript
              <ul class="list-disc ml-4">
                  <li>Vue 2/3</li>
                  <li>Node.js</li>
                  <li>Plain ol' vanilla JS</li>
                  <li>Angular.js</li>
                  <li>TypeScript </li>
              </ul>
          </li>
          <li>CSS
          <ul class="list-disc ml-4">
              <li>Tailwind CSS</li>
              <li>SCSS</li>
              <li>Bootstrap</li>
          </ul>
          </li>
          <li>C#
          <ul class="list-disc ml-4">
              <li>.NET Framework</li>
              <li>.NET Core</li>
              <li>LINQ</li>
          </ul>
          </li>
           <li>AWS
          <ul class="list-disc ml-4">
              <li>AWS Lambda</li>
              <li>SQS</li>
              <li>SNS</li>
              <li>S3</li>
          </ul>
          </li>
        </ul>
      </div>
    </Section>
  </Observable>
</template>
<style lang="scss">

</style>
<script setup>

import Section from "@/components/Section.vue";
import Observable from "@/components/Observable.vue";
import { ref, onMounted } from "vue";

</script>