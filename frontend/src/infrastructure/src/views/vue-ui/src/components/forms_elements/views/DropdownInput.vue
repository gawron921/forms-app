<template>
  <FormCard>
    <FormElementTitle :title="elementValues.title" />
    <FormElementDescription :description="elementValues.description" />
    <Dropdown
      v-model="elementValues.selected"
      :options="elementValues.options"
      option-label="label"
      option-value="id"
      :show-clear="true"
      placeholder="Select"
      style="min-width: 15rem"
    ></Dropdown>
  </FormCard>
</template>

<script setup lang="ts">
import { DropdownInput } from "forms-app-domain/src/main"
import FormCard from "../../view_wrapper/FormCard.vue"
import FormElementDescription from "../basics/FormElementDescription.vue"
import FormElementTitle from "../basics/FormElementTitle.vue"
import Dropdown from "primevue/dropdown"
import { watch } from "vue"

const props = defineProps<{
  elementValues: DropdownInput
}>()

watch(
  props.elementValues,
  (newValue) => {
    console.log(newValue)
    console.log(JSON.stringify(props.elementValues))
  },
  { deep: true }
)
</script>

<style scoped></style>
