import { ChoiceOption } from "../../common/choice_option/choice_option";
import { FormElementType } from "../../form_element";
import { MultipleChoice } from "../multiple_choice";


export class MultipleChoiceBase implements MultipleChoice {
  constructor(
    id: string,
    type: FormElementType,
    title: string,
    description: string,
    options: ChoiceOption[],
    required: boolean) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.options = options;
    this.required = required;
  }
  id: string;
  type: FormElementType;
  title: string;
  description: string;
  options: ChoiceOption[];
  required: boolean;
}