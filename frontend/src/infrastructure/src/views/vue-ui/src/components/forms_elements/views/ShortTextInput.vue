<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <ShortTextField
      v-model:inputValue="inputValue"
      :placeholder="elementValues.placeholder"
      :required="elementValues.required"
    />
  </FormCard>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import ShortTextField from "../basics/ShortTextField.vue"
import FormCard from "../../view_wrapper/FormCard.vue"
import { ShortText } from "forms-app-domain/src/main"
const inputValue = ref("")
watch(inputValue, (newValue, oldValue) => {
  console.log(oldValue)
  console.log(newValue)
})

defineProps<{
  elementValues: ShortText
}>()
</script>

<style scoped></style>
