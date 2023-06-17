import { ChoiceOption } from "../common/choice_option/choice_option";
import { FormElement } from "../form_element";

export interface Dropdown extends FormElement {
  title: string;
  description: string;
  options: ChoiceOption[];
}