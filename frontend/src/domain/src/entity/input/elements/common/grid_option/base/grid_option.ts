import { GridOption } from "../grid_option"

export class GridOptionBase implements GridOption {
  constructor(id: string, label: string, limit?: number) {
    this.id = id
    this.label = label
    this.limit = limit
  }
  id: string
  label: string
  limit?: number
}
