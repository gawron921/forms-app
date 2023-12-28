import { FormElementData } from "../form_element_data"

export interface DropdownData extends FormElementData {
  id: string
  selectedValueId: string
}
