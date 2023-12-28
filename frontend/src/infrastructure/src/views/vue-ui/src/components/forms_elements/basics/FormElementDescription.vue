<template>
  <p>
    {{ description }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  description?: string
}>()
</script>

<style scoped>

</style>