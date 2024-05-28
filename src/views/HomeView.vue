<script setup>
import EmployeesList from '../components/EmployeesList.vue'
</script>

<template>
  <main id="homeView" class="p-8">
    <EmployeesList />
  </main>
</template>

<style scoped>
.v-enter-from#homeView,
.v-leave-to#homeView {
  transition: 0.1s all ease;
  opacity: 0;
  filter: blur(2px);
}

.v-enter-to#homeView,
.v-leave-from#homeView {
  transition: 0.1s all ease;
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
</style>
