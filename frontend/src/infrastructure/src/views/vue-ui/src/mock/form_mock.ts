import {
  FormElementType,
  LongText,
  ShortText,
  SingleChoice,
  FormViewBase,
  FormView,
  MultipleChoice,
  DropdownInput,
  LinearScale,
  ChoiceOption,
  MultipleChoiceGrid,
  GridOption,
} from "forms-app-domain/src/main"

const firstChoiceOption: ChoiceOption = { id: "1", label: "First choice option", limit: null }
const secondChoiceOption: ChoiceOption = { id: "2", label: "Second choice option", limit: 1 }
const thirdChoiceOption: ChoiceOption = { id: "3", label: "Third choice option", limit: 1 }

const shortText: ShortText = {
  id: "2",
  type: FormElementType.ShortText,
  title: "Short text title",
  description: "Short text description",
  placeholder: "placeholder",
  required: true,
}

const longText: LongText = {
  id: "2",
  type: FormElementType.LongText,
  title: "Long test title",
  description: "Long test description",
  placeholder: "placeholder",
  required: true,
}

const singleChoice: SingleChoice = {
  id: "3",
  type: FormElementType.SingleChoice,
  title: "Single choice title",
  description: "Single choice description",
  options: [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  required: true,
}

const multipleChoice: MultipleChoice = {
  id: "4",
  type: FormElementType.MultipleChoice,
  title: "Multiple choice title",
  description: "Multiple choice description",
  options: [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  required: true,
}

const dropdown: DropdownInput = {
  id: "5",
  type: FormElementType.Dropdown,
  title: "Dropdown title",
  description: "Dropdown description",
  options: [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  required: true,
  selected: null,
}

const linearScale: LinearScale = {
  id: "6",
  type: FormElementType.LinearScale,
  title: "Linear scale title",
  description: "Linear scale description",
  min: 1,
  max: 10,
  minLabel: "min",
  maxLabel: "max",
  required: true,
}

const gridOptionRows: GridOption[] = [
  { id: "1", label: "Row option 1", limit: null },
  { id: "2", label: "Row option 2", limit: null },
  { id: "3", label: "Row option 3", limit: null },
  { id: "4", label: "Row option 4", limit: null },
]

const gridOptionColumns: GridOption[] = [
  { id: "1", label: "Column option 1", limit: null },
  { id: "2", label: "Column option 2", limit: null },
  { id: "3", label: "Column option 3", limit: null },
  { id: "4", label: "Column option 4", limit: null },
  { id: "5", label: "Column option 5", limit: null },
]

const gridChoice: MultipleChoiceGrid = {
  id: "7",
  type: FormElementType.MultipleChoiceGrid,
  title: "Multiple choice grid title",
  description: "Multiple choice grid description",
  rows: gridOptionRows,
  columns: gridOptionColumns,
  required: true,
}

export const mockForm: FormView = new FormViewBase("1", "Form 1", "Form 1 description", [
  shortText,
  longText,
  singleChoice,
  multipleChoice,
  dropdown,
  linearScale,
  gridChoice,
])
