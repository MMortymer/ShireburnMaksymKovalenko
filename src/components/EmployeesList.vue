<script setup>
import EmployeeCard from '@/components/EmployeeCard.vue'
import employeeData from '../assets/shireburn-test-data.json'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-3xl">Employees List</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <EmployeeCard v-for="employee in employeeData.Employees" :key="employee.Id" :employee />
    </div>
  </div>
</template>
