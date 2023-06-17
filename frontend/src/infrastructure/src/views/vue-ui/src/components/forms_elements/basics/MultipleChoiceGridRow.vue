<!-- <template>
  <div class="multiple-choice-grid-fields__row">
    <div class="multiple-choice-grid-fields__cell multiple-choice-grid-fields__cell--header">
      {{ rowValue.title }}
    </div>
    <div v-for="cell in rowElements" :key="`cell-${rowValue.id}-${cell.id}`" class="multiple-choice-grid-fields__cell">
      <input
        :id="`multiple-choice-grid-${rowValue.id}-${cell.id}`"
        v-model="checked"
        type="radio"
        :value="cell.id"
        :name="`multiple-choice-grid-${rowValue.id}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ChoiceOption } from "forms-app-domain/src/main"

const checked = ref<string | null>(null)

defineProps<{
  rowElements: ChoiceOption[]
  rowValue: ChoiceOption
}>()
</script>

<style scoped></style> -->
