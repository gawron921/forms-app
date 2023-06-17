import { GridOption } from "../../common/grid_option/grid_option";
import { FormElementType } from "../../form_element";
import { MultipleChoiceGrid } from "../multiple_choice_grid";

export class MultipleChoiceGridBase implements MultipleChoiceGrid {
  constructor(
    id: string,
    type: FormElementType,
    title: string,
    description: string,
    rows: GridOption[],
    columns: GridOption[],
    required: boolean) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.rows = rows;
    this.columns = columns;
    this.required = required;
  }
  id: string;
  type: FormElementType;
  title: string;
  description: string;
  rows: GridOption[];
  columns: GridOption[];
  required: boolean;
}