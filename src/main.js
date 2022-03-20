import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'



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
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia);

app.directive('appear', appear)
app.mount('#app')
