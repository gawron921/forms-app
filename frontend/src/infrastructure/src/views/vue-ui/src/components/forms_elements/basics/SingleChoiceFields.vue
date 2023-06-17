<template>
  <div v-for="choice in choiceValues.options" :key="choice.id">
    <input
      :id="`single-choice-${choice.id}`"
      v-model="checked"
      type="radio"
      :value="choice.id"
      :name="choiceValues.id"
      :disabled="false"
    />
    <label :for="`single-choice-${choice.id}`">{{ choice.title }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { SingleChoice } from "forms-app-domain/src/main"

defineProps<{
  choiceValues: SingleChoice
}>()

const checked = ref(false)
</script>

<style scoped></style>
