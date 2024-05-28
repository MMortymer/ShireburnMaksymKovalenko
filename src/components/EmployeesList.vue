<script setup>
import EmployeeCard from '@/components/EmployeeCard.vue'
import employeeData from '../assets/shireburn-test-data.json'
import { ref, computed } from 'vue'

const filterOccupation = ref('')
const employeeDataList = ref(employeeData.Employees)

const filteredEmployees = computed(() => {
  if (!filterOccupation.value) {
    return employeeDataList.value
  }
  return employeeDataList.value.filter((employee) =>
    employee.Occupation.toLowerCase().includes(filterOccupation.value.toLowerCase())
  )
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-3xl">Employees List</h1>

    <!-- Filter input -->
    <input
      type="text"
      v-model="filterOccupation"
      placeholder="Filter by occupation"
      class="border rounded-xl px-3 py-1 mb-3"
    />

    <div v-if="filteredEmployees.length === 0" class="text-red-500">No employees found.</div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full sm:px-6 xl:px-24"
    >
      <EmployeeCard
        v-for="employee in filteredEmployees"
        :key="employee.Id"
        :employee="employee"
        class="w-full"
      />
    </div>
  </div>
</template>
