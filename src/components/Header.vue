<template>
<header class="flex flex-row justify-between items-center mr-2">
<div class="logo-bit w-2/3 md:w-1/2">
  <Transition appear mode="out-in" name="slide-fade"
  @enter="onEnter">
        <span v-if="!global.loading">
            <span class="">
            <router-link to="/">
                <Character-Box character="H"/>
            </router-link>
            </span>
        </span>

    </Transition>
    <span v-if="triggerSlide" class="reveal-from-left inline-block ml-2 text-2xl font-display">Harry Higgins</span>
    </div>
    <!-- <MenuIcon v-if="triggerSlide"></MenuIcon> -->
</header>
</template>
<style lang="scss">
#clip-wrapper {
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reveal-from-left {
  position: relative;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: .75s cubic-bezier(1,-0.01,.12,.8) 0.2s 1 revealFromLeft forwards;
}

.reveal-from-left::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: #20262b;
  padding: inherit;
  animation: .75s cubic-bezier(1,-0.01,.12,.8) 0.2s 1 revealFromLeft forwards;
}

@keyframes revealFromLeft {
  from { 
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      transform: translateX(-20px);
      opacity:0;
      
    }
  to 
  { 
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
      transform: translateX(0);
      opacity:1;
    }
}
</style>
<script setup>
import MenuIcon from "@/components/MenuIcon.vue"
import CharacterBox from "@/components/CharacterBox.vue"
import { useGlobalStore } from "@/stores/global";
import { ref } from "vue";


const global = useGlobalStore();

const triggerSlide = ref(false);

const open = ref(false);

const onEnter = function() { 
  setTimeout(() => {
    triggerSlide.value = true;
  }, 200);
}

const toggleOpen = function() { 
  open.value = !open.value;
}
</script>