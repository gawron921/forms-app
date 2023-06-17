import { FormElement } from "../../elements/form_element";
import { FormView } from "../form";

export class FormViewBase implements FormView {
  constructor(id: string, name: string, description: string, fields: FormElement[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.fields = fields;
  }
  id: string;
  name: string;
  description: string;
  fields: FormElement[];
}
