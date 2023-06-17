<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <SingleChoiceFields :choice-values="elementValues" />
  </FormCard>
</template>

<script setup lang="ts">
import { SingleChoice } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import SingleChoiceFields from "../basics/SingleChoiceFields.vue"
defineProps<{
  elementValues: SingleChoice
}>()
</script>

<style scoped></style>
