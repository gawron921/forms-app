<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <LongTextField
      v-model:inputValue="inputValue"
      :placeholder="elementValues.placeholder"
      :required="elementValues.required"
    />
  </FormCard>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import LongTextField from "../basics/LongTextField.vue"
import { LongText } from "forms-app-domain/src/main"
const inputValue = ref("")
watch(inputValue, (newValue, oldValue) => {
  console.log(oldValue)
  console.log(newValue)
})

defineProps<{
  elementValues: LongText
}>()
</script>

<style scoped></style>
