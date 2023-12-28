<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <InputText
      type="text"
      v-model="inputValue"
      :placeholder="elementValues.placeholder"
      :required="elementValues.required"
    />
  </FormCard>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import FormCard from "../../view_wrapper/FormCard.vue"
import { ShortText } from "forms-app-domain/src/main"
import InputText from "primevue/inputtext"

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
