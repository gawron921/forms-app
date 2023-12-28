import { FormElementType } from "../../form_element";
import { LinearScale } from "../linear_scale";

export class LinearScaleBase implements LinearScale {
  constructor(
    id: string,
    type: FormElementType,
    title: string,
    description: string,
    min: number,
    max: number,
    minLabel: string,
    maxLabel: string,
    required: boolean) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.min = min;
    this.max = max;
    this.minLabel = minLabel;
    this.maxLabel = maxLabel;
    this.required = required;
  }
  id: string;
  type: FormElementType;
  title: string;
  description: string;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
  required: boolean;
}