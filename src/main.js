import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import VuePrism from "vue-prism"


import 'prismjs/themes/prism.css'
import "prismjs/components/prism-csharp";

export const appear = {
  beforeMount(element) {
    element.style.visibility = 'hidden';
  },
  updated(element, binding, node) {
    if (!binding.value === !binding.oldValue || null === node.transition) {
      return;
    }

    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden';
        element.style.display = 'none'
      });
      return;
    }

    node.transition.beforeEnter(element);
    element.style.visibility = '';
    element.style.display = 'block'
    node.transition.enter(element);
  }
};

const pinia = createPinia();

const app = createApp(App)

const router = createRouter({
  scrollBehavior(to, from, position) { 
    return { top: 0}
  },
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia);

app.use(VuePrism)

app.directive('appear', appear)
app.mount('#app')
