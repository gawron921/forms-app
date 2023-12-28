<template>
  <div class="flex justify-center justify-content-between">
    <div class="flex items-center">
      <p>{{ elementValues.minLabel }}</p>
    </div>
    <div v-for="value in range" :key="`linear-scale-${value}`" class="flex flex-column p-3">
      <RadioButton :input-id="`linear-scale-${value}`" v-model="selected" :name="elementValues.id" :value="value" />
      <label :for="`linear-scale-${value}`" class="text-center mt-2">{{ value }}</label>
    </div>
    <div class="flex items-center">
      <p>{{ elementValues.maxLabel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue"
import { LinearScale } from "forms-app-domain/src/main"
import RadioButton from "primevue/radiobutton"
const props = defineProps<{
  elementValues: LinearScale
}>()

const selected: Ref<number | boolean> = ref(false)

const range: Ref<number[]> = ref([])

onMounted(() => {
  range.value = createRangeArray(props.elementValues.min, props.elementValues.max)
})

function createRangeArray(start: number, end: number): number[] {
  return Array.from(Array(end - start + 1).keys()).map((x) => x + start)
}
</script>

<style scoped></style>
