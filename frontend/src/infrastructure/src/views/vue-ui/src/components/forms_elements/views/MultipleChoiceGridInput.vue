<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <MultipleChoiceGridFields :element-values="elementValues" />
  </FormCard>
</template>

<script setup lang="ts">
import { MultipleChoiceGrid } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import MultipleChoiceGridFields from "../basics/MultipleChoiceGridFields.vue"

defineProps<{
  elementValues: MultipleChoiceGrid
}>()
</script>

<style scoped></style>
