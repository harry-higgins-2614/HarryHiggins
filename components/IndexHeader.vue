<template>
  <div>
    <div v-if="page == 1" class="h-screen w-100 flex flex-col items-center justify-center">
      <transition name="fade-in-up" mode="out-in" appear>
        <h1 class="text-5xl font-bold text-blue-500 tracking-tight font-sans">
          Harry Higgins
        </h1>
      </transition>
      <transition-group name="fade-in-up" mode="out-in" appear>
        <span v-for="(item, key) in things" :key="key" class="text-primaryPurple" :style="{'transition-delay': (0.8 * (key+1)) + 's'}">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <div v-if="page == 2">
      Next page
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      things: ['Web Dev', 'Copywriter', 'SEO'],
      page: 1
    }
  },
  methods: {
    next () {
    }
  }
}
</script>
<style scoped>
.fade-in-up-enter-active, .fade-in-up-leave-active {
   transition: opacity 0.3s, transform 0.7s;
}

.fade-in-up-enter-to {
transform: translateY(0px);
}

.fade-in-up-enter, .fade-in-up-leave-to{
opacity: 0;
transform: translateY(20px);
}

</style>
