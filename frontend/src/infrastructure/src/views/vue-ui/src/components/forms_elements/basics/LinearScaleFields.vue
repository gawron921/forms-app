<template>
  <div class="flex justify-center">
    <div class="flex items-center">
      <p>{{ elementValues.minLabel }}</p>
    </div>
    <div v-for="value in range" :key="`linear-scale-${value}`" class="flex flex-col p-3">
      <label :for="`linear-scale-${value}`" class="text-center">{{ value }}</label>
      <input :id="`linear-scale-${value}`" v-model="selected" type="radio" :name="elementValues.id" :value="value" />
    </div>
    <div class="flex items-center">
      <p>{{ elementValues.maxLabel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue"
import { LinearScale } from "forms-app-domain/src/main"

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
