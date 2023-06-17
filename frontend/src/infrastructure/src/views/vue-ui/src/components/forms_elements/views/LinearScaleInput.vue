<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <LinearScaleFields :element-values="elementValues" />
  </FormCard>
</template>

<script setup lang="ts">
import { LinearScale } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import LinearScaleFields from "../basics/LinearScaleFields.vue"
defineProps<{
  elementValues: LinearScale
}>()
</script>

<style scoped></style>
