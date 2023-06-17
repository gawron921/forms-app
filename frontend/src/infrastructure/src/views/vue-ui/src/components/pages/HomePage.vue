<template>
  <FormView :form-values="mockForm" />
</template>

<script setup lang="ts">
import FormView from "./FormView.vue"
import { mockForm } from "../../mock/form_mock"
</script>

<style scoped></style>
