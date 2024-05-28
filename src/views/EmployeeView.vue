<script setup>
import EmployeeDetails from '../components/EmployeeDetails.vue'
</script>

<template>
  <main id="details" class="p-8 flex flex-col">
    <EmployeeDetails />
  </main>
</template>

<style scoped>
.v-enter-from#details,
.v-leave-to#details {
  transition: 0.1s all ease;
  opacity: 0;
  filter: blur(2px);
}

.v-enter-to#details,
.v-leave-from#details {
  transition: 0.1s all ease;
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
</style>
