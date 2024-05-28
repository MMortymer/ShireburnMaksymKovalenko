<script setup>
import { birthdayToAgeString } from '@/composables/dateUtils.js'
import { RouterLink } from 'vue-router'
defineProps({
  employee: Object
})
</script>

<template>
  <RouterLink
    :to="{ name: 'employeeDetails', params: { id: employee.Id } }"
    class="border rounded-xl px-5 py-2 hover:scale-105 hover:border-cyan-500 transition-all"
  >
    <div class="flex items-center gap-2">
      <h3 class="flex text-xl text-black">{{ employee.FirstName }} {{ employee.LastName }}</h3>
      <p class="text-sm ml-auto">
        {{ birthdayToAgeString(employee.DateOfBirth) }}, {{ employee.Gender.substring(0, 1) }}
      </p>
    </div>

    <div class="flex font-semibold">{{ employee.Occupation }}</div>
  </RouterLink>
</template>

<style scoped></style>
