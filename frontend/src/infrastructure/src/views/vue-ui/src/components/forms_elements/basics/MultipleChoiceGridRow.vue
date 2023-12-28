<template>
  <div class="multiple-choice-grid-fields__row">
    <div class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header">
      {{ rowValue.label }}
    </div>
    <div v-for="cell in rowElements" :key="`cell-${rowValue.id}-${cell.id}`" class="multiple-choice-grid-fields__cell">
      <RadioButton
        :input-id="`multiple-choice-grid-${rowValue.id}-${cell.id}`"
        v-model="checked"
        :value="cell.id"
        :name="`multiple-choice-grid-${rowValue.id}`"
      />
    </div>
    <Button icon="pi pi-times" severity="danger" text rounded size="small" @click="checked = null" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { GridOption } from "forms-app-domain/src/main"
import RadioButton from "primevue/radiobutton"
import Button from "primevue/button"

const checked = ref<string | null>(null)

defineProps<{
  rowElements: GridOption[]
  rowValue: GridOption
}>()
</script>

<style scoped></style>
