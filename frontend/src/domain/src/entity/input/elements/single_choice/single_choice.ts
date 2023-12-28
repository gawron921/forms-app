import { FormElement } from "../form_element";
import { ChoiceOption } from "../common/choice_option/choice_option";

export interface SingleChoice extends FormElement {
  title: string;
  description: string;
  options: ChoiceOption[];
}
