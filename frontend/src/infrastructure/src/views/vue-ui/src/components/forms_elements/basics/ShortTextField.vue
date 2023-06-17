<template>
  <div>
    <input
      type="text"
      :value="inputValue"
      :placeholder="placeholder"
      :required="required"
      class="short-text-field__input border-bottom-2 focus:outline-none text-sm background-transparent"
      @input="$emit('update:inputValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  inputValue: string,
  placeholder?: string
  required: boolean
}>()

defineEmits<{
  (e: 'update:inputValue', value: HTMLInputElement['value']): HTMLInputElement["value"]}>()
</script>

<style scoped>

</style>