import { Image } from "./image";
import { Product } from "./product";

export interface Brand {
  name: string;
  image: Image;
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
  products: boolean[];
  slug: string;
  risk: string;
  _model: string;
}
