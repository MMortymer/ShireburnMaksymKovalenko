<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition :duration="200" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
