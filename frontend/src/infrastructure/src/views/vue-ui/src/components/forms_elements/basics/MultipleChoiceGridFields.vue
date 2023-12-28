<template>
  <div class="multiple-choice-grid-fields__table">
    <div class="multiple-choice-grid-fields__row">
      <div class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header" />
      <div
        v-for="column in elementValues.columns"
        :key="`header-${column.id}`"
        class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header"
      >
        {{ column.label }}
      </div>
    </div>
    <template v-for="row in elementValues.rows" :key="row.id">
      <MultipleChoiceGridRow :row-elements="elementValues.columns" :row-value="row" />
      <div style="display: block; width: 100%; height: 4px"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { MultipleChoiceGrid } from "forms-app-domain/src/main"
import MultipleChoiceGridRow from "./MultipleChoiceGridRow.vue"

defineProps<{
  elementValues: MultipleChoiceGrid
}>()
</script>

<style scoped></style>
