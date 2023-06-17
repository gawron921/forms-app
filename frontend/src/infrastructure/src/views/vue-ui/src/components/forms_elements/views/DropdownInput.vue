<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <DropdownField :choice-values="elementValues" />
  </FormCard>
</template>

<script setup lang="ts">
import { Dropdown } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import DropdownField from "../basics/DropdownField.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
defineProps<{
  elementValues: Dropdown
}>()
</script>

<style scoped></style>
