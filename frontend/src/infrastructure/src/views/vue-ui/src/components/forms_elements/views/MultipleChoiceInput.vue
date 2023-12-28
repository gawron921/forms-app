<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <MultipleChoiceFields :choice-values="elementValues" />
  </FormCard>
</template>

<script setup lang="ts">
import { MultipleChoice } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import MultipleChoiceFields from "../basics/MultipleChoiceFields.vue"
defineProps<{
  elementValues: MultipleChoice
}>()
</script>

<style scoped></style>
