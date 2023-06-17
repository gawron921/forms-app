<template>
  <div class="multiple-choice-grid-fields__table">
    <div class="multiple-choice-grid-fields__row">
      <div class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header" />
      <div
        v-for="column in elementValues.columns"
        :key="`header-${column.id}`"
        class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header"
      >
        {{ column.title }}
      </div>
    </div>
    <!-- <MultipleChoiceGridRow
      v-for="row in elementValues.rows"
      :key="`row-${row.id}`"
      :row-elements="elementValues.columns"
      :row-value="row"
    /> -->
  </div>
</template>

<script setup lang="ts">
// import { MultipleChoiceGrid } from "forms-app-domain/src/main"
// import MultipleChoiceGridRow from "./MultipleChoiceGridRow.vue"

defineProps<{
  elementValues: any
}>()
</script>

<style scoped></style>
