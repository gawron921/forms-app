import { ChoiceOption } from "../choice_option";

export class ChoiceOptionBase implements ChoiceOption {
  constructor(id: string, title: string, limit: number | null) {
    this.id = id;
    this.title = title;
    this.limit = limit;
  }
  id: string;
  title: string;
  limit: number | null;
}