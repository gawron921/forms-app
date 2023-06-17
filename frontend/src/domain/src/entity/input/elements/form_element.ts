export interface FormElement {
  id: string
  type: FormElementType
  required: boolean
}

export enum FormElementType {
  ShortText,
  LongText,
  SingleChoice,
  MultipleChoice,
  Dropdown,
  LinearScale,
  MultipleChoiceGrid,
}
