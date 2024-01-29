import { Brand } from "./brand";

export interface Timeline {
  title: string;
  description: string;
  date: string;
  source: string;
  brand: Brand;
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
}
