<template>
  <FormView :form-values="formData" />
</template>

<script setup lang="ts">
import FormView from "./FormView.vue"
import { mockForm } from "../../mock/form_mock"
import { reactive, watch } from "vue"
console.log("HomePage.vue")

const formData = reactive(mockForm)
watch(
  formData,
  () => {
    console.log(formData)
    console.log(JSON.stringify(formData))
  },
  { deep: true }
)
</script>

<style scoped></style>
