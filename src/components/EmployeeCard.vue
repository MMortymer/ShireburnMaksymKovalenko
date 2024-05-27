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
    class="border rounded-xl px-5 py-2"
  >
    <div class="flex items-center gap-4">
      <h3 class="flex text-xl text-black">{{ employee.FirstName }} {{ employee.LastName }}</h3>
      <p class="text-sm ml-auto">
        {{ birthdayToAgeString(employee.DateOfBirth) }}, {{ employee.Gender }}
      </p>
    </div>

    <div class="flex font-semibold">{{ employee.Occupation }}</div>
  </RouterLink>
</template>

<style scoped></style>
