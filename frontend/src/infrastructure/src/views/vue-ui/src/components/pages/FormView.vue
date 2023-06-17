<template>
  <div>
    <div v-for="element in formValues.fields" :key="element.id">
      <component :is="formsTypes[element.type]" :element-values="element" style="margin-bottom: 20px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormView, FormElementType } from "forms-app-domain/src/main"
import DropdownInput from "../forms_elements/views/DropdownInput.vue"
import LinearScaleInput from "../forms_elements/views/LinearScaleInput.vue"
import LongTextInput from "../forms_elements/views/LongTextInput.vue"
import MultipleChoiceGridInput from "../forms_elements/views/MultipleChoiceGridInput.vue"
import MultipleChoiceInput from "../forms_elements/views/MultipleChoiceInput.vue"
import ShortTextInput from "../forms_elements/views/ShortTextInput.vue"
import SingleChoiceInput from "../forms_elements/views/SingleChoiceInput.vue"

defineProps<{
  formValues: FormView
}>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formsTypes: { [key: number]: any } = {
  [FormElementType.ShortText]: ShortTextInput,
  [FormElementType.LongText]: LongTextInput,
  [FormElementType.SingleChoice]: SingleChoiceInput,
  [FormElementType.MultipleChoice]: MultipleChoiceInput,
  [FormElementType.Dropdown]: DropdownInput,
  [FormElementType.LinearScale]: LinearScaleInput,
  [FormElementType.MultipleChoiceGrid]: MultipleChoiceGridInput,
}

console.log(formsTypes)
</script>

<style scoped></style>
