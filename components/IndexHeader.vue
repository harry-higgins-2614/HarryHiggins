<template>
  <div>
    <div v-if="page == 1" class="py-4 w-100 flex flex-col items-center justify-center">
      <transition name="fade-in-up" mode="out-in" appear>
        <h1 class="text-5xl font-bold text-blue-500 tracking-tight font-sans">
          Harry Higgins
        </h1>
      </transition>
      <transition-group name="fade-in-up" mode="out-in" appear>
        <span v-for="(item, key) in things" :key="key" class="text-gray-800 text-opacity-50" :style="{'transition-delay': (0.8 * (key+1)) + 's'}">
          {{ item }}
        </span>
      </transition-group>
      <transition name="fade-in-up" mode="out-in" appear>
        <div :style="{'transition-delay': '2.8s'}" class="mt-8 w-1/3 text-gray-800 text-opacity-75">
          Hello. I'm Harry. Hope you're having {{ dayAdjective }} day!
          <br>
          <br>
          This site is where I'll be sharing thoughts and ideas on managing chronic illness, working in tech, and web development.
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      things: ['Web Dev', 'Copywriter', 'Spoonie'],
      page: 1,
      adjectives: ['a brilliant', 'a good', 'an incredible', 'a great']
    }
  },
  computed: {
    dayAdjective () {
      return this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
    }
  },
  methods: {
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
