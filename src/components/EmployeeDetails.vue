<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import employeeData from '../assets/shireburn-test-data.json'
import { birthdayToAgeString } from '@/composables/dateUtils.js'

const route = useRoute()
const employee = ref(null)
const employmentDate = ref('')
const terminationDate = ref('')

onMounted(() => {
  const employeeId = route.params.id
  employee.value = employeeData.Employees.find((emp) => emp.Id === employeeId)
  if (employee.value) {
    employmentDate.value = employee.value.EmploymentDate
    terminationDate.value = employee.value.TerminationDate
  }
})

const statusMessages = {
  1: 'Employed soon',
  2: 'Currently employed',
  3: 'To be terminated',
  4: 'Terminated'
}

const employmentStatus = computed(() => {
  const now = new Date()
  const empDate = new Date(employmentDate.value)
  let status = 0

  if (!isNaN(empDate)) {
    status = empDate > now ? 1 : 2
  }

  return status
})

const terminationStatus = computed(() => {
  const now = new Date()
  const termDate = new Date(terminationDate.value)
  let status = 0

  if (!isNaN(termDate)) {
    status = termDate > now ? 3 : 4
  }

  return status
})
</script>

<template>
  <div
    v-if="employee"
    class="self-center flex flex-col justify-center w-64 sm:w-96 gap-5 p-5 border rounded-xl"
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

      <div class="flex flex-col gap-1" v-if="employmentStatus || terminationStatus">
        <span class="font-semibold">Employee Status:</span>
        <p>
          <span
            class="font-semibold"
            :class="{
              'text-blue-500': employmentStatus === 1,
              'text-green-500': employmentStatus === 2
            }"
          >
            {{ statusMessages[employmentStatus] }}
          </span>
          <span v-if="employmentStatus && terminationStatus">, </span>
          <span
            class="font-semibold"
            :class="{
              'text-yellow-500': terminationStatus === 3,
              'text-red-500': terminationStatus === 4
            }"
          >
            {{ statusMessages[terminationStatus] }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
