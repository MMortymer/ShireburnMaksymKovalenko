<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import employeeData from '../assets/shireburn-test-data.json'
import { birthdayToAgeString } from '@/composables/dateUtils.js'

const route = useRoute()
const employee = ref(null)
const employmentDate = ref('')
const terminationDate = ref('')
const statusMessage = ref('')

onMounted(() => {
  const employeeId = route.params.id
  employee.value = employeeData.Employees.find((emp) => emp.Id === employeeId)
  if (employee.value) {
    employmentDate.value = employee.value.EmploymentDate
    terminationDate.value = employee.value.TerminationDate
  }
})
</script>

<template>
  <div
    v-if="employee"
    class="self-center flex flex-col justify-center w-80 lg:w-1/3 gap-5 p-5 border rounded-xl"
  >
    <h1 class="text-3xl">{{ employee.FirstName }} {{ employee.LastName }}</h1>

    <div class="flex flex-col gap-3">
      <p><span class="font-semibold">Occupation:</span> {{ employee.Occupation }}</p>
      <p>
        <span class="font-semibold">Date of Birth:</span>
        <span v-if="typeof employee.DateOfBirth === number">{{ employee.DateOfBirth }}</span>
        ({{ birthdayToAgeString(employee.DateOfBirth) }})
      </p>
      <p><span class="font-semibold">Gender:</span> {{ employee.Gender }}</p>

      <div class="flex flex-col gap-1">
        <label for="employmentDate"><span class="font-semibold">Employment Date:</span></label>
        <input class="border rounded-xl px-3 py-1" type="date" v-model="employmentDate" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="terminationDate"><span class="font-semibold">Termination Date:</span></label>
        <input class="border rounded-xl px-3 py-1" type="date" v-model="terminationDate" />
      </div>

      <p>{{ statusMessage }}</p>
    </div>
  </div>
</template>
