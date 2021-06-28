<template>
  <div>
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <nuxt-link
          to="/"
          aria-label="Harry Higgins"
          title="Harry Higgins"
          class="inline-flex items-center"
        >
          <span
            class="ml-2 text-xl font-bold tracking-wide"
          >Harry Higgins</span>
        </nuxt-link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <nuxt-link
              to="/about"
              aria-label="About Harry"
              title="About Harry"
              class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              About
            </nuxt-link>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          <div v-if="isMenuOpen" class="fixed h-100 w-100 top-0 bottom-0 right-0 left-0 bg-gray-400 opacity-75" @click="isMenuOpen = false" />
          <div v-if="isMenuOpen" class="right-0 absolute w-1/4 text-right shadow-xl">
            <div class="p-3 bg-white border rounded">
              <nav>
                <ul class="space-y-4 font-medium tracking-wide text-gray-700">
                  <li>
                    <nuxt-link
                      to="/"
                      aria-label="Homepage"
                      title="Homepage"
                      class="inline-flex items-center"
                    >
                      🏠 Home
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/about"
                      aria-label="About Harry Higgins"
                      title="About Harry Higgins"
                      class=""
                    >
                      👨 About
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-200 h-1 shadow-md" />
  </div>
</template>
<script>

export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  watch: {
    $route () {
      this.isMenuOpen = false
    }
  }
}
</script>
