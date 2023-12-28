<template>
  <div v-for="choice in choiceValues.options" :key="choice.id" class="my-2">
    <RadioButton
      :inputId="`single-choice-${choice.id}`"
      v-model="checked"
      :value="choice.id"
      :name="choiceValues.id"
      :disabled="false"
    />
    <label class="ml-2" :for="`single-choice-${choice.id}`">{{ choice.label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { SingleChoice } from "forms-app-domain/src/main"
import RadioButton from "primevue/radiobutton"

defineProps<{
  choiceValues: SingleChoice
}>()

const checked = ref(false)
</script>

<style scoped></style>
