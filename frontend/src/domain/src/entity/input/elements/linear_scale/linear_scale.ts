import { FormElement } from "../form_element"

export interface LinearScale extends FormElement {
  title: string
  description: string
  min: number
  max: number
  minLabel: string
  maxLabel: string
}
