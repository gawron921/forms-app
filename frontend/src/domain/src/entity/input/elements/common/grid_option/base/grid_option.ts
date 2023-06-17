import { GridOption } from "../grid_option";

export class GridOptionBase implements GridOption {
  constructor(id: string, title: string, limit? : number) {
    this.id = id;
    this.title = title;
    this.limit = limit;
  }
  id: string;
  title: string;
  limit?: number;
}