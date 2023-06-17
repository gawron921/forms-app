<template>
  <div v-for="choice in choiceValues.options" :key="choice.id">
    <input
      :id="`multiple-choice-${choice.id}`"
      v-model="checked"
      type="checkbox"
      :value="choice.id"
      :disabled="false"
    />
    <label :for="`multiple-choice-${choice.id}`">{{ choice.title }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { MultipleChoice } from "forms-app-domain/src/main"

defineProps<{
  choiceValues: MultipleChoice
}>()

const checked = ref([])
</script>

<style scoped></style>
