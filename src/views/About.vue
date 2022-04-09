<script setup>

import { ref } from "vue";

const age = new ref(null);

const getAge = function() { 
    const today = new Date();
    const birthDate = new Date(1995, 2, 13);

    age.value =  new Date(today - birthDate).getUTCFullYear() - 1970;
}

getAge();

import { useGlobalStore } from "@/stores/global"

const global = useGlobalStore();
const openLightBox = function(imageSource) { 
global.isLightBoxOpen = true;
global.lightBoxSource = imageSource;
}




</script>

<template>
<div class="mt-12">
    <h1 class="mb-3">About Me!</h1>
    <div class="flex flex-col space-y-12">
    <div class="space-y-3">
    <p>I'm a {{age}} year-old Software Engineer from the UK</p>
    <p>I have two young children who are my fundamental reason for being here. Being a father is the best, most important thing I will ever be - even when I don't feel like a particularly good one!</p>
    <p>In 2021 I got married to the love of my life after being together for 10 years and it was one of the happiest days of my life (see above for the other happiest days of my life).</p>
    <p>In any spare time I get (which isn't <em>that</em> much with the chiddlers!), I enjoy video games - most recently I've been playing <em>Elden Ring</em> (along with the rest of the world).</p>
    <p>I keep up to date with the latest developments in - admittedly mostly front-end - tech, and love building fun applications as side-projects outside of work.</p>
    </div>
    
    <div class="space-y-3">
    <h2>Whimsical Projects</h2>
    <p>I'll often spend a weekend hashing out an idea for an application or website, mostly fun stuff!</p>
    <p>Recently this has included a <a href="https://festive-mahavira-997ef9.netlify.app/" class="link" target="_new">"Wordle" clone</a> without the one-word-per-day limit, to practice and try and like, be better at words and stuff.</p>
    <p>Over lockdown, I made a "cinema" experience app for the kids. I used GitHub pages to host the project, and then loaded it up on a tablet so they could pick from a selection of movies and "order" tickets, as well as "order" food and snacks from the kitchen.</p>
    <p>It seemed to excite them whenever we'd have a movie night! It made things a little bit more interactive, and provided a welcome distraction from COVID, lockdown, and isolation.</p>
    <div class="flex flex-row space-x-4">
    <img class="h-72 w-auto cursor-pointer" src="@/assets/Wordle_Clone.png" @click="openLightBox('/assets/Wordle_Clone.png')"/>
    <img class="h-72 w-auto cursor-pointer" src="@/assets/Home_Cinema_Experience.png" @click="openLightBox('/assets/Home_Cinema_Experience.png')"/>
    </div>
    </div>
    </div>
</div>
</template>
