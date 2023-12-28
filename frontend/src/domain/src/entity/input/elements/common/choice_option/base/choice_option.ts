import { ChoiceOption } from "../choice_option"

export class ChoiceOptionBase implements ChoiceOption {
  constructor(id: string, label: string, limit: number | null) {
    this.id = id
    this.label = label
    this.limit = limit
  }
  id: string
  label: string
  limit: number | null
}
