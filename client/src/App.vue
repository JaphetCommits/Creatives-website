<template>
  <div id="app">
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  overflow-x: hidden;
  width: 100%;
}

html {
  scroll-behavior: smooth;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.36s ease, transform 0.36s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
