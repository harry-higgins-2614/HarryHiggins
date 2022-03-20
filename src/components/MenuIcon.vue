<template>
<div class="relative z-20" tabindex="0" @keyup.enter="global.toggleMenuOpen"  @keyup.esc="global.toggleMenuOpen" @keyup="e => handleKeyPress(e)">
<div class="demo">
	<div class="menu-icon" @click="global.toggleMenuOpen" :class="global.isMenuOpen ? 'active bg-white' : ''" >
		<div>
			<span></span>
			<span></span>
		</div>
	</div>
</div>
<div class="h-72 w-64 bg-white absolute right-0 flex flex-col justify-start items-center tracking-widest text-2xl font-display space-y-4 pt-4" v-if="global.isMenuOpen">
<div v-for="(item, index) in menuItems" :key="item" class="w-full text-center" @mouseenter="selectedIndex = index"> 
    <router-link :to="item.path" class="w-full block" :class="selectedIndex == index ? 'bg-purple-300/50' : ''">{{item.title}}</router-link>
</div>
</div>
</div>
<div class="w-screen h-screen bg-black/50 z-10 fixed top-0 bottom-0 right-0 left-0" v-if="global.isMenuOpen" @click="global.toggleMenuOpen"></div>
</template>
<style lang="scss">


:root {
	--bar-bg: #212529;
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
		background-color: var(--bar-bg, #000);
		border-radius: 1px;
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

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
import { ref, onMounted, reactive, watch} from "vue"
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
const selectedIndex = ref(null);


global.$subscribe(((mutation, state) => { 
    console.log(mutation, state)

    if (mutation.events.key == "isMenuOpen" && mutation.events.newValue == false) { 
        selectedIndex.value = null;
    }
}));

const menuItems = reactive([{"title": "home", "path": "/"}, {"title": "about", "path": "/about"}]);

const handleKeyPress = (e) => {
    if (!global.isMenuOpen) return;

    if (e.keyCode == 40) { 
        if (selectedIndex.value + 1 == menuItems.length) 
        {
            selectedIndex.value = 0;
            return;
        }
         selectedIndex.value++;
    } else if (e.keyCode == 38) { 
        if (selectedIndex.value -1 == -1) { 
            selectedIndex.value = menuItems.length -1;
            return;
        }
        selectedIndex.value--;
    }
};

</script>