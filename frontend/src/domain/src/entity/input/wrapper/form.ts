import { FormElement } from "../elements/form_element"

export interface FormView {
  id: string
  name: string
  description: string
  fields: FormElement[]
}
