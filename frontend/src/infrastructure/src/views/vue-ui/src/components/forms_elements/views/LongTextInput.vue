<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <Textarea
      v-model="inputValue"
      :placeholder="elementValues.placeholder"
      :required="elementValues.required"
      style="width: 100%"
      autoResize
    ></Textarea>
  </FormCard>
</template>

<script setup lang="ts">
import { ref } from "vue"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import { LongText } from "forms-app-domain/src/main"
import Textarea from "primevue/textarea"

const inputValue = ref("")

defineProps<{
  elementValues: LongText
}>()
</script>

<style scoped></style>
