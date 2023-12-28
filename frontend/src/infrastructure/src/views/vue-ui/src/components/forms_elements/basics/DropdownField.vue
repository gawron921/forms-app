<template>
  <select v-model="selected" :name="choiceValues.id" class="dropdown__select">
    <option disabled>Select value</option>
    <option v-for="choice in choiceValues.options" :key="choice.id" :value="choice.id">
      {{ choice.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { DropdownInput } from "forms-app-domain/src/main"

defineProps<{
  choiceValues: DropdownInput
}>()

const selected = ref([])
</script>

<style scoped></style>
