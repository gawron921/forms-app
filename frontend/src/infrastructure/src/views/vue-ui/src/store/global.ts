import { defineStore } from "pinia"
import { Ref, ref } from "vue"

interface GlobalState {
  loading: Ref<boolean>
  setLoading: (loading: boolean) => void
}

export const useGlobalStore = defineStore("global", (): GlobalState => {
  const loading = ref(false)

  const setLoading = (value: boolean) => {
    loading.value = value
  }
  return { loading, setLoading }
})
