<template>
  <div
    class="relative z-20"
    tabindex="0"
    @keyup.esc="global.toggleMenuOpen"
    @keyup="(e) => handleKeyPress(e)"
  >
    <div class="demo">
      <div
        class="menu-icon"
        @click="global.toggleMenuOpen"
        :class="global.isMenuOpen ? 'active bg-purple-100 dark:bg-zinc-700' : ''"
      >
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="menu" v-if="global.isMenuOpen">
      <div
        v-for="(item, index) in menuItems"
        :key="item"
        class="w-full text-center"
        @mouseenter="selectedIndex = index"
      >
        <router-link v-if="item.path"
          :to="item.path"
          class="w-full block"
          :class="selectedIndex == index ? 'bg-purple-300/50' : ''"
          >{{ item.title }}</router-link
        >
        <div class="dark-mode cursor-pointer"
        :class="selectedIndex == index ? 'bg-purple-300/50' : ''"
         v-else @click="toggleDarkMode()">
        {{ item.title }}
      </div>
      </div>
   
      <div class="socials">
        <div class="social-box bg-blue-400">
            <a href="https://twitter.com/harryhigginsuk">
            <svg fill="#FFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
            </a>
        </div>

        <div class="social-box bg-[#2867B2]">
            <a href="https://www.linkedin.com/in/harry-higgins/">
            <svg fill="#FFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
            </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="
      w-screen
      h-screen
      bg-black/50
      z-10
      fixed
      top-0
      bottom-0
      right-0
      left-0
    "
    v-if="global.isMenuOpen"
    @click="global.toggleMenuOpen"
  ></div>
</template>
<style lang="scss">
.socials {
  @apply justify-self-end flex justify-around flex-row w-full absolute bottom-4;

  > .social-box { 
    @apply h-12 w-12 flex justify-center items-center cursor-pointer;
  }
}
.menu {
  @apply h-72 w-64 bg-purple-100  dark:bg-zinc-700 absolute right-0 flex flex-col justify-start items-center tracking-widest text-2xl font-display space-y-4 pt-4 shadow-lg;
}


.active-item {
  background: var(---main-light-color);
}
.menu-icon {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;

  .menu-icon__checkbox {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    z-index: 2;
    -webkit-touch-callout: none;
    position: absolute;
    opacity: 0;
  }
  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

    @apply bg-slate-900 dark:bg-white;

    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      bottom: 0;
    }
  }
  &.active,
  .menu-icon__cheeckbox:checked + div {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }

  &.active:hover span:first-of-type,
  &.active:hover span:last-of-type,
  &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
  &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
    width: 22px;
  }

  &:hover {
    // no need hover effect on mobile.
    @media (min-width: 1024px) {
      span:first-of-type {
        width: 26px;
      }

      span:last-of-type {
        width: 12px;
      }
    }
  }
}
</style>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive, watch } from "vue";
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
const selectedIndex = ref(null);

const router = useRouter();
const route = useRoute();

global.$subscribe((mutation, state) => {
  if (
    mutation.events.key == "isMenuOpen" &&
    mutation.events.newValue == false
  ) {
    selectedIndex.value = null;
  }
});


const toggleDarkMode = () => { 
 
  const darkMode = localStorage.getItem('darkMode');

  if (darkMode) { 
    localStorage.removeItem('darkMode');
  } else { 
    localStorage.setItem('darkMode', 'true');
  }
    global.toggleDarkMode();
  document.querySelector('body').classList.toggle('dark');
}

const menuItems = reactive([
  { title: "home", path: "/" },
  { title: "about", path: "/about" },
  {title: "toggle dark mode", action: toggleDarkMode}
]);

const handleKeyPress = (e) => {
  if (!global.isMenuOpen) return;


  // Down arrow
  if (e.keyCode == 40) {
    if (selectedIndex.value + 1 == menuItems.length) {
      selectedIndex.value = 0;
      return;
    }
    selectedIndex.value++;
  } 
  // Up Arrow
  else if (e.keyCode == 38) {
    if (selectedIndex.value - 1 == -1) {
      selectedIndex.value = menuItems.length - 1;
      return;
    }
    selectedIndex.value--;
  } else if (e.keyCode == 13) { 

    const currentItem = menuItems[selectedIndex.value];
      if (currentItem.action) { 
        currentItem.action();
        return;
      } else if (currentItem.path) { 
        router.push(currentItem.path);
      }
  }



};

watch(() => global.isMenuOpen, (value,newValue) => { 
  if (global.isMenuOpen) { 
    document.querySelector('body').classList.add('no-scroll');
  } else { 
    document.querySelector('body').classList.remove('no-scroll');
  }
})
watch(
  () => route.path,
  (value, newValue) => {
    global.isMenuOpen = false;
  }
);

</script>