export class Second {
  Sku!: string;
  Sizes!: Size[];
  StoreCode!: string;
}

export class Size {
  Tag!: string;
  SizeIndex!: number;
  Qty!: number;
}

export class SecondInner implements Without<Second, 'Sku'> {
  Sizes: Size[];
  StoreCode: string;
  constructor(second: Second) {
    this.Sizes = second.Sizes;
    this.StoreCode = second.StoreCode;
  }
}


type Without<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
