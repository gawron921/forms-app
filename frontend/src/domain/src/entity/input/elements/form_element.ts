export interface FormElement {
  id: string
  type: FormElementType
  required: boolean
}

export enum FormElementType {
  ShortText = "short_text",
  LongText = "long_text",
  SingleChoice = "single_choice",
  MultipleChoice = "multiple_choice",
  Dropdown = "dropdown",
  LinearScale = "linear_scale",
  MultipleChoiceGrid = "multiple_choice_grid",
}
