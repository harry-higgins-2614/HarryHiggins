<script>
import { useGlobalStore } from "@/stores/global";

export default {
  setup() {

    const global = useGlobalStore();

    setTimeout(() => {
      useGlobalStore().loaded();
    }, 500);
    return {
      global,
    };
  },
};
</script>
<template>
  <Transition name="fade">
    <div v-if="global.loading">
      <div class="loader-background"></div>
      <div class="loader">
        <div class="loader-animation" style="">
          <span
            class="
              loader-animation-text
              text-purple-200
              font-display
              flex flex-col
              justify-center
              text-center
            "
          >
            H
          </span>
          <span class="loader-animation-line loader-animation-top"></span>
          <span class="loader-animation-line loader-animation-left"></span>
          <span class="loader-animation-line loader-animation-bottom"></span>
          <span class="loader-animation-line loader-animation-right"></span>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss">
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root {
  --animation-iteration: infinite;
  --animation-base-duration: 0.8s;
  --animation-fill-mode: both;
  --animation-line-width: 3px;
}

.loader {
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  backface-visibility: hidden;
  transform: translateZ(0);
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-animation-text {
  height: 8rem;
  width: 8rem;
  font-size: 4rem;
}

.loader-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--main-light-color);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23631459' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.loader-animation {
  background-color: var(--main-dark-color);
  min-width: 4rem;
  min-height: 4rem;
  position: relative;
}

.loader-animation-line {
  position: absolute;
  background-color: var(--main-light-color);
}

.loader-animation-top,
.loader-animation-bottom {
  height: var(--animation-line-width);
  left: 0;
  right: 0;
  width: 100%;
}

.loader-animation-top {
  top: 0;
  animation: var(--animation-base-duration)
    calc(var(--animation-base-duration) * 0) var(--animation-iteration)
    var(--animation-fill-mode) loading-top;

    @media (prefers-reduced-motion) { 
      animation: unset;
    }
}

.loader-animation-bottom {
  bottom: 0;
  animation: var(--animation-base-duration)
    calc((var(--animation-base-duration) / 2) * 1) var(--animation-iteration)
    var(--animation-fill-mode) loading-bottom;

    
    @media (prefers-reduced-motion) { 
      animation: unset;
    }
}

.loader-animation-left,
.loader-animation-right {
  height: 100%;
  top: 0;
  bottom: 0;
  width: var(--animation-line-width);
}
.loader-animation-left {
  left: 0;
  animation: var(--animation-base-duration)
    calc((var(--animation-base-duration) / 2) * 1) var(--animation-iteration)
    var(--animation-fill-mode) loading-left;

        @media (prefers-reduced-motion) { 
      animation: unset;
    }
}

.loader-animation-right {
  right: 0;
  animation: var(--animation-base-duration)
    calc((var(--animation-base-duration) / 2) * 3) var(--animation-iteration)
    var(--animation-fill-mode) loading-right;

        @media (prefers-reduced-motion) { 
      animation: unset;
    }
}

@keyframes loading-top {
  0% {
    transform: scaleX(0);
    transform-origin: right;
  }
  45% {
    transform: scaleX(1);
    transform-origin: right;
  }

  55% {
    transform: scaleX(1);
    transform-origin: left;
  }
  100% {
    transform: scaleX(0);
    transform-origin: left;
  }
}

@keyframes loading-bottom {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  45% {
    transform: scaleX(1);
    transform-origin: left;
  }

  55% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes loading-left {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  45% {
    transform: scaleY(1);
    transform-origin: top;
  }

  55% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

@keyframes loading-right {
  0% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  45% {
    transform: scaleY(1);
    transform-origin: bottom;
  }

  55% {
    transform: scaleY(1);
    transform-origin: top;
  }
  100% {
    transform: scaleY(0);
    transform-origin: top;
  }
}
</style>
