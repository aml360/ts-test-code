import { Size } from './second';

export class First {
  name!: string;
  mastersku!: string;
  collection!: string;
  category!: string;
  subcategory!: string;
  gender!: string;
  year!: string;
  season!: string;
  variations!: Variation[];
}

export class Variation {
  colorcode!: string;
  sku!: string;
  images!: string[];
  colorName!: string;
  Sizes: Size[] | undefined;
  StoreCode: string | undefined;
}
