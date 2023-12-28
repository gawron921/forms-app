import { ChoiceOption } from "../common/choice_option/choice_option"
import { FormElement } from "../form_element"

export interface DropdownInput extends FormElement {
  title: string
  description: string
  options: ChoiceOption[]
  selected: string | null
}
