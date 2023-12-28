import { FormElement } from "../form_element";

export interface ShortText extends FormElement {
  title: string;
  description: string;
  placeholder: string;
}