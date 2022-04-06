<template>
<div class="h-screen w-screen bg-black/80 fixed top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center" @keydown.esc="closeLightBox()" @click.self="closeLightBox()">
<div class="close absolute right-4 top-4 text-white/80 cursor-pointer" @click.self="closeLightBox()">Close</div>
<img class="max-w-[95vw] max-h-[80vh] my-auto md:mx-auto mx-4" :src="global.lightBoxSource"/>
</div>

</template>
<script setup>
import { useGlobalStore } from "@/stores/global"
const global = useGlobalStore();


const closeLightBox = function() { 
    global.isLightBoxOpen = false;
    global.lightBoxSource = null;
}


</script>