import { FormElement } from "../form_element";
import { GridOption } from "../common/grid_option/grid_option";

export interface MultipleChoiceGrid extends FormElement {
  title: string;
  description: string;
  rows: GridOption[];
  columns: GridOption[];
}
