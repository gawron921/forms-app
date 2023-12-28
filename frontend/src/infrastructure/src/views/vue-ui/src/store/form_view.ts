import { FormElementData } from "forms-app-domain/src/entity/data/elements/form_element_data"
import { FormInputData } from "forms-app-domain/src/entity/data/wrapper/form_data"
import { FormElement, FormView } from "forms-app-domain/src/main"
import { defineStore } from "pinia"
import { Ref, ref } from "vue"

interface FormViewState {
  formViewStructure: Ref<FormView | null>
  setFormViewStructure: (formViewStructure: FormView) => void
  addFormViewStructurefields: (formViewStructureId: FormElement) => void

  formViewUserInput: Ref<FormInputData | null>
  setFormViewUserInput: (formViewUserInput: FormInputData) => void
  addFormViewUserInputFields: (formViewUserInputId: FormElementData) => void
}

export const useFormViewStore = defineStore("formView", (): FormViewState => {
  const formViewStructure = ref<FormView | null>(null)
  const formViewUserInput = ref<FormInputData | null>(null)

  const setFormViewStructure = (value: FormView) => {
    formViewStructure.value = value
  }

  const addFormViewStructurefields = (formViewStructureId: FormElement) => {
    formViewStructure.value?.fields.push(formViewStructureId)
  }

  const setFormViewUserInput = (value: FormInputData) => {
    formViewUserInput.value = value
  }

  const addFormViewUserInputFields = (formViewUserInputId: FormElementData) => {
    formViewUserInput.value?.fields.push(formViewUserInputId)
  }

  return {
    formViewStructure,
    setFormViewStructure,
    formViewUserInput,
    setFormViewUserInput,
    addFormViewStructurefields,
    addFormViewUserInputFields,
  }
})
