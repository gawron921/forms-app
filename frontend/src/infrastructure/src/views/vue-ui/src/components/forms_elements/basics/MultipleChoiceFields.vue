<template>
  <div v-for="choice in choiceValues.options" :key="choice.id" class="my-2">
    <Checkbox v-model="checked" :input-id="`multiple-choice-${choice.id}`" :value="choice.id" :disabled="false" />
    <label :for="`multiple-choice-${choice.id}`" class="ml-2">{{ choice.label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { MultipleChoice } from "forms-app-domain/src/main"
import Checkbox from "primevue/checkbox"

defineProps<{
  choiceValues: MultipleChoice
}>()

const checked = ref([])
</script>

<style scoped></style>
