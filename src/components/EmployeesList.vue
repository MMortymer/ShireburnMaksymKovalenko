<script setup>
import { ref } from 'vue'
import { useCalculateAge } from '@/composables/calculateAge.js'
import employeeData from '../assets/shireburn-test-data.json'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-3xl">Employees List</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div
        class="border rounded-xl px-5 py-2"
        v-for="employee in employeeData.Employees"
        :key="employee.Id"
      >
        <div class="flex items-center gap-4">
          <h3 class="flex text-xl text-black">{{ employee.FirstName }} {{ employee.LastName }}</h3>
          <p class="text-sm ml-auto">
            {{
              typeof useCalculateAge(employee.DateOfBirth) === 'number'
                ? useCalculateAge(employee.DateOfBirth)
                : '?'
            }}
            y.o.,
            {{ employee.Gender }}
          </p>
        </div>

        <div class="flex">{{ employee.Occupation }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
