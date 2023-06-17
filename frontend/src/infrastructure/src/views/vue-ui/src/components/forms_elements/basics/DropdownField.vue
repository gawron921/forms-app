<template>
  <select v-model="selected" :name="choiceValues.id" class="dropdown__select">
    <option disabled>Select value</option>
    <option v-for="choice in choiceValues.options" :key="choice.id" :value="choice.id">
      {{ choice.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Dropdown } from "forms-app-domain/src/main"

defineProps<{
  choiceValues: Dropdown
}>()

const selected = ref([])
</script>

<style scoped></style>
