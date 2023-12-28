import { ShortText } from "../short_text";
import { FormElementType } from "../../form_element";

export class ShortTextBase implements ShortText {
  constructor(id: string, type: FormElementType, title: string, description: string, placeholder: string, required: boolean) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.placeholder = placeholder;
    this.required = required;
  }
  title: string;
  description: string;
  placeholder: string;
  id: string;
  type: FormElementType;
  required: boolean;
}

