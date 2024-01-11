import { Brand } from "./brand";
import { Image } from "./image";

export interface Product {
  name: string;
  image: Image;
  brand: Brand;
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
  slug: string;
}
