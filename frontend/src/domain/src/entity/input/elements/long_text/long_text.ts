import { FormElement } from "../form_element";

export interface LongText extends FormElement {
  title: string;
  description: string;
  placeholder: string;
}
