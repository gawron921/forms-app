// import { ChoiceOption } from "@forms-app-domain/entity/input/elements/common/choice_option/choice_option"
// import { ChoiceOptionBase } from "@forms-app-domain/entity/input/elements/common/choice_option/base/choice_option"
// import { FormElementType } from "@forms-app-domain/entity/input/elements/form_element"
// import { LongTextBase } from "@forms-app-domain/entity/input/elements/long_text/base/long_text"
// import { LongText } from "@forms-app-domain/entity/input/elements/long_text/long_text"
// import { ShortTextBase } from "@forms-app-domain/entity/input/elements/short_text/base/short_text"
// import { ShortText } from "@forms-app-domain/entity/input/elements/short_text/short_text"
// import { SingleChoiceBase } from "@forms-app-domain/entity/input/elements/single_choice/base/single_choice"
// import { SingleChoice } from "@forms-app-domain/entity/input/elements/single_choice/single_choice"
// import { FormViewBase } from "@forms-app-domain/entity/input/wrapper/base/form"
// import { FormView } from "@forms-app-domain/entity/input/wrapper/form"
// import { MultipleChoiceBase } from "@forms-app-domain/entity/input/elements/multiple_choice/base/multiple_choice"
// import { MultipleChoice } from "@forms-app-domain/entity/input/elements/multiple_choice/multiple_choice"
// import { Dropdown } from "@forms-app-domain/entity/input/elements/dropdown/dropdown"
// import { DropdownBase } from "@forms-app-domain/entity/input/elements/dropdown/base/dropdown"
// import { LinearScale } from "@forms-app-domain/entity/input/elements/linear_scale/linear_scale"
// import { LinearScaleBase } from "@forms-app-domain/entity/input/elements/linear_scale/base/linear_scale"
// import { MultipleChoiceGrid } from "@forms-app-domain/entity/input/elements/multiple_choice_grid/multiple_choice_grid"
// import { MultipleChoiceGridBase } from "@forms-app-domain/entity/input/elements/multiple_choice_grid/base/multiple_choice_grid"
// import { GridOption } from "@forms-app-domain/entity/input/elements/common/grid_option/grid_option"
// import { GridOptionBase } from "@forms-app-domain/entity/input/elements/common/grid_option/base/grid_option"
import {
  ChoiceOptionBase,
  FormElementType,
  LongTextBase,
  LongText,
  ShortTextBase,
  ShortText,
  SingleChoiceBase,
  SingleChoice,
  FormViewBase,
  FormView,
  MultipleChoiceBase,
  MultipleChoice,
  Dropdown,
  DropdownBase,
  LinearScale,
  LinearScaleBase,
  ChoiceOption,
  MultipleChoiceGrid,
  MultipleChoiceGridBase,
  GridOption,
  GridOptionBase,
} from "forms-app-domain/src/main"

const firstChoiceOption: ChoiceOption = new ChoiceOptionBase("1", "First choice option", 1)
const secondChoiceOption: ChoiceOption = new ChoiceOptionBase("2", "Second choice option", 1)
const thirdChoiceOption: ChoiceOption = new ChoiceOptionBase("3", "Third choice option", 1)

const shortText: ShortText = new ShortTextBase(
  "1",
  FormElementType.ShortText,
  "Short text title",
  "Short text title",
  "placeholder",
  true
)
const longText: LongText = new LongTextBase(
  "2",
  FormElementType.LongText,
  "Long test title",
  "Long test description",
  "placeholder",
  true
)
const singleChoice: SingleChoice = new SingleChoiceBase(
  "3",
  FormElementType.SingleChoice,
  "Single choice title",
  "Single choice description",
  [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  true
)
const multipleChoice: MultipleChoice = new MultipleChoiceBase(
  "4",
  FormElementType.MultipleChoice,
  "Multiple choice title",
  "Multiple choice description",
  [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  true
)
const dropdown: Dropdown = new DropdownBase(
  "5",
  FormElementType.Dropdown,
  "Dropdown title",
  "Dropdown description",
  [firstChoiceOption, secondChoiceOption, thirdChoiceOption],
  true
)
const linearScale: LinearScale = new LinearScaleBase(
  "6",
  FormElementType.LinearScale,
  "Linear scale title",
  "Linear scale description",
  1,
  10,
  "min",
  "top",
  true
)

const gridOptionRows: GridOption[] = [
  new GridOptionBase("1", "Row option 1"),
  new GridOptionBase("2", "Row option 2"),
  new GridOptionBase("3", "Row option 3"),
  new GridOptionBase("4", "Row option 4"),
]

const gridOptionColumns: GridOption[] = [
  new GridOptionBase("1", "Column option 1"),
  new GridOptionBase("2", "Column option 2"),
  new GridOptionBase("3", "Column option 3"),
  new GridOptionBase("4", "Column option 4"),
  new GridOptionBase("5", "Column option 5"),
]

const gridChoice: MultipleChoiceGrid = new MultipleChoiceGridBase(
  "7",
  FormElementType.MultipleChoiceGrid,
  "Multiple choice grid title",
  "Multiple choice grid description",
  gridOptionRows,
  gridOptionColumns,
  true
)
export const mockForm: FormView = new FormViewBase("1", "Form 1", "Form 1 description", [
  shortText,
  longText,
  singleChoice,
  multipleChoice,
  dropdown,
  linearScale,
  gridChoice,
])
